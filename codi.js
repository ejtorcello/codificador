


addEventListener('DOMContentLoaded', (event) => {
    function almacenar(){sal.value = ent.value}
    
    var sal = document.getElementById("salida");
    var ent = document.getElementById("ingreso");
    sal.value="todo"
    ent.value="nada"

botonCodificar = document.getElementById("codificar")
botonCodificar.addEventListener("click", almacenar)



});
console.log("ejecutado");
