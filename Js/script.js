document.addEventListener("DOMContentLoaded",() => {

    createFilters()
    createCards()
})// menos esto

const product = [{       
    id: 1,                                                                                           //Lista de productos
    group: "Beer",
    name: "Cerveza Andes roja",
    price: "$180",
    details: "Lata de 473ml",
},{
    id: 2,    
    group: "Beer",
    name: "Cerveza Andes negra",
    price: "$180",
    details: "Lata de 473ml",
    
},{
    id: 3,    
    group: "Beer",
    name: "Cerveza Patagonia IPA 24.7",
    price: "$180",
    details: "Lata de 473ml",
},{
    id: 4,    
    group: "Snacks",
    name: "Maní crocante japonés",
    price: "$110",
    details: "Snack crocante sabor a queso",
},{
    id: 5,    
    group: "Snacks",
    name: "Doritos sabor original",
    price: "$500",
    details: "Snacks de queso X 300gr",
},{
    id: 6,    
    group: "Snacks",
    name: "Papas Lays sabor original",
    price: "$550",
    details: "Bolsa X 370gr",
},{
    id: 7,    
    group: "Distillates",
    name: "Ron Havana Club",
    price: "$800",
    details: "Botella de 750ml",
},{
    id: 8,    
    group: "Distillates",
    name: "Fernet Branca",
    price: "$965",
    details: "Botella de 1 L",
},{
    id: 9,    
    group: "Distillates",
    name: "Jack Daniels Old",
    price: "$4000",
    details: "Botella de 1L",
}];

class Productos{
    constructor(name){
        this.name = name
        this.cantidad = 0
    }
}

product.push(new Productos("Juan hace un juego y nahuel se come una mala valoracion #chauCoder"))

product.join(",  ");

const carrito = []

console.log(product.map(product => product.name +" "+ product.price +" "+ product.details));

let filterHtml = document.getElementById("filtrados")
let cart = document.getElementById("cart");
let cartStorage = document.getElementById("cart-storage");
let buttonTodos = document.getElementById("todos")

buttonTodos.addEventListener("click", () => createCards())
 
function selectedItem (e){
    e.preventDefault;
    
}



const pushToCart = () =>{
    
    cart.innerHTML = "";
    let tr;
    
    carrito.forEach((element,i) => {                //el "product" deberia ser un selectedItem o algo asi, para q devuelva un solo elemento y no toda la lista, hay q crear un selectedItem que ESE SI tenga el "product"
        tr = document.createElement("tr");
        tr.setAttribute("id", i);
        
        tr.innerHTML = `<td>${element.name}</td>
                        <td>${element.price}</td>
                        <td>${element.details}</td>`;

        cart.appendChild(tr);
    });
}


function signup (e){
   
    e.preventDefault();
    
    if (signup.age <18){
        alert("Debes ser mayor de 18 años");
        
    }else if (isNaN(signup.age)){
        alert("Tienen que ser NUMEROS");
    }
}                                                                                             //Se le pide al usuario la edad, si es menor se cancela la entrada a la pagina;


function manageSection (e){
    e.preventDefault;
    cartHidden.id = "show";
    
}


function addToCart(e){
    e.preventDefault();
    
    pushToCart();
}


// let clickButton = document.getElementsByClassName("btn-primary");
// for(let i = 0; i<clickButton.length; i++){

//     clickButton[i].addEventListener("click", addToCart);
// }


let cardsHtml = document.getElementById("products")

const createCards = () => {

    cardsHtml.innerHTML = ``

    for(let i of product){
        
        let card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
        
            <img src="https://es.web.img3.acsta.net/pictures/21/11/16/14/35/2231192.jpg" class="card-img-top" alt="Beer1">
                <div class="card-body">
                    <h5 class="card-title">${i.name}</h5>
                    <p class="card-text">${i.details}</p>
                    <button class="btn btn-primary" id="${i.id}">Go somewhere</button>
                </div>
         
        `
        cardsHtml.appendChild(card)

        let buton = document.getElementById(i.id)
        buton.addEventListener("click", () => addCart(i))

    }
}

const addCart = (item) => {
    carrito.push(item)
    pushToCart()
}

const createFilters = () => {
    const categorias = ["Beer", "Snacks", "Distillates"]

    for(let i of categorias){
        let boton = document.createElement("button")
        boton.className = "pasas las clases que quieras"
        boton.id = i
        boton.innerHTML = i
        filterHtml.appendChild(boton)
        boton.addEventListener("click", () => filtrar(i))
    }    
}

const filtrar = (category) => {
    cardsHtml.innerHTML = ``

    let filtrados = product.filter(element => element.group === category)

    for(let i of filtrados){
        
        let card = document.createElement("div")
        card.className = "card"
        card.innerHTML = `
        
            <img src="https://es.web.img3.acsta.net/pictures/21/11/16/14/35/2231192.jpg" class="card-img-top" alt="Beer1">
                <div class="card-body">
                    <h5 class="card-title">${i.name}</h5>
                    <p class="card-text">${i.details}</p>
                    <button class="btn btn-primary" id="${i.id}">Go somewhere</button>
                </div>
         
        `
        cardsHtml.appendChild(card)

        let buton = document.getElementById(i.id)
        buton.addEventListener("click", () => addCart(i))

    }
}


let beer = product.filter(product => product.group === "Beer");
let snacks = product.filter(product => product.group === "Snacks");
let distillates = product.filter(product => product.group === "Distillates");






// let username = prompt("Indicá tu nombre");
// let age = parseInt(prompt("Indicá tu edad"));







// Hacer clase contructora y crear los productos con los parametros ya utilizados y añadir, id, img, cantidad = 0
/* orden
arrys
clases
dom(globales)
resto del codigo

*/














