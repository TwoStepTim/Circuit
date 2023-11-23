const roundedCursor = document.querySelector('.rounded');

const moveCursor = (event) => {
    const { clientX, clientY } = event;

    // Adjust for scroll position
    const scrolledY = clientY + window.scrollY;

    // Update the rounded cursor position
    const roundedX = clientX - roundedCursor.offsetWidth / 1.6;
    const roundedY = scrolledY - roundedCursor.offsetHeight / 1.1;

    // Apply the transition for smooth movement
    roundedCursor.style.transition = 'transform 0.5s ease-out';
    roundedCursor.style.transform = `translate3d(${roundedX}px, ${roundedY}px, 0)`;
};


const resetCursor = () => {
    // Remove the transition when the cursor is not moving
    roundedCursor.style.transition = 'none';
};

// Add event listeners
window.addEventListener('mousemove', moveCursor);
window.addEventListener('mouseleave', resetCursor);

document.addEventListener('DOMContentLoaded', function () {
    // Check if the page was reloaded
    const isReloaded = localStorage.getItem('isReloaded');

    // If the page was reloaded, hide the overlay
    if (!isReloaded) {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('mainSection').classList.add('show');
    } else {
        // Set a timeout to trigger the fade-in animation after 3 seconds
        setTimeout(function () {
            document.getElementById('overlay').style.display = 'none'; // Hide the overlay
            document.getElementById('mainSection').classList.add('show'); // Add the class to trigger the fade-in animation
            document.body.style.backgroundImage = 'radial-gradient( #e7cafc 0, #ffffff 50%, #aad6f6 150%)';
        }, 3000); // 3 seconds

        // Set a flag in local storage to indicate that the page has been reloaded
        localStorage.setItem('isReloaded', 'true');
    }
});
