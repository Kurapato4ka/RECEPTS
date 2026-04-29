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


const recepts={1:{img:"image 4.png",text:"Текст ДОБАВИТЬ"},
             2:{img:"image 5.png",text:"Текст ДОБАВИТЬ"},
             3:{img:"image 6.png",text:"Текст ДОБАВИТЬ"}};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if(!recipes[id]){
    document.body.innerHTML = "<h1>Рецепт не найден</h1>"
}
else{
    document.getElementById("text").textContent = recepts[id].text;
    document.getElementById("img").src = recepts[id].img
};



let logo = document