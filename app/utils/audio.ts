"use client";

class AudioEngine {
  private ctx: AudioContext | null = null;
  private ambientOsc1: OscillatorNode | null = null;
  private ambientOsc2: OscillatorNode | null = null;
  private ambientLFO: OscillatorNode | null = null;
  private ambientGain: GainNode | null = null;
  private masterGain: GainNode | null = null;
  private filter: BiquadFilterNode | null = null;
  private isMuted: boolean = true;
  private isInitialized: boolean = false;

  constructor() {}

  init() {
    if (this.isInitialized || typeof window === "undefined") return;
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;

      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);

      this.setupAmbience();
      this.isInitialized = true;
    } catch (e) {
      console.warn("Failed to initialize audio context:", e);
    }
  }

  private setupAmbience() {
    if (!this.ctx || !this.masterGain) return;

    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = "lowpass";
    this.filter.frequency.setValueAtTime(100, this.ctx.currentTime);
    this.filter.Q.setValueAtTime(3, this.ctx.currentTime);

    this.ambientOsc1 = this.ctx.createOscillator();
    this.ambientOsc1.type = "sine";
    this.ambientOsc1.frequency.setValueAtTime(55, this.ctx.currentTime); // A1 low drone

    this.ambientOsc2 = this.ctx.createOscillator();
    this.ambientOsc2.type = "triangle";
    this.ambientOsc2.frequency.setValueAtTime(110, this.ctx.currentTime); // A2 octave harmonic

    this.ambientGain = this.ctx.createGain();
    this.ambientGain.gain.setValueAtTime(0.06, this.ctx.currentTime);

    // LFO for moving filter frequency (organic breathing effect)
    this.ambientLFO = this.ctx.createOscillator();
    this.ambientLFO.frequency.setValueAtTime(0.15, this.ctx.currentTime); // 0.15Hz breathing frequency
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(25, this.ctx.currentTime);

    this.ambientLFO.connect(lfoGain);
    lfoGain.connect(this.filter.frequency);

    this.ambientOsc1.connect(this.filter);
    this.ambientOsc2.connect(this.filter);
    this.filter.connect(this.ambientGain);
    this.ambientGain.connect(this.masterGain);

    this.ambientOsc1.start();
    this.ambientOsc2.start();
    this.ambientLFO.start();
  }

  setMute(mute: boolean) {
    this.isMuted = mute;
    if (!this.isInitialized) {
      this.init();
    }
    if (!this.ctx || !this.masterGain) return;

    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }

    const targetGain = mute ? 0 : 0.6;
    this.masterGain.gain.setTargetAtTime(targetGain, this.ctx.currentTime, 0.15);
  }

  toggleMute(): boolean {
    this.setMute(!this.isMuted);
    return this.isMuted;
  }

  getMuteStatus(): boolean {
    return this.isMuted;
  }

  // A deep, low-frequency pulse (heartbeat)
  playPulse(frequency = 60, duration = 0.5) {
    if (this.isMuted || !this.ctx || !this.masterGain) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const lowpass = this.ctx.createBiquadFilter();

      osc.type = "sine";
      osc.frequency.setValueAtTime(frequency, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(10, this.ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.5, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

      lowpass.type = "lowpass";
      lowpass.frequency.setValueAtTime(70, this.ctx.currentTime);

      osc.connect(lowpass);
      lowpass.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio node errors ignored safely
    }
  }

  // Short, high-end metallic chime click for UI interactions
  playClick() {
    if (this.isMuted || !this.ctx || !this.masterGain) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(1800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(600, this.ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (e) {
      // Audio node errors ignored safely
    }
  }

  // Climax swell chords for Act 6
  playSwell() {
    if (this.isMuted || !this.ctx || !this.masterGain) return;

    try {
      // Atmospheric minor chord sweep (A minor pentatonic vibes)
      const frequencies = [110, 146.8, 165, 220, 293.7];
      const now = this.ctx.currentTime;
      const duration = 2.5;

      frequencies.forEach((freq, index) => {
        if (!this.ctx || !this.masterGain) return;

        const osc = this.ctx.createOscillator();
        const oscGain = this.ctx.createGain();
        const filterNode = this.ctx.createBiquadFilter();

        osc.type = index % 2 === 0 ? "sine" : "triangle";
        osc.frequency.setValueAtTime(freq, now);
        osc.frequency.linearRampToValueAtTime(freq * 1.5, now + duration);

        oscGain.gain.setValueAtTime(0, now);
        oscGain.gain.linearRampToValueAtTime(0.08, now + 0.4);
        oscGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

        filterNode.type = "lowpass";
        filterNode.frequency.setValueAtTime(300, now);
        filterNode.frequency.exponentialRampToValueAtTime(2000, now + duration);

        const delayNode = this.ctx.createDelay();
        delayNode.delayTime.setValueAtTime(index * 0.06, now);

        osc.connect(delayNode);
        delayNode.connect(filterNode);
        filterNode.connect(oscGain);
        oscGain.connect(this.masterGain);

        osc.start();
        osc.stop(now + duration);
      });
    } catch (e) {
      // Audio node errors ignored safely
    }
  }

  // Update background drone properties relative to the user's scroll progression/act
  updateAmbienceFrequency(act: number) {
    if (!this.ctx || !this.ambientOsc1 || !this.ambientOsc2 || !this.filter) return;
    try {
      const now = this.ctx.currentTime;
      // Frequency goes from 55Hz to 70Hz as the project awakens
      const baseFreq = 55 + act * 2.5;
      // Filter frequency opens up from 100Hz to 280Hz, letting in more bright harmonics
      const cutOff = 100 + act * 30;

      this.ambientOsc1.frequency.setTargetAtTime(baseFreq, now, 0.4);
      this.ambientOsc2.frequency.setTargetAtTime(baseFreq * 2, now, 0.4);
      this.filter.frequency.setTargetAtTime(cutOff, now, 0.4);
    } catch (e) {
      // Ignore audio synthesis errors on scroll
    }
  }
}

export const audioEngine = new AudioEngine();
