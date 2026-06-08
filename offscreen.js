// offscreen.js — plays alarm chime via Web Audio API

chrome.runtime.onMessage.addListener((msg, _sender, sendResponse) => {
  if (msg.type === 'PLAY_ALARM') {
    playChime();
    sendResponse({ ok: true });
  }
});

function playChime() {
  try {
    const ctx = new AudioContext();

    // Ascending 4-note chime: C5 → E5 → G5 → C6, then fade
    const melody = [
      { freq: 523.25, t: 0.00 },  // C5
      { freq: 659.25, t: 0.25 },  // E5
      { freq: 783.99, t: 0.50 },  // G5
      { freq: 1046.5, t: 0.75 },  // C6
      { freq: 783.99, t: 1.10 },  // G5 echo
      { freq: 523.25, t: 1.40 },  // C5 close
    ];

    melody.forEach(({ freq, t }) => {
      const osc  = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.type = 'sine';
      osc.frequency.value = freq;

      const start = ctx.currentTime + t;
      gain.gain.setValueAtTime(0, start);
      gain.gain.linearRampToValueAtTime(0.35, start + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.001, start + 0.65);

      osc.start(start);
      osc.stop(start + 0.7);
    });
  } catch (e) {
    console.error('Chime error:', e);
  }
}
