document.addEventListener('DOMContentLoaded', function() {
    
    const triggerImage = document.getElementById('triggerImage');
    const dropdownContent = document.getElementById('myDropdown');

    triggerImage.addEventListener('click', function(event) {
        event.stopPropagation();
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', function(event) {
        if (dropdownContent.classList.contains('show')) {
            if (event.target !== triggerImage && !dropdownContent.contains(event.target)) {
                dropdownContent.classList.remove('show');
            }
        }
    });

});