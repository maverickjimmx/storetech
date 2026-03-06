/**
 * PEXSTORTECH SYSTEM_GLITCH ENGINE
 * Logic: Randomly applies CSS transformations and opacity shifts
 * to simulate digital interference.
 */

const glitchText = document.querySelector('.glitch');

function triggerGlitch() {
    // Randomize the intensity and timing
    const duration = Math.random() * 200 + 50; // How long the glitch lasts (ms)
    const delay = Math.random() * 3000 + 1000; // Time until next glitch (1-4 seconds)

    // Apply the visual "fracture"
    glitchText.style.textShadow = `
        ${Math.random() * 5}px ${Math.random() * 5}px var(--neon-magenta),
        ${Math.random() * -5}px ${Math.random() * -5}px var(--neon-cyan)
    `;
    glitchText.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 2}px)`;
    glitchText.style.opacity = Math.random() > 0.1 ? "0.9" : "0.5";

    // Reset the system after the duration
    setTimeout(() => {
        glitchText.style.textShadow = `2px 2px var(--neon-magenta)`;
        glitchText.style.transform = `translate(0, 0)`;
        glitchText.style.opacity = "1";
        
        // Loop back with a random delay
        setTimeout(triggerGlitch, delay);
    }, duration);
}

// Initialize the glitch sequence on load
window.addEventListener('load', () => {
    console.log("PEXSTORTECH_OS: Glitch protocols active...");
    triggerGlitch();
});
