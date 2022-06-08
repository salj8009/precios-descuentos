//creacion de las variables
//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioCondescuento(precio , descuento) {
    const porcetajePreciConDescueto = 100 - descuento;
    const precioConDescuento = (precio * porcetajePreciConDescueto) / 100;

    return precioConDescuento;
}

const cupones = ["nuevo" , "lealtad" , "sorpresa"];


function buscarCupon(cupondesc) {
    const cuponesAbuscar = cupones.filter(cupon => cupon === cupondesc);
    console.log(cuponesAbuscar);    
    return cuponesAbuscar;
    
   
}

const inputprecio = document.getElementById('inputprecio');
const inputdescuento = document.getElementById('inputdescuento');

const btnCalcular = document.getElementById('btnCalcular');

const preciorResultado = document.getElementById('precio-resultado');
const divcupones = document.getElementById('div-cupones');
const fragment = document.createDocumentFragment();

const imagenpreciofinal = document.getElementById('imagen-precio-final');


btnCalcular.addEventListener('click' , () =>{
    const precioValue = inputprecio.value;
    let descuentoValue = inputdescuento.value;

    const descuentoConCupon = buscarCupon(descuentoValue);

    if(descuentoConCupon == "") {
        alert('lo siento tu cupon no es valido')
    }else{
        descuentoValue = 15;

        const precioConDescuento = calcularPrecioCondescuento(precioValue, descuentoValue);
        preciorResultado.innerText = `El precio con descuento es de $: ${precioConDescuento}`;
    }



});




/*console.log({
    precioOriginal,
    descuento,
    porcetajePreciConDescueto,
    precioConDescuento
})*/
