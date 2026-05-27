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

let poisk = document.querySelector(".search-input");
let cards = document.querySelectorAll(".card");

poisk.addEventListener('input', function(){
    let value = poisk.value.toLowerCase();
    cards.forEach(card => { 
        let text = card.innerText.toLowerCase();
        if(text.includes(value)){card.style.display = "block"}
        else{card.style.display = "none"}
    });
})


if (window.matchMedia("(orientation: portrait)").matches) {
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.placeholder = "Поиск";
    }
}

const containers = document.querySelectorAll('.cont');

containers.forEach(container => {
    const card = container.querySelector('.card');

    container.addEventListener('mousemove', function(e) {
        const rect = container.getBoundingClientRect();

        let dx = e.clientX - rect.left - rect.width / 2;
        let dy = e.clientY - rect.top - rect.height / 2;

        let angleX = 20 * dx / rect.width;
        let angleY = -20 * dy / rect.height;

        card.style.transform = `rotateX(${angleY}deg) rotateY(${angleX}deg)`;
    });

    container.addEventListener('mouseleave', function() {
        card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });
});