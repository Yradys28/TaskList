//FUNCION PARA CREAR LA BIENVENIDA
function nombreUsu (usuario){
  const nombreIngresado = `<p class="usuario"> Bienvenido a Tu TaskList ${usuario}!</p>`
  infoPerfil.insertAdjacentHTML("afterbegin", nombreIngresado)
}

//PROMPT PARA CAPTURAR EL NOMBRE DEL USUARIO
let nombreUsuario = prompt("Ingresa tu Nombre")
if(nombreUsuario !== null && nombreUsuario.trim() !== ""){
    alert("Se ha registrado correctamente " + nombreUsuario);
    usuario = nombreUsuario;
    nombreUsu(usuario);
} else {
    alert("Recargue la pagina e ingrese de forma correcta su usuario.");
}

const fecha = document.getElementById("fecha")
const input = document.getElementById("input")
const buttonAdd = document.getElementById("buttonAdd")
let taskConfirm = 0;

const FECHA = new Date();
fecha.innerHTML= FECHA.toLocaleDateString("es-VE",{weekday:"long",month:"short", day:"numeric"});

//FUNCION PARA AGREGAR TAREA 
let nombreUsuario = prompt("Ingresa tu Nombre")
if(nombreUsuario !== null && nombreUsuario.trim() !== ""){
    alert("Se ha registrado correctamente " + nombreUsuario);
} else {
    alert("Recargue la pagina e ingrese de forma correcta su usuario.");
}
const fecha = document.getElementById("fecha")
const input = document.getElementById("input")
const buttonAdd = document.getElementById("buttonAdd")
const taskConfirm = 0;

function agregarTarea (tarea) {
    const task =   `<li>
                    <p>${tarea}</p>
                    <div class="icons">
                    <img src="/img/boton-editar.png" alt="" class="edit-button">
                    <img src="/img/verificado.png" alt="" class="confirm-button">
                    <img src="/img/eliminar.png" alt="" class="delete-button">
                    </div>
                    </li>
                    `
                    list.insertAdjacentHTML("beforeend",task)              
                }
        
//EL EVENTO QUE NOS LLAMA A LA FUNCION AGREGAR-TAREA MEDIANTE UN CLICK
                
buttonAdd.addEventListener("click", ()=>{
    const tarea = input.value.trim();
    if(tarea !== ""){
        agregarTarea(tarea);
    }else{
        alert("No se puede agregar una tarea que no contiene texto, porfavor ingrese su tarea nuevamente")
    }
    input.value = "";
})

//EVENTO QUE LLAMA A LA FUNCION AGREGAR-TAREA PERO CON LA TECLA(ENTER)
document.addEventListener("keyup", function(event){
    if(event.key=="Enter"){
        const tarea = input.value.trim();
    if(tarea !== ""){
        agregarTarea(tarea);
    }else{
        alert("No se puede agregar una tarea que no contiene texto, porfavor ingrese su tarea nuevamente")
    }
    input.value = "";
    }
})

//EVENTO QUE NOS ELIMINA CADA TAREA MEDIANTE UN CLICK
const listaDeTareas = document.getElementById('list'); 
const listaDeTareas = document.getElementById('list'); 

listaDeTareas.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-button')) {
    const tareaAEliminar = event.target.parentNode.parentNode;
    if (tareaAEliminar) {
      tareaAEliminar.remove();
    }
  }
});

function contadorConfirmadas(tareaContador){
  const numeroContador = document.getElementById("numeroContador")
  if(numeroContador){
    numeroContador.textContent = tareaContador;
  } 
}

//EVENTO QUE NOS CONFIRME CADA TAREA MEDIANTE UN CLICK
listaDeTareas.addEventListener('click', function(event) {
    if (event.target.classList.contains('confirm-button')) {
      const tareaConfirm = event.target.parentNode.parentNode;
      if (tareaConfirm) {
        tareaConfirm.style.backgroundColor = "rgb(105, 202, 85)";
      }
      taskConfirm++;
      tareaContador = taskConfirm;
      contadorConfirmadas(tareaContador);
        tareaConfirm.style.backgroundColor = "green";
      }
      taskConfirm++;
    }
  });


