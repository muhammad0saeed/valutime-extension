// background.js — FreelancerHub service worker

// ─── Alarm handler ────────────────────────────────────
chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === 'pomo_end') {
    await handlePomoEnd();
    return;
  }
  // Regular clock alarm
  const data = await chrome.storage.local.get(['alarms']);
  const alarms = data.alarms || [];
  const idx = alarms.findIndex(a => a.id === alarm.name);
  if (idx === -1) return;
  const a = alarms[idx];
  if (!a.active) return;

  chrome.notifications.create(alarm.name, {
    type: 'basic', iconUrl: 'icons/icon128.png',
    title: `⏰ ${a.label || 'Alarm'}`,
    message: `${a.time} · ${a.tz}`, priority: 2,
  });
  await playAlarmSound();

  if (a.repeat !== 'once') {
    const when = nextAlarmMs(a.time, a.tz);
    if (when > Date.now()) chrome.alarms.create(a.id, { when });
  } else {
    alarms[idx].active = false;
    chrome.storage.local.set({ alarms });
  }
});

// ─── Pomodoro phase transition ───────────────────────
async function handlePomoEnd() {
  const data = await chrome.storage.local.get(['pomo']);
  const pomo = data.pomo || {};
  const ps   = pomo.settings || {};
  const sessionsBeforeLong = ps.sessionsBeforeLong || 4;
  const phase = pomo.phase || 'idle';

  let nextPhase, nextMins, title, msg;

  if (phase === 'work') {
    const sessions = (pomo.sessions || 0) + 1;
    pomo.sessions = sessions;

    const isLong = sessions % sessionsBeforeLong === 0;
    nextPhase = isLong ? 'longBreak' : 'break';
    nextMins  = isLong ? (ps.longBreakMins || 15) : (ps.breakMins || 5);
    title = isLong ? '🎉 Long break time!' : '☕ Short break time!';
    msg   = `${nextMins} min ${isLong ? 'long' : 'short'} break. You completed session ${sessions}!`;

    // Disable site blocking during break
    await disableBlocking();

  } else {
    // break → back to work
    nextPhase = 'work';
    nextMins  = ps.workMins || 25;
    title = '🍅 Focus time!';
    msg   = `${nextMins} min focus session starting.`;

    // Re-enable blocking if configured
    if (ps.blockingEnabled && ps.blockedSites && ps.blockedSites.length) {
      await enableBlocking(ps.blockedSites);
    }
  }

  pomo.phase        = nextPhase;
  pomo.endTime      = Date.now() + nextMins * 60000;
  pomo.pendingNotif = { phase: nextPhase, title, message: msg };
  chrome.storage.local.set({ pomo });
  chrome.alarms.create('pomo_end', { when: pomo.endTime });

  // System notification
  chrome.notifications.create(`pomo_${Date.now()}`, {
    type: 'basic', iconUrl: 'icons/icon128.png',
    title, message: msg, priority: 2,
  });

  // Extension icon badge
  const badgeText  = nextPhase === 'work' ? '▶' : nextPhase === 'longBreak' ? '🎉' : '☕';
  const badgeColor = nextPhase === 'work' ? '#2563eb' : '#22c55e';
  try {
    chrome.action.setBadgeText({ text: badgeText });
    chrome.action.setBadgeBackgroundColor({ color: badgeColor });
  } catch (_) {}

  await playAlarmSound();
}

// ─── Audio ───────────────────────────────────────────
async function playAlarmSound() {
  try {
    const contexts = await chrome.runtime.getContexts({ contextTypes: ['OFFSCREEN_DOCUMENT'] });
    if (contexts.length === 0) {
      await chrome.offscreen.createDocument({
        url: 'offscreen.html',
        reasons: ['AUDIO_PLAYBACK'],
        justification: 'Alarm chime',
      });
    }
    chrome.runtime.sendMessage({ type: 'PLAY_ALARM' });
    setTimeout(async () => {
      try {
        const ctxs = await chrome.runtime.getContexts({ contextTypes: ['OFFSCREEN_DOCUMENT'] });
        if (ctxs.length > 0) await chrome.offscreen.closeDocument();
      } catch (_) {}
    }, 4000);
  } catch (e) { console.warn('Audio error:', e); }
}

// ─── Site blocking ────────────────────────────────────
async function enableBlocking(sites) {
  try {
    const rules = (sites||[]).map((site, idx) => ({
      id: idx + 100, priority: 1,
      action: { type: 'block' },
      condition: { urlFilter: `||${site}^`, resourceTypes: ['main_frame','sub_frame'] },
    }));
    if (!rules.length) return;
    const existing = await chrome.declarativeNetRequest.getDynamicRules();
    await chrome.declarativeNetRequest.updateDynamicRules({
      removeRuleIds: existing.map(r => r.id),
      addRules: rules,
    });
  } catch (e) { console.warn('Block enable:', e); }
}

async function disableBlocking() {
  try {
    const existing = await chrome.declarativeNetRequest.getDynamicRules();
    if (existing.length) {
      await chrome.declarativeNetRequest.updateDynamicRules({ removeRuleIds: existing.map(r => r.id) });
    }
  } catch (e) { console.warn('Block disable:', e); }
}

// ─── Alarm timestamp helper ──────────────────────────
function nextAlarmMs(timeStr, tz) {
  const [h, m] = timeStr.split(':').map(Number);
  const now = new Date();
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: tz, year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric', hour12: false,
  }).formatToParts(now);
  const p = {}; parts.forEach(x => { p[x.type] = x.value; });
  const tzH   = parseInt(p.hour) === 24 ? 0 : parseInt(p.hour);
  const tzMin  = parseInt(p.minute);
  const dAdd   = (h * 60 + m) <= (tzH * 60 + tzMin) ? 1 : 0;
  const midnight = Date.UTC(parseInt(p.year), parseInt(p.month) - 1, parseInt(p.day) + dAdd);
  const offMins  = (tzH * 60 + tzMin) - (now.getUTCHours() * 60 + now.getUTCMinutes());
  return midnight + (h * 60 + m - offMins) * 60000;
}
