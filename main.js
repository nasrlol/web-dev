document.addEventListener('DOMContentLoaded', function() {
    // Dropdown toggle
    document.querySelector('.dropdown .banner-button').addEventListener('click', function () {
        const dropdownMenu = document.querySelector('.dropdown-menu');
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Call button slide
    const callButtonSlide = document.querySelector('.banner-button-call-slide');
    const callButtonContainer = document.querySelector('.call-button-container');

    callButtonContainer.addEventListener('click', function() {
        callButtonSlide.classList.toggle('expanded');
    });

    // Close the slide when clicking outside or on the banner button call button
    document.addEventListener('click', function(event) {
        if (!callButtonContainer.contains(event.target) && !document.querySelector('.dropdown .banner-button').contains(event.target) && callButtonSlide.classList.contains('expanded')) {
                callButtonSlide.classList.remove('expanded');
        }
    });
});