const cursorRounded = document.querySelector('.rounded');
const cursorPointed = document.querySelector('.pointed');

const moveCursor = (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    // Update the pointed cursor position directly
    cursorPointed.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

    // Calculate the centered position for the rounded cursor
    const roundedX = mouseX - cursorRounded.offsetWidth / 2.5;
    const roundedY = mouseY - cursorRounded.offsetHeight / 2.5;

    // Update the rounded cursor position without delay
    cursorRounded.style.transform = `translate3d(${roundedX}px, ${roundedY}px, 0)`;
};

window.addEventListener('mousemove', moveCursor);


window.addEventListener('mousemove', moveCursor);

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
        }, 3000); // 3 seconds

        // Set a flag in local storage to indicate that the page has been reloaded
        localStorage.setItem('isReloaded', 'true');
    }
});
