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


const recipes={1:{img:"image 4.png",text:"Текст ДОБАВИТЬ",names: "Блины",sost:"Состав: яйца, сахар, соль, молоко, мука, растительное масло" },
               2:{img:"image 5.png",text:"Текст ДОБАВИТЬ",names: "Сырники",sost:"Состав: творог, яйцо, сахар, мука, ванильный сахар, соль, растительное масло"},
               3:{img:"image 6.png",text:"Текст ДОБАВИТЬ",names: "Шарлотка",sost:"Состав: яйца, сахар, мука, яблоки, разрыхлитель теста, ванилин, сливочное масло"}};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if(!recipes[id]){
    document.body.innerHTML = "<h1>Рецепт не найден</h1>"
}
else{
    document.getElementById("text").textContent = recipes[id].text;
    document.getElementById("names").textContent = recipes[id].names;
    document.getElementById("sost").textContent = recipes[id].sost;
    document.getElementById("img").src = recipes[id].img
};


if (window.matchMedia("(orientation: portrait)").matches) {
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.placeholder = "Поиск";
    }
}


