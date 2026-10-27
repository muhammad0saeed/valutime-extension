// offscreen.js — plays the alert sound chosen in Settings (sounds come from sounds.js)

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg.type === 'PLAY_ALARM') {
    try {
      playWebAudioSound(new AudioContext(), msg.sound || 'bell');
    } catch (e) {
      console.error('Chime error:', e);
    }
    sendResponse({ ok: true });
  }
});
