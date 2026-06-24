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
               2:{img:"image 5.png",text:"Ингредиенты:творог — 500 г, яйцо — 1 шт., сахар — 2 ст.л., мука — 3 ст.л.,, ванильный сахар — 1 ч. л., соль — щепотка, растительное масло./n Рецепт:/n1. В миске соедините творог, яйцо, сахар, ванильный сахар и соль. Тщательно перемешайте./n 2. Добавьте муку и снова перемешайте до однородной массы./n 3. Сформируйте из теста небольшие шарики, обваляйте их в муке и слегка приплюсните, чтобы получились лепёшки толщиной примерно 1,5–2 см./n 4. Разогрейте сковороду, добавьте растительное масло. Выложите сырники и жарьте на среднем огне 3–4 минуты с каждой стороны до золотистой корочки./n 5. Готовые сырники выложите на бумажное полотенце, чтобы убрать лишний жир. Подавайте тёплыми — со сметаной, мёдом или вареньем.",names: "Сырники",sost:"Состав: творог, яйцо, сахар, мука, ванильный сахар, соль, растительное масло"},
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


