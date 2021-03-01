/*IMPLEMENTANDO CARRITO*/ 

const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

// EVENLISTENERS

cargarEventListeners();

function cargarEventListeners(){
    //Cuando pulsemos botón de añadir al carrito crearemos un objeto con las propiedades de ese producto para poderlas agregar al carrito
    listaCursos.addEventListener('click', agregarCurso);
};

//FUNCIONES
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
        precio: curso.querySelector('.precio').innerText,
       id: curso.querySelector('.agregar-carrito').getAttribute('id'), 
       cantidad: 1,
    }
    console.log(infoCurso);
    console.log(curso);
};