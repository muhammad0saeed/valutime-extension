// sounds.js — Pomodoro alert sounds, shared by the popup (preview) and offscreen.js (real alerts)
'use strict';

function playWebAudioSound(ctx, type) {
  if (type === 'none') return;
  const now = ctx.currentTime;
  if (type === 'chime') {
    [1046.5, 1318.5, 1568, 2093].forEach((f, i) => {
      const o = ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = f;
      const g = ctx.createGain(); o.connect(g); g.connect(ctx.destination);
      const t = now + i * 0.15;
      g.gain.setValueAtTime(0.3, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.9);
      o.start(t); o.stop(t + 1.0);
    });
  } else if (type === 'digital') {
    [880, 1760, 880].forEach((f, i) => {
      const o = ctx.createOscillator(); o.type = 'square'; o.frequency.value = f;
      const g = ctx.createGain(); o.connect(g); g.connect(ctx.destination);
      const t = now + i * 0.12;
      g.gain.setValueAtTime(0.15, t); g.gain.setValueAtTime(0, t + 0.09);
      o.start(t); o.stop(t + 0.1);
    });
  } else if (type === 'gentle') {
    const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = 440;
    const g = ctx.createGain(); o.connect(g); g.connect(ctx.destination);
    g.gain.setValueAtTime(0, now); g.gain.linearRampToValueAtTime(0.2, now + 0.3);
    g.gain.exponentialRampToValueAtTime(0.001, now + 1.8);
    o.start(now); o.stop(now + 2.0);
  } else {
    // 'bell' (default)
    [523.25, 659.25, 783.99, 1046.5, 783.99].forEach((f, i) => {
      const o = ctx.createOscillator(); o.type = 'sine'; o.frequency.value = f;
      const g = ctx.createGain(); o.connect(g); g.connect(ctx.destination);
      const t = now + i * 0.22;
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.35, t + 0.04);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.7);
      o.start(t); o.stop(t + 0.8);
    });
  }
}
