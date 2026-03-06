/**
 * PEXSTORTECH SYSTEM_OS
 * Modules: Preloader & Glitch Engine
 */

const glitchText = document.querySelector('.glitch');
const preloader = document.getElementById("preloader");

/**
 * MODULE 01: PRELOADER LOGIC
 * Hides the initialization screen after assets are loaded.
 */
function initializeSystem() {
    // 2-second delay to ensure the animation is visible
    setTimeout(() => {
        if (preloader) {
            preloader.classList.add("loader-hidden");
            console.log("PEXSTORTECH_OS: System Initialized. UI Visible.");
        }
        
        // Start the glitch sequence only after the preloader fades
        if (glitchText) {
            triggerGlitch();
        }
    }, 2000); 
}

/**
 * MODULE 02: GLITCH ENGINE
 * Logic: Randomly applies CSS transformations and opacity shifts
 * to simulate digital interference.
 */
function triggerGlitch() {
    // Randomize the intensity and timing
    const duration = Math.random() * 200 + 50; // How long the glitch lasts (ms)
    const delay = Math.random() * 3000 + 1000; // Time until next glitch (1-4 seconds)

    // Apply the visual "fracture"
    glitchText.style.textShadow = `
        ${Math.random() * 5}px ${Math.random() * 5}px var(--secondary),
        ${Math.random() * -5}px ${Math.random() * -5}px var(--primary)
    `;
    glitchText.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 2}px)`;
    glitchText.style.opacity = Math.random() > 0.1 ? "0.9" : "0.5";

    // Reset the system after the duration
    setTimeout(() => {
        glitchText.style.textShadow = "none"; 
        glitchText.style.transform = `translate(0, 0)`;
        glitchText.style.opacity = "1";
        
        // Loop back with a random delay
        setTimeout(triggerGlitch, delay);
    }, duration);
}

// Initialize the sequence on window load
window.addEventListener('load', () => {
    console.log("PEXSTORTECH_OS: Initializing protocols...");
    initializeSystem();
});
