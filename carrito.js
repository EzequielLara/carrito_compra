/*IMPLEMENTANDO CARRITO*/ 

const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const imagenCarrito = document.querySelector('.imagen-carrito img');
const totalCarrito = document.querySelector('#total-carrito');

let productosCarrito = [];

// EVENLISTENERS

cargarEventListeners();

function cargarEventListeners(){
    //Cuando pulsemos botón de añadir al carrito crearemos un objeto con las propiedades de ese producto para poderlas agregar al carrito
    listaCursos.addEventListener('click', agregarCurso);
    //Cuando pulsamos la imagen del carrito ocultamos o mostramos el carrito
    imagenCarrito.addEventListener('click', mostrarOcultar);

    carrito.addEventListener('click', eliminarCurso);

    vaciarCarritoBtn.addEventListener('click', () =>{
         productosCarrito =[];
         limpiarHTML();
    });
};

//FUNCIONES

function mostrarOcultar(){
   if(carrito.style.display =='none'){
       
        
        
        carrito.style.display = 'block';
        imagenCarrito.src = 'imagenes/carro.png'
        
       
    }else{
        
       
        
        carrito.style.display = 'none';
        imagenCarrito.src = 'imagenes/cart.png'
       
    
   }
     


}
function agregarCurso(e){

    e.preventDefault();//prevenir la accion por defecto del botón.

    if(e.target.classList.contains('agregar-carrito')){
        
        const cursoSeleccionado = e.target.parentElement.parentElement;

        leerDatosCurso(cursoSeleccionado);
    };

};

function eliminarCurso(e){

    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('id');
        productosCarrito = productosCarrito.filter(curso=>curso.id !== cursoId);

       carritoHTML();
    }

}


function leerDatosCurso(curso){

    //creamos objeto con la info del curso

    const infoCurso ={

        imagen: curso.querySelector('img').src,
        nombre: curso.querySelector('.card-title').innerText,
        precio: curso.querySelector('.precio').innerText,
        valor: parseInt(curso.querySelector('.precio').innerText,), 
        id: curso.querySelector('.agregar-carrito').getAttribute('id'), 
        cantidad: 1,
    }

    const existe = productosCarrito.some( curso => curso.id === infoCurso.id);

    if(existe){
        const cursos = productosCarrito.map(curso=>{
            if(curso.id === infoCurso.id){

                curso.cantidad ++;
                return curso; // necesitamos el return porque map crea un nuevo array. En este caso retorna el curso actualizado.

            }else{
                return curso; // retorna el curso 
            }
        });
        
        productosCarrito = [...cursos];

    }else{
    
        productosCarrito =[...productosCarrito, infoCurso];
    };

    carritoHTML();
};

//Muestra el carrito de compras en el html

function carritoHTML(){

    limpiarHTML();

    let sumatotal = 0;

    productosCarrito.forEach(curso => {

        const { imagen, nombre, precio, 
            cantidad, id, valor } = curso; 

        sumatotal = sumatotal + (valor * cantidad);
       

        const row = document.createElement('tr');
        
        row.innerHTML =`
           
            <td>
                <img src="${imagen}" style ="width:100px; height:50px"></>
            </td>
            <td>
                ${nombre}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                ${valor * cantidad}€
            </td>
            <td>
                <a href="#" class="borrar-curso" id="${id}">X</a>
            </td>
        `;
        contenedorCarrito.appendChild(row);

    });
        totalCarrito.innerHTML = `${sumatotal}`;
}

function limpiarHTML(){

     // vaciar el tbody para que no se dupliquen en la proxima pulsación los elementos que ya están dibujados en pantalla.

    /* Una forma sencilla pero menos optima sería asi:
    contenedorCarrito.innerHTML='';
    */

    /*Forma mas eficiente y rápida:*/

    while(contenedorCarrito.firstChild){

        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    };

};

function revisarCantidadDelProducto(infoCurso){

    
    
}