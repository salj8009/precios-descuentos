//creacion de las variables
//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioCondescuento(precio , descuento) {
    const porcetajePreciConDescueto = 100 - descuento;
    const precioConDescuento = (precio * porcetajePreciConDescueto) / 100;

    return precioConDescuento;
}

const cupones = ["nuevo" , "lealtad" , "sorpresa"];


const inputprecio = document.getElementById('inputprecio');
const inputdescuento = document.getElementById('inputdescuento');

const btnCalcular = document.getElementById('btnCalcular');

const preciorResultado = document.getElementById('precio-resultado');
const divcupones = document.getElementById('div-cupones');
const fragment = document.createDocumentFragment();

const imagenpreciofinal = document.getElementById('imagen-precio-final');


btnCalcular.addEventListener('click' , () =>{
    const precioValue = inputprecio.value;
    const descuentoValue = inputdescuento.value;

    const precioConDescuento = calcularPrecioCondescuento(precioValue, descuentoValue);

    preciorResultado.innerText = `El precio con descuento es de $: ${precioConDescuento}`;
    const parrafo = document.createElement('P');
    const btnCupones = document.createElement('button');
    parrafo.textContent = `Tienes cupones ?`;
    btnCupones.textContent = `Aplicalos Aqui.`;
    btnCupones.id = `MIBTN`;
    fragment.appendChild(parrafo);
    fragment.appendChild(btnCupones);

    divcupones.appendChild(fragment);
   
});

/*console.log({
    precioOriginal,
    descuento,
    porcetajePreciConDescueto,
    precioConDescuento
})*/
