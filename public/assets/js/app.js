// Declare constantes principales
const userName = prompt('Ingrese su nombre');
const userAge = parseInt(prompt('Ingrese su edad: '));
// Declare 3 objetos con sus respectivo array dentro
const pcBaja = {
    nombre: 'PC Gama Baja',
    precio: 2000,
    juegos: ['Counter Strike', 'Valorant', 'Fortnite']
}
const pcMedia = {
    nombre: 'PC Gama Media',
    precio: 5000,
    juegos: ['GTA V', 'Hitman', 'Resident Evil']
}
const pcAlta = {
    nombre: 'PC Gama Alta',
    precio: 9000,
    juegos: ['Battlefield', 'Forza', 'War Zone']
}
// variables
let pcGama;
let amount;
let checkout;
// condicional
if (userAge > 18) {
    const bienvenida = () => {
        alert(`Bienvenido(a) a ProPC ${userName} a continucacion podra empezar a realizar sus compras!`);
    }
    pcGama = parseInt(prompt(`Bien ${userName} ahora eliga el modelo de pc que desea ingresando un numero: /n1-Gama Baja ($2000) /n2-Gama Media ($5000) /n3-Gama Alta ($9000)`));
    // metodo splice y metodo join 
    switch (pcGama) {
        case 1:
            pcPrice = pcBaja.precio;
            alert(`Ha seleccionado la PC de gama Baja, podra jugar juegos como: ${pcBaja.juegos.join('  -  ')} aunque el juego ${pcBaja.juegos.slice(1,2)} correra a calidad baja-media`);
            break;
        case 2:
            pcPrice = pcMedia.precio;
            alert(`Ha seleccionado la PC de gama Media, podra jugar juegos como: ${pcMedia.juegos.join('  -  ')} aunque el juego ${pcMedia.juegos.slice(0,1)} correra a calidad media`);
            break;
        case 3:
            pcPrice = pcAlta.precio;
            alert(`Ha seleccionado la PC de gama Alta, podra jugar juegos como: ${pcAlta.juegos.join('  -  ')} aunque el juego ${pcAlta.juegos.slice(2,3)} correra a calidad media-alta`);
            break;
        default:
            alert('Porfavor haga una seleccion valida');
            break;
    }
    if (pcGama == 1 || pcGama == 2 || pcGama == 3) {
        amount = parseInt(prompt('Cuantas unidades te gustaria comprar del producto seleccionado?'));
    }
} else {
    alert(`${userName} usted no es mayor de edad y no podra realizar compras!`);
}
// while loop
function totalPrice() {
    checkout = pcPrice * amount;
    while (amount != 0) {
        alert(`El total de su compra sera: $${checkout}, por ${amount} PC's`);
        break;
    }
}
totalPrice();