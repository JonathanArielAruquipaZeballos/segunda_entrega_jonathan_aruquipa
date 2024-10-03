alert("Te damos la bienvenida a PETSHOP ONLINE.\nPor favor, regístrate para comenzar a comprar.");

let username = "";
let password = "";

while (username === ""){
    username = prompt("Ingresa un nombre de usuario: ");
}

while (password === "" || password.length < 4 || password.length > 6){
    password = prompt("Ingresa una contraseña (entre 4 y 6 caracteres): ");
}

alert("Registro exitoso.\nTe damos la bienvenida a nuestra tienda " + username);

console.log("Guarda esta información en un lugar seguro para tus futuras compras.\nNombre de usuario: " + username + "\n" + "Contraseña: " + password) + "\n";

const searchProducts = [
    {
        name: "Pro Plan",
        price: 1000
    },
    {
        name: "Royal Canin",
        price: 2000
    },
    {
        name: "Belcat",
        price: 2500
    },
    {
        name: "Cat Chow",
        price: 2200
    },
    {
        name: "Excellent",
        price: 3000
    },
    
];

const names = searchProducts.map(product => product.name);
const list = names.join('\n');

let stockProd = prompt(`Ingresa el producto que te interese consultar su stock:\n${list}`);

let found = searchProducts.some((elem) => elem.name === stockProd);

if (found) {
    alert("Hay stock del producto ingresado.");
} else {
    alert("El producto ingresado no se encuentra disponible.");
    found = false;
}

let products = [
    {
        name: "Pro Plan",
        price: 1000
    },
    {
        name: "Royal Canin",
        price: 2000
    },
    {
        name: "Belcat",
        price: 2500
    },
    {
        name: "Cat Chow",
        price: 2200
    },
    {
        name: "Excellent",
        price: 3000
    },
];


