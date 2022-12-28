const parrafo = document.getElementById("parrafo");
// const boton = document.getElementById("btn");
const inputText= document.getElementById("text");
const selector = document.getElementById("materias");
const formulario = document.getElementById("formulario");

// const escribir = () => {
//     let texto = prompt("Qué queres escribir?");
//     parrafo.innerText = texto
// }

// 3 maneras de escuchar los eventos
// 1 - addEventListener(eventos, funcion) - agregarEscuchadorDeEventos

// boton.addEventListener("click", escribir)


// //2 - forma reducida
// boton.onclick = ()=>{escribir()}

// escibir el onlick en el html
// onclick="escribir()" - mala practica

// 2 tipos de eventos: de mecanica y de logica
// mecanica : mouse y teclado
// mouse: click
// mouseover
// boton.addEventListener("mouseover", ()=>{console.log("hola")});
// boton.onmouseover = () => {console.log("hola")};

//mousemove
// boton.addEventListener("mousemove", ()=>{console.log("hola")});

//mouseout
// boton.onmouseout = ()=>{console.log("hola")};

//TECLADO - cuando aprieto la tecla o cuando levanto la tecla
//keydown y keyup

// inputText.onkeydown= ()=> {
//     console.log(inputText.value);
// }

// inputText.onkeyup = () => {
//     console.log(inputText.value);
// }

// eventos de logica 
// // change
// inputText.addEventListener("change", ()=>{
//     console.log(`el valor cambio y ahora es ${inputText.value}`)
// })

selector.onchange = () =>{
    console.log(selector.value)
}

// input
inputText.addEventListener("input", ()=>{
    if (inputText.value.length < 4){
        inputText.className = 'error';
    }else{
        inputText.className = 'valid';
    }
})

//submit
formulario.onsubmit = (e)=> {
    e.preventDefault();
    console.log(e)
}
