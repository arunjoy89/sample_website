// JavaScript for starting and stopping the floating text animation

// Get the floating text element
const floatingText = document.getElementById('floatingText');

// Function to start the animation
function startAnimation() {
    floatingText.style.animation = 'floatAnimation 5s ease-in-out infinite';
}

// Function to stop the animation
function stopAnimation() {
    floatingText.style.animation = 'none';
}

// Example: Start animation when the page loads
window.onload = startAnimation;

// Optional: Add event listeners to control the animation
// For example, stop animation on hover
floatingText.addEventListener('mouseenter', stopAnimation);
floatingText.addEventListener('mouseleave', startAnimation);
