var i = 0;
var txt = "Web Designer";
var speed = 100;
function type(){
    document.getElementById("type").innerHTML +=txt.charAt(i);
    i++;
    setTimeout(type, speed);
}
type();





// elements
var elements_to_watch = document.querySelectorAll('.entry');
// callback 
var callback = function(items){
  items.forEach((item) => {
    if(item.isIntersecting){
      item.target.classList.add("in-page");
    } else{
      item.target.classList.remove("in-page");
    }
  });
}
// observer
var observer = new IntersectionObserver(callback, { threshold: 0.6} );
// apply
elements_to_watch.forEach((element) => {
  observer.observe(element); 
});








const data = [
    [
        "work1",
        "work2",
        "work3",
    ],
    [
        "LSE",
        "Boonc",
        "Lives Saved",
    ],
    [
        "Web App",
        "Mobile App",
        "Data Visualization",
    ],
    [
        "Helmet Size",
        "Engine Unit",
        "Armament",
    ],
    [
        ["S", "M", "L"],
        ["P-S4 Twin", "P-W401"],
        ["Superlaser", "Turbolaser"],
    ],
    [80, 25, 100],
    [
        "background1",
        "background2",
        "background3",
    ],
];



const arrLeft = document.querySelector('.arrow-left');
const arrRight = document.querySelector('.arrow-right');
const img = document.querySelector('.product-image img');
const nome = document.querySelector('.product-name');
const price = document.querySelector('.product-price');
const optionTitle = document.querySelector('.product-option-title');
const bg = document.querySelector('.panel-1');

let id = 0;
let li;

function slider(id) {
    img.src = "./images/" + data[0][id] + ".svg";
    img.classList.add('fade-in');
    setTimeout(() => {
        img.classList.remove('fade-in');
    }, 850);
    nome.innerText = data[1][id];
    price.innerText = data[2][id];
}

arrLeft.addEventListener('click', () => {
    id--;
    if(id < 0) {
        id = data[0].length - 1;
    }
    slider(id);
});

arrRight.addEventListener('click', () => {
    id++;
    if(id > data[0].length - 1) {
        id = 0;
    }
    slider(id);
});