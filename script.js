 var inputs = document.getElementById("inp");
var text = document.getElementById("text");

function Add(){
      if(inputs.value == ""){
        alert("please inter the Task ")
      }else{
        let Elment = document.createElement("li");
        Elment.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`
        text.appendChild (Elment);
        inputs.value = "";
        Elment.querySelector("i").addEventListener("click", remove);
        function remove(){
           Elment.remove()
        }
      }
}
