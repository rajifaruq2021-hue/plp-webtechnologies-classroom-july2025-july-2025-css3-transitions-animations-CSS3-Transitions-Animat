// --- PART 2: JavaScript Functions — Scope, Parameters & Return Values ---

// GLOBAL SCOPE: This variable is accessible from anywhere in the script.
const defaultGreeting = "Welcome!";

/**
 * Creates a personalized greeting message.
 * @param {string} name - The name of the person to greet.
 * @returns {string} The complete greeting message.
 */
function createGreeting(name) {
    // LOCAL SCOPE: This variable only exists inside the createGreeting function.
    const greetingMessage = `Hello, ${name}! ${defaultGreeting}`;
    
    // RETURN VALUE: The function sends this value back to wherever it was called.
    return greetingMessage;
}

// Event listener for the greeting generator button
const greetBtn = document.getElementById('greet-btn');
const nameInput = document.getElementById('name-input');
const greetingOutput = document.getElementById('greeting-output');

greetBtn.addEventListener('click', () => {
    // Get the name from the input field (this is a parameter for our function)
    const userName = nameInput.value.trim();

    if (userName) {
        // Call our function with the user's name as the parameter
        const fullGreeting = createGreeting(userName);
        // Use the returned value to update the page
        greetingOutput.textContent = fullGreeting;
    } else {
        greetingOutput.textContent = 'Please enter a name.';
    }
});


// --- PART 3: Combining CSS Animations with JavaScript ---

// Get the DOM elements
const animatedBox = document.getElementById('animated-box');
const slideBtn = document.getElementById('slide-btn');
const pulseBtn = document.getElementById('pulse-btn');

// Function to trigger the slide animation
slideBtn.addEventListener('click', () => {
    // First, remove any existing animation classes to reset
    animatedBox.classList.remove('pulse-animation', 'slide-animation');
    
    // This is a small trick to allow the animation to be re-triggered.
    // We trigger a "reflow" so the browser sees the class was removed before we add it again.
    void animatedBox.offsetWidth;

    // Add the CSS class to trigger the keyframe animation
    animatedBox.classList.add('slide-animation');
});

// Function to trigger the pulse animation
pulseBtn.addEventListener('click', () => {
    animatedBox.classList.remove('pulse-animation', 'slide-animation');
    void animatedBox.offsetWidth;
    animatedBox.classList.add('pulse-animation');
});

// BONUS: Listen for when an animation finishes to clean up the class.
// This makes the animation reusable again immediately.
animatedBox.addEventListener('animationend', () => {
    animatedBox.classList.remove('slide-animation');
});
