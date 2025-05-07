const input = document.getElementById("input");
const buttonAdd = document.getElementById("buttonAdd");
const items = document.getElementById("items");

buttonAdd.addEventListener("mouseover", function(){
    buttonAdd.style.cursor = "pointer";
})    
buttonAdd.addEventListener("click", function(){
    if(input.value.trim("") !== ""){
        let newtask = document.createElement("li");
        /*newtask.style.height= "140px"
        newtask.style.width= "270px"
        newtask.style.backgroundColor = "#2a2d3e";
        newtask.style.color = "white";
        newtask.style.margin = "5px"
        newtask.style.borderRadius = "5px"
        newtask.style.listStyle="none"
        newtask.style.display = "flex";
        newtask.style.justifyContent = "center";
        newtask.style.alignItems = "center";*/
        newtask.innerText = input.value;
        items.appendChild(newtask);
        input.value = "";
    }
})