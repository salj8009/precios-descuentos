//creacion de las variables
//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioCondescuento(precio , descuento) {
    const porcetajePreciConDescueto = 100 - descuento;
    const precioConDescuento = (precio * porcetajePreciConDescueto) / 100;

    return precioConDescuento;
}

const inputprecio = document.getElementById('inputprecio');
const inputdescuento = document.getElementById('inputdescuento');

const btnCalcular = document.getElementById('btnCalcular');

const preciorResultado = document.getElementById('precio-resultado');

btnCalcular.addEventListener('click' , () =>{
    const precioValue = inputprecio.value;
    const descuentoValue = inputdescuento.value;

    const precioConDescuento = calcularPrecioCondescuento(precioValue, descuentoValue);

    preciorResultado.innerText = `el precio con descuento es $: ${precioConDescuento}`;
});

/*console.log({
    precioOriginal,
    descuento,
    porcetajePreciConDescueto,
    precioConDescuento
})*/
