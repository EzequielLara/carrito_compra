/*IMPLEMENTANDO CARRITO*/ 

const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const imagenCarrito = document.querySelector('.imagen-carrito');

let productosCarrito = [];

// EVENLISTENERS

cargarEventListeners();

function cargarEventListeners(){
    //Cuando pulsemos botón de añadir al carrito crearemos un objeto con las propiedades de ese producto para poderlas agregar al carrito
    listaCursos.addEventListener('click', agregarCurso);
    //Cuando pulsamos la imagen del carrito ocultamos o mostramos el carrito
    imagenCarrito.addEventListener('click', mostrarOcultar);
};

//FUNCIONES

function mostrarOcultar(){
   if(carrito.style.display =='none'){

        carrito.style.display = 'block';
        

   }else{

        carrito.style.display = 'none';
   }
     


}
function agregarCurso(e){

    e.preventDefault();//prevenir la accion por defecto del botón.

    if(e.target.classList.contains('agregar-carrito')){
        
        const cursoSeleccionado = e.target.parentElement.parentElement;

        leerDatosCurso(cursoSeleccionado);
    };

};

//
function leerDatosCurso(curso){

    //creamos objeto con la info del curso

    const infoCurso ={

        imagen: curso.querySelector('img').src,
        nombre: curso.querySelector('.card-title').innerText,
        precio: parseInt(curso.querySelector('.precio').innerText),
       id: curso.querySelector('.agregar-carrito').getAttribute('id'), 
       cantidad: 1,
    }
    
    productosCarrito =[...productosCarrito, infoCurso];

    carritoHTML();
};

//Muestra el carrito de compras en el html

function carritoHTML(){


    productosCarrito.forEach(curso => {

        const row = document.createElement('tr');
        
        row.innerHTML =`
           
            <td>
                ${curso.imagen}
            </td>
            <td>
                ${curso.nombre}
            </td>
            <td>
                ${curso.precio}
            </td>
            <td>
                ${curso.cantidad}
            </td>
            <td>
                ${curso.cantidad*curso.precio}
            </td>
        `;
        contenedorCarrito.appendChild(row);
        
        // vaciar el array para que no se dupliquen en la proxima pulsación los elementos que ya están dibujados en pantalla.
        productosCarrito=[];

    });
}