/**
 * ==========================================================================
 * CARTOON TV — ULTRA-REALISTIC VINTAGE CRT TELEVISION ENGINE
 * Centralized State, Physical Hardware Controls & Analog Simulation
 * ==========================================================================
 */

(function () {
    'use strict';

    /* ==========================================================================
       1. CENTRAL CHANNEL CONFIGURATION
       ========================================================================== */
    const channels = [
        {
            id: 1,
            channel: "01",
            name: "DORAEMON",
            image: "images/doremon.png",
            song: "songs/doremon_song.mp3",
            ambientGlow: "rgba(45, 125, 210, 0.45)",
            colorTint: "rgba(45, 125, 210, 0.15)",
            synthNotes: [
                { note: 523.25, dur: 0.3 },
                { note: 587.33, dur: 0.3 },
                { note: 659.25, dur: 0.3 },
                { note: 783.99, dur: 0.5 },
                { note: 659.25, dur: 0.3 },
                { note: 587.33, dur: 0.3 },
                { note: 523.25, dur: 0.6 },
                { note: 0, dur: 0.2 },
                { note: 587.33, dur: 0.3 },
                { note: 659.25, dur: 0.3 },
                { note: 587.33, dur: 0.3 },
                { note: 523.25, dur: 0.3 },
                { note: 440.00, dur: 0.6 }
            ]
        },
        {
            id: 2,
            channel: "02",
            name: "NINJA HATTORI",
            image: "images/ninja_hattori.png",
            song: "songs/ninja_hattori_ringtone.mp3",
            ambientGlow: "rgba(31, 48, 110, 0.5)",
            colorTint: "rgba(230, 57, 70, 0.15)",
            synthNotes: [
                { note: 440.00, dur: 0.25 },
                { note: 440.00, dur: 0.25 },
                { note: 523.25, dur: 0.25 },
                { note: 587.33, dur: 0.35 },
                { note: 659.25, dur: 0.25 },
                { note: 587.33, dur: 0.25 },
                { note: 523.25, dur: 0.35 },
                { note: 440.00, dur: 0.5 },
                { note: 0, dur: 0.15 },
                { note: 392.00, dur: 0.25 },
                { note: 440.00, dur: 0.4 }
            ]
        },
        {
            id: 3,
            channel: "03",
            name: "TOM & JERRY",
            image: "images/tom&jerry.png",
            song: "songs/tom_and_jerry_theme.mp3",
            ambientGlow: "rgba(231, 111, 81, 0.45)",
            colorTint: "rgba(231, 111, 81, 0.15)",
            synthNotes: [
                { note: 466.16, dur: 0.2 },
                { note: 523.25, dur: 0.2 },
                { note: 587.33, dur: 0.2 },
                { note: 698.46, dur: 0.35 },
                { note: 659.25, dur: 0.2 },
                { note: 587.33, dur: 0.2 },
                { note: 523.25, dur: 0.35 },
                { note: 466.16, dur: 0.2 },
                { note: 392.00, dur: 0.4 }
            ]
        },
        {
            id: 4,
            channel: "04",
            name: "SHINCHAN",
            image: "images/shinchan.png",
            song: "songs/shinchan_song.mp3",
            ambientGlow: "rgba(230, 57, 70, 0.45)",
            colorTint: "rgba(255, 209, 102, 0.15)",
            synthNotes: [
                { note: 523.25, dur: 0.3 },
                { note: 659.25, dur: 0.3 },
                { note: 783.99, dur: 0.3 },
                { note: 880.00, dur: 0.4 },
                { note: 783.99, dur: 0.3 },
                { note: 659.25, dur: 0.3 },
                { note: 587.33, dur: 0.4 },
                { note: 523.25, dur: 0.5 }
            ]
        },
        {
            id: 5,
            channel: "05",
            name: "BEN 10",
            image: "images/ben10.png",
            song: "songs/ben_10.mp3",
            ambientGlow: "rgba(34, 197, 94, 0.5)",
            colorTint: "rgba(34, 197, 94, 0.15)",
            synthNotes: [
                { note: 440.00, dur: 0.2 },
                { note: 523.25, dur: 0.2 },
                { note: 587.33, dur: 0.25 },
                { note: 659.25, dur: 0.2 },
                { note: 783.99, dur: 0.35 },
                { note: 659.25, dur: 0.2 },
                { note: 587.33, dur: 0.2 },
                { note: 440.00, dur: 0.5 }
            ]
        },
        {
            id: 6,
            channel: "06",
            name: "CHHOTA BHEEM",
            image: "images/chota_bheem.png",
            song: "songs/chota_bheem.mp3",
            ambientGlow: "rgba(244, 162, 97, 0.45)",
            colorTint: "rgba(244, 162, 97, 0.15)",
            synthNotes: [
                { note: 392.00, dur: 0.25 },
                { note: 440.00, dur: 0.25 },
                { note: 523.25, dur: 0.35 },
                { note: 587.33, dur: 0.25 },
                { note: 659.25, dur: 0.35 },
                { note: 587.33, dur: 0.25 },
                { note: 523.25, dur: 0.4 },
                { note: 392.00, dur: 0.5 }
            ]
        },
        {
            id: 7,
            channel: "07",
            name: "OGGY & THE COCKROACHES",
            image: "images/oggy_the_cockroaches.png",
            song: "songs/oggy_the_cockroaches.mp3",
            ambientGlow: "rgba(56, 239, 125, 0.45)",
            colorTint: "rgba(56, 239, 125, 0.15)",
            synthNotes: [
                { note: 349.23, dur: 0.2 },
                { note: 415.30, dur: 0.2 },
                { note: 466.16, dur: 0.25 },
                { note: 523.25, dur: 0.3 },
                { note: 466.16, dur: 0.2 },
                { note: 415.30, dur: 0.2 },
                { note: 349.23, dur: 0.35 },
                { note: 261.63, dur: 0.4 }
            ]
        },
        {
            id: 8,
            channel: "08",
            name: "MR. BEAN",
            image: "images/mr_bean.png",
            song: "songs/mr_bean_cartoon.mp3",
            ambientGlow: "rgba(234, 179, 8, 0.45)",
            colorTint: "rgba(234, 179, 8, 0.15)",
            synthNotes: [
                { note: 523.25, dur: 0.3 },
                { note: 659.25, dur: 0.2 },
                { note: 783.99, dur: 0.3 },
                { note: 1046.50, dur: 0.4 },
                { note: 783.99, dur: 0.2 },
                { note: 659.25, dur: 0.2 },
                { note: 523.25, dur: 0.5 }
            ]
        }
    ];

    /* ==========================================================================
       2. SINGLE CENTRAL STATE OBJECT
       ========================================================================== */
    const tvState = {
        poweredOn: true,
        currentChannel: 0,      // 0-indexed (0 = CH 01)
        volume: 75,             // 0 to 100
        isMuted: false,
        prevVolume: 75,
        tuning: 50,             // 0 to 100 (50 is crystal clear center)
        brightness: 50,         // 0 to 100
        contrast: 50,           // 0 to 100
        memoryMode: false,
        isPlaying: false,
        isChangingChannel: false
    };

    /* Audio Engine State */
    let audioContext = null;
    let synthLoopTimer = null;
    let synthCurrentNoteIndex = 0;
    let isUsingHtml5Audio = false;
    let osdTimer = null;

    /* ==========================================================================
       3. DOM ELEMENT REFERENCES
       ========================================================================== */
    const crtTube = document.getElementById("crt-tube");
    const cartoonBg = document.getElementById("cartoon-bg-curr");
    const cartoonTitle = document.getElementById("cartoon-title");
    const crtTitleContainer = document.getElementById("crt-title-container");
    const crtColorTint = document.getElementById("crt-color-tint");
    const crtTuningNoise = document.getElementById("crt-tuning-noise");
    const crtStatic = document.getElementById("crt-static");
    const crtOsdOverlay = document.getElementById("crt-osd-overlay");
    const crtOsdText = document.getElementById("crt-osd-text");
    const crtMemoryToast = document.getElementById("crt-memory-toast");
    const standbyOverlay = document.getElementById("standby-overlay");
    const shutdownLayer = document.getElementById("shutdown-layer");
    const powerLed = document.getElementById("power-led");
    const speakerLed = document.getElementById("speaker-led");
    const roomGlow = document.getElementById("room-glow");

    // Physical TV Controls
    const btnPower = document.getElementById("btn-power");
    const btnPlay = document.getElementById("btn-play");
    const playBtnText = document.getElementById("play-btn-text");
    const btnChPrev = document.getElementById("btn-ch-prev");
    const btnChNext = document.getElementById("btn-ch-next");
    const channelKnob = document.getElementById("channel-knob");
    const scaleMarkers = document.querySelectorAll(".scale-num");
    const btnMemory = document.getElementById("btn-memory");

    // Analog Adjustment Knobs
    const knobVolume = document.getElementById("knob-volume");
    const knobTuning = document.getElementById("knob-tuning");
    const knobBrightness = document.getElementById("knob-brightness");
    const knobContrast = document.getElementById("knob-contrast");

    // Central HTML5 Audio Element
    const html5Audio = document.getElementById("html5-audio");
    html5Audio.loop = true;

    /* ==========================================================================
       4. SOUND EFFECTS & SYNTHESIZER
       ========================================================================== */
    function getAudioContext() {
        if (!audioContext) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) {
                audioContext = new AudioCtx();
            }
        }
        if (audioContext && audioContext.state === "suspended") {
            audioContext.resume().catch(() => {});
        }
        return audioContext;
    }

    /**
     * Mechanical Rotary Switch "CLACK" + TV Static Burst
     */
    function playSfxRotarySwitch() {
        try {
            const ctx = getAudioContext();
            if (!ctx) return;
            const now = ctx.currentTime;

            // 1. Mechanical Clack Impulse
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "triangle";
            osc.frequency.setValueAtTime(180, now);
            osc.frequency.exponentialRampToValueAtTime(25, now + 0.08);

            gain.gain.setValueAtTime(0.35, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.09);

            // 2. White Noise Burst
            const bufferSize = Math.floor(ctx.sampleRate * 0.12);
            const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
            const data = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                data[i] = Math.random() * 2 - 1;
            }

            const noise = ctx.createBufferSource();
            noise.buffer = buffer;

            const filter = ctx.createBiquadFilter();
            filter.type = "bandpass";
            filter.frequency.value = 1800;

            const noiseGain = ctx.createGain();
            noiseGain.gain.setValueAtTime(0.18, now);
            noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

            noise.connect(filter);
            filter.connect(noiseGain);
            noiseGain.connect(ctx.destination);

            noise.start(now);
        } catch (e) {}
    }

    /**
     * Physical Button Click Sound
     */
    function playSfxButtonClick() {
        try {
            const ctx = getAudioContext();
            if (!ctx) return;
            const now = ctx.currentTime;

            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "square";
            osc.frequency.setValueAtTime(280, now);
            osc.frequency.exponentialRampToValueAtTime(60, now + 0.035);

            gain.gain.setValueAtTime(0.2, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);

            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.04);
        } catch (e) {}
    }

    /**
     * Cathode Flyback Whine & Power Off Pop
     */
    function playSfxPowerOff() {
        try {
            const ctx = getAudioContext();
            if (!ctx) return;
            const now = ctx.currentTime;

            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(15625, now);
            osc.frequency.exponentialRampToValueAtTime(70, now + 0.4);

            gain.gain.setValueAtTime(0.12, now);
            gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start(now);
            osc.stop(now + 0.42);
        } catch (e) {}
    }

    /**
     * Procedural Lo-Fi Synth Melodies (Fallback if local audio is missing/blocked)
     */
    function playSynthStep() {
        if (!tvState.isPlaying || !tvState.poweredOn || tvState.isMuted) return;

        const currentData = channels[tvState.currentChannel];
        const notes = currentData.synthNotes;
        if (!notes || notes.length === 0) return;

        const noteObj = notes[synthCurrentNoteIndex];
        const tuningClarity = Math.max(0.05, 1 - (Math.abs(tvState.tuning - 50) / 50) * 0.8);
        const vol = (tvState.volume / 100) * tuningClarity;

        if (noteObj.note > 0 && vol > 0) {
            try {
                const ctx = getAudioContext();
                if (ctx) {
                    const now = ctx.currentTime;
                    const osc1 = ctx.createOscillator();
                    const filter = ctx.createBiquadFilter();
                    const gain = ctx.createGain();

                    osc1.type = "triangle";
                    osc1.frequency.setValueAtTime(noteObj.note, now);

                    filter.type = "lowpass";
                    filter.frequency.setValueAtTime(1300, now);

                    const dur = noteObj.dur || 0.3;
                    gain.gain.setValueAtTime(0.001, now);
                    gain.gain.linearRampToValueAtTime(0.12 * vol, now + 0.02);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + dur);

                    osc1.connect(filter);
                    filter.connect(gain);
                    gain.connect(ctx.destination);

                    osc1.start(now);
                    osc1.stop(now + dur + 0.02);
                }
            } catch (e) {}
        }

        synthCurrentNoteIndex = (synthCurrentNoteIndex + 1) % notes.length;
        const nextDelay = (noteObj.dur || 0.3) * 1000;
        synthLoopTimer = setTimeout(playSynthStep, nextDelay);
    }

    function startProceduralSynth() {
        stopProceduralSynth();
        synthCurrentNoteIndex = 0;
        playSynthStep();
    }

    function stopProceduralSynth() {
        if (synthLoopTimer) {
            clearTimeout(synthLoopTimer);
            synthLoopTimer = null;
        }
    }

    /* ==========================================================================
       5. ON-SCREEN DISPLAY (OSD)
       ========================================================================== */
    function showOsd(text, duration = 1000) {
        clearTimeout(osdTimer);
        crtOsdText.textContent = text;
        crtOsdOverlay.classList.add("active");
        osdTimer = setTimeout(() => {
            crtOsdOverlay.classList.remove("active");
        }, duration);
    }

    /* ==========================================================================
       6. CENTRAL AUDIO SYSTEM
       ========================================================================== */
    function updateAudioVolume() {
        if (tvState.isMuted) {
            html5Audio.volume = 0;
        } else {
            const tuningClarity = Math.max(0.05, 1 - (Math.abs(tvState.tuning - 50) / 50) * 0.8);
            const effectiveVol = (tvState.volume / 100) * tuningClarity;
            html5Audio.volume = Math.max(0, Math.min(1, effectiveVol));
        }
    }

    function loadAndPlayTrack() {
        const currentData = channels[tvState.currentChannel];
        html5Audio.src = currentData.song;
        updateAudioVolume();

        if (tvState.isPlaying && tvState.poweredOn) {
            speakerLed.classList.add("pulsing");
            const playPromise = html5Audio.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    isUsingHtml5Audio = true;
                    stopProceduralSynth();
                }).catch(() => {
                    // Autoplay blocked or audio missing -> use fallback without errors
                    isUsingHtml5Audio = false;
                    startProceduralSynth();
                });
            }
        } else {
            speakerLed.classList.remove("pulsing");
            html5Audio.pause();
            stopProceduralSynth();
        }
    }

    function togglePlayPause() {
        playSfxButtonClick();
        tvState.isPlaying = !tvState.isPlaying;

        if (tvState.isPlaying) {
            playBtnText.textContent = "PAUSE";
            if (tvState.poweredOn) {
                loadAndPlayTrack();
            }
        } else {
            playBtnText.textContent = "PLAY";
            speakerLed.classList.remove("pulsing");
            html5Audio.pause();
            stopProceduralSynth();
        }
    }

    /* Listen for audio errors gracefully */
    html5Audio.addEventListener("error", () => {
        isUsingHtml5Audio = false;
        showOsd("AUDIO UNAVAILABLE", 900);
        if (tvState.isPlaying && tvState.poweredOn) {
            startProceduralSynth();
        }
    });

    /* ==========================================================================
       7. CHANNEL SWITCHING SYSTEM
       ========================================================================== */
    function setChannel(newIndex) {
        if (tvState.isChangingChannel) return;
        tvState.isChangingChannel = true;

        // Wrap around correctly across all channels (01 <-> 08)
        tvState.currentChannel = (newIndex + channels.length) % channels.length;
        const currentCartoon = channels[tvState.currentChannel];

        // 1. Play mechanical rotary sound
        playSfxRotarySwitch();

        // 2. Rotate the physical channel knob to match channel position
        const knobDegrees = tvState.currentChannel * (360 / channels.length);
        channelKnob.style.transform = `rotate(${knobDegrees}deg)`;

        // 3. Highlight active channel marker on dial
        scaleMarkers.forEach((marker, idx) => {
            marker.classList.toggle("active", idx === tvState.currentChannel);
        });

        // 4. CRT Image flickering, static noise, and temporary fade
        crtStatic.classList.add("active");
        cartoonBg.style.opacity = "0.2";
        crtTitleContainer.style.opacity = "0";

        // 5. Temporary channel OSD (CH 01, CH 02, etc.)
        showOsd(`CH ${currentCartoon.channel}`, 1100);

        // 6. Complete transition after authentic CRT duration (400-500ms)
        setTimeout(() => {
            // Apply new cartoon visual & title from central data
            cartoonBg.style.backgroundImage = `url("${currentCartoon.image}")`;
            cartoonBg.style.opacity = "1";

            cartoonTitle.textContent = currentCartoon.name;
            crtTitleContainer.style.opacity = "1";

            // Update ambient lighting
            document.documentElement.style.setProperty("--ambient-glow", currentCartoon.ambientGlow);
            crtColorTint.style.background = currentCartoon.colorTint;

            // Remove static
            crtStatic.classList.remove("active");
            tvState.isChangingChannel = false;

            // Switch audio track
            loadAndPlayTrack();
        }, 420);
    }

    /* ==========================================================================
       8. ANALOG KNOB CONTROLS: VOLUME, TUNING, BRIGHTNESS, CONTRAST
       ========================================================================== */
    
    /**
     * Volume Knob (0 to 100)
     */
    function updateVolume(val) {
        tvState.volume = Math.max(0, Math.min(100, Math.round(val)));
        tvState.isMuted = false;
        
        // Needle rotation (-135deg to +135deg)
        const deg = -135 + (tvState.volume / 100) * 270;
        knobVolume.style.transform = `rotate(${deg}deg)`;
        
        updateAudioVolume();
        showOsd(`VOL ${tvState.volume}`, 900);
    }

    function toggleMute() {
        playSfxButtonClick();
        tvState.isMuted = !tvState.isMuted;
        if (tvState.isMuted) {
            tvState.prevVolume = tvState.volume;
            updateAudioVolume();
            showOsd("MUTE", 1000);
        } else {
            updateVolume(tvState.prevVolume || 70);
        }
    }

    /**
     * Tuning Knob (0 to 100, 50 is center)
     */
    function updateTuning(val) {
        tvState.tuning = Math.max(0, Math.min(100, Math.round(val)));
        
        // Needle rotation (-135deg to +135deg, 0deg at 50)
        const deg = ((tvState.tuning - 50) / 50) * 135;
        knobTuning.style.transform = `rotate(${deg}deg)`;

        const deviation = Math.abs(tvState.tuning - 50); // 0 to 50
        if (deviation > 3) {
            const noiseFactor = (deviation / 50) * 0.75;
            crtTuningNoise.style.opacity = noiseFactor.toFixed(2);
            showOsd(`TUNING ${tvState.tuning}%`, 600);
        } else {
            crtTuningNoise.style.opacity = "0";
            showOsd("SIGNAL LOCKED", 600);
        }
        updateAudioVolume();
    }

    /**
     * Brightness Knob (0 to 100)
     */
    function updateBrightness(val) {
        tvState.brightness = Math.max(0, Math.min(100, Math.round(val)));
        
        const deg = -135 + (tvState.brightness / 100) * 270;
        knobBrightness.style.transform = `rotate(${deg}deg)`;

        // CSS filter brightness: 0.6 (dark) to 1.4 (bright)
        const filterVal = 0.6 + (tvState.brightness / 100) * 0.8;
        document.documentElement.style.setProperty("--screen-brightness", filterVal.toFixed(2));
        showOsd(`BRT ${tvState.brightness}`, 700);
    }

    /**
     * Contrast Knob (0 to 100)
     */
    function updateContrast(val) {
        tvState.contrast = Math.max(0, Math.min(100, Math.round(val)));
        
        const deg = -135 + (tvState.contrast / 100) * 270;
        knobContrast.style.transform = `rotate(${deg}deg)`;

        // CSS filter contrast: 0.7 to 1.5
        const filterVal = 0.7 + (tvState.contrast / 100) * 0.8;
        document.documentElement.style.setProperty("--screen-contrast", filterVal.toFixed(2));
        showOsd(`CNT ${tvState.contrast}`, 700);
    }

    /**
     * Universal Pointer Drag & Wheel Handler for Knobs
     */
    function attachKnobEvents(knobEl, onDelta) {
        let isDragging = false;
        let startY = 0;

        knobEl.addEventListener("pointerdown", (e) => {
            isDragging = true;
            startY = e.clientY;
            knobEl.setPointerCapture(e.pointerId);
            playSfxButtonClick();
        });

        knobEl.addEventListener("pointermove", (e) => {
            if (!isDragging) return;
            const deltaY = startY - e.clientY;
            startY = e.clientY;
            onDelta(deltaY * 1.2);
        });

        function stopDrag(e) {
            if (isDragging) {
                isDragging = false;
                try { knobEl.releasePointerCapture(e.pointerId); } catch (_) {}
            }
        }

        knobEl.addEventListener("pointerup", stopDrag);
        knobEl.addEventListener("pointercancel", stopDrag);

        knobEl.addEventListener("wheel", (e) => {
            e.preventDefault();
            const delta = e.deltaY < 0 ? 4 : -4;
            onDelta(delta);
        }, { passive: false });
    }

    attachKnobEvents(knobVolume, (delta) => updateVolume(tvState.volume + delta));
    attachKnobEvents(knobTuning, (delta) => updateTuning(tvState.tuning + delta));
    attachKnobEvents(knobBrightness, (delta) => updateBrightness(tvState.brightness + delta));
    attachKnobEvents(knobContrast, (delta) => updateContrast(tvState.contrast + delta));

    // Double-click volume knob -> Mute / Unmute
    knobVolume.addEventListener("dblclick", toggleMute);

    /* ==========================================================================
       9. POWER BUTTON & OLD-TV STARTUP / SHUTDOWN ANIMATION
       ========================================================================== */
    function togglePower() {
        playSfxButtonClick();
        tvState.poweredOn = !tvState.poweredOn;

        if (tvState.poweredOn) {
            // Power ON: Authentic old-TV startup sequence
            powerLed.classList.add("active");
            shutdownLayer.classList.remove("power-off");
            playSfxRotarySwitch();

            if (tvState.isPlaying) {
                speakerLed.classList.add("pulsing");
                loadAndPlayTrack();
            }
            showOsd(`CH ${channels[tvState.currentChannel].channel}`, 1000);
        } else {
            // Power OFF: Cathode ray collapse
            playSfxPowerOff();
            powerLed.classList.remove("active");
            speakerLed.classList.remove("pulsing");
            shutdownLayer.classList.add("power-off");

            html5Audio.pause();
            stopProceduralSynth();
        }
    }

    /* ==========================================================================
       10. MEMORY MODE TOGGLE
       ========================================================================== */
    function toggleMemoryMode() {
        playSfxButtonClick();
        tvState.memoryMode = !tvState.memoryMode;
        document.body.classList.toggle("memory-mode-active", tvState.memoryMode);
        btnMemory.classList.toggle("active", tvState.memoryMode);

        if (tvState.memoryMode) {
            crtMemoryToast.classList.add("show");
            setTimeout(() => {
                crtMemoryToast.classList.remove("show");
            }, 2500);
        }
    }

    /* ==========================================================================
       11. FIRST USER INTERACTION (TURN ON PROMPT)
       ========================================================================== */
    function startTvExperience() {
        getAudioContext();
        standbyOverlay.classList.add("dismissed");
        tvState.isPlaying = true;
        playBtnText.textContent = "PAUSE";
        setChannel(0);
    }

    /* ==========================================================================
       12. EVENT LISTENERS SETUP & CHECKLIST
       ========================================================================== */
    
    // [x] Power Button
    btnPower.addEventListener("click", togglePower);

    // [x] Play / Pause Button
    btnPlay.addEventListener("click", togglePlayPause);

    // [x] CH - Button
    btnChPrev.addEventListener("click", () => setChannel(tvState.currentChannel - 1));

    // [x] CH + Button
    btnChNext.addEventListener("click", () => setChannel(tvState.currentChannel + 1));

    // [x] Channel Rotary Knob
    channelKnob.addEventListener("click", () => setChannel(tvState.currentChannel + 1));
    channelKnob.addEventListener("wheel", (e) => {
        e.preventDefault();
        if (e.deltaY > 0) setChannel(tvState.currentChannel + 1);
        else setChannel(tvState.currentChannel - 1);
    }, { passive: false });

    // [x] Direct Scale Markers (01, 02, 03, 04, 05, 06, 07, 08)
    scaleMarkers.forEach((marker) => {
        marker.addEventListener("click", () => {
            const ch = parseInt(marker.getAttribute("data-ch"), 10);
            if (!isNaN(ch)) setChannel(ch);
        });
    });

    // [x] Memory Mode Button
    btnMemory.addEventListener("click", toggleMemoryMode);

    // [x] Standby Overlay Click
    standbyOverlay.addEventListener("click", startTvExperience);

    // [x] Screen Double-Click Glitch
    crtTube.addEventListener("dblclick", () => {
        crtStatic.classList.add("active");
        showOsd("TRACKING ADJ", 600);
        setTimeout(() => crtStatic.classList.remove("active"), 250);
    });

    // [x] Keyboard Controls
    window.addEventListener("keydown", (e) => {
        // Ignore keystrokes if focused in an input
        if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) return;

        if (standbyOverlay && !standbyOverlay.classList.contains("dismissed")) {
            startTvExperience();
            return;
        }

        if (e.key === "1") setChannel(0);
        if (e.key === "2") setChannel(1);
        if (e.key === "3") setChannel(2);
        if (e.key === "4") setChannel(3);
        if (e.key === "5") setChannel(4);
        if (e.key === "6") setChannel(5);
        if (e.key === "7") setChannel(6);
        if (e.key === "8") setChannel(7);

        if (e.key === "ArrowUp") setChannel(tvState.currentChannel + 1);
        if (e.key === "ArrowDown") setChannel(tvState.currentChannel - 1);
        if (e.key === "ArrowRight") updateVolume(tvState.volume + 5);
        if (e.key === "ArrowLeft") updateVolume(tvState.volume - 5);

        if (e.key === " " || e.code === "Space") {
            e.preventDefault();
            togglePlayPause();
        }

        if (e.key === "p" || e.key === "P") togglePower();
        if (e.key === "m" || e.key === "M") toggleMemoryMode();
    });

    // [x] Mobile Touch Swipe Gestures
    let touchStartX = 0;
    document.addEventListener("touchstart", (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    document.addEventListener("touchend", (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const diff = touchEndX - touchStartX;
        if (Math.abs(diff) > 60) {
            if (diff > 0) setChannel(tvState.currentChannel - 1);
            else setChannel(tvState.currentChannel + 1);
        }
    }, { passive: true });

    // Initial State Initialization
    cartoonBg.style.backgroundImage = `url("${channels[0].image}")`;
    cartoonTitle.textContent = channels[0].name;
    updateVolume(75);
    updateTuning(50);
    updateBrightness(50);
    updateContrast(50);

})();
