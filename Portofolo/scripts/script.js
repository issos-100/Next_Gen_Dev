
document.addEventListener("DOMContentLoaded", function() {
    const skillImages = document.querySelectorAll('.skill-image');

    skillImages.forEach(image => {
        image.addEventListener('click', function() {
            this.classList.toggle('expanded');
        });
    });
});
