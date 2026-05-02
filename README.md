# Google-Translate-Crasher

## Project Overview:
This repository is a systematic exploration into the boundaries of browser stability and hardware resilience. Through a tiered progression of JavaScript-based stress tests, this project demonstrates the exact threshold at which modern web architecture—specifically Google Translate’s UI—collapses under artificial resource exhaustion.

### Execution Phases
The project is divided into four distinct stages of escalation:

*   **Phase 1 :** Subtle UI subversion using `TreeWalker` to corrupt text nodes with Unicode artifacts, simulating a "haunted" interface.
*   **Phase 2 :** Introduction of high-frequency CSS jitter and chromatic aberration to tax the browser's rendering engine.
*   **Phase 3 :** Total DOM dominance via recursive element spawning ("The Tree") and raw sawtooth audio frequencies, forcing the GPU into a high-stress state.
*   **FinalDS :** Utilizes infinite recursive loops and exponential memory allocation to trigger an intentional Out of Memory (OOM) crash.

### ⚠️ Critical Disclaimer
**This project is designed to break things.** 
Executing these scripts will likely cause Google Chrome to lag, hang, or crash entirely. Due to the aggressive nature of the memory-leak protocols and thread-locking recursion, running these on a primary host machine is strongly discouraged. It is **highly recommended** to run these only in a sandboxed **Virtual Machine (VM)**, as the intensity of the final phases is known to cause total system freezes, kernel-level failures, or Red Screens of Death (RSOD).

**Proceed with caution; your hardware is the only limit.**

Gemini helped me do this since i am new here
