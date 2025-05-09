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
                
buttonAdd.addEventListener("click", ()=>{
    const tarea = input.value.trim();
    if(tarea !== ""){
        agregarTarea(tarea);
    }else{
        alert("No se puede agregar una tarea que no contiene texto, porfavor ingrese su tarea nuevamente")
    }
    input.value = "";
})

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

const listaDeTareas = document.getElementById('list'); 

listaDeTareas.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-button')) {
    const tareaAEliminar = event.target.parentNode.parentNode;
    if (tareaAEliminar) {
      tareaAEliminar.remove();
    }
  }
});

listaDeTareas.addEventListener('click', function(event) {
    if (event.target.classList.contains('confirm-button')) {
      const tareaConfirm = event.target.parentNode.parentNode;
      if (tareaConfirm) {
        tareaConfirm.style.backgroundColor = "green";
      }
      taskConfirm++;
    }
  });


