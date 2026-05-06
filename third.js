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


const recipes={1:[{img:"image 4.png",names: "Блины",sost:"Состав: яйца, сахар, соль, молоко, мука, растительное масл"}, {img:"image 4.png",names: "Блины",sost:"Состав: яйца, сахар, соль, молоко, мука, растительное масл"},{img:"image 4.png",names: "Блины",sost:"Состав: яйца, сахар, соль, молоко, мука, растительное масл"}], 
               2:[{img:"image 5.png",names: "Сырники",sost:"Состав: творог, яйцо, сахар, мука, ванильный сахар, соль, растительное масло"},{},{}],
               3:[{img:"image 6.png",names: "Шарлотка",sost:"Состав: яйца, сахар, мука, яблоки, разрыхлитель теста, ванилин, сливочное масло"},{},{}],
               4:[{},{},{}]};


const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if(!recipes[id]){
    document.body.innerHTML = "<h1>Рецепт не найден</h1>"
}
else{
    document.getElementById("img1").src = recipes[id][0].img;
    document.getElementById("names1").textContent = recipes[id][0].names;
    document.getElementById("sost1").textContent = recipes[id][0].sost;     
};


if (window.matchMedia("(orientation: portrait)").matches) {
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.placeholder = "Поиск";
    }
}

