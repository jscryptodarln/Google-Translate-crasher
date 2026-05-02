// WARNING: This will likely freeze your tab immediately
(function finalForm() {
    // 1. Force the CPU to redline with an infinite calculation
    while(true) {
        // 2. Rapidly generate thousands of massive DOM elements 
        let voidNode = document.createElement('div');
        voidNode.innerText = "Ω$0".repeat(100000);
        voidNode.style.cssText = "position:fixed; top:0; left:0; font-size:1000px; opacity:0.1; pointer-events:none;";
        document.body.appendChild(voidNode);
        
        // 3. Trigger the DPC Watchdog vibe by locking the main thread
        console.log("%c SYSTEM OVERLOAD ", "background: red; color: white; font-size: 50px;");
    }
})();
