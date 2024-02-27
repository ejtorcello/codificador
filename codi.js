


addEventListener('DOMContentLoaded', (event) => {
    var sal = document.getElementById("salida");
var ent = document.getElementById("ingreso");
var cadena=''

    function almacenar(){
        cadena=ent.value;
        console.log('almacenar()  cadena= ',cadena);
    codificar();
        sal.value= cadena;

    
    }
    
    function codificar(){
        
        console.log('codificar(), cadena= ',cadena)
        
        
        //funcion anidada para insertar caracteres
        function insertar(letra,i){console.log('insertar() letra= ',letra);
                
        
            cadena = cadena.slice(0,i)+letra+cadena.slice(i+1);
            
            
        

        }
        
        for (let i=0; i<cadena.length; i++){
            console.log('valor i= ', i)
            let letra = cadena[i]
            console.log('letra= ',letra)
            switch (letra){
                case 'a': insertar('ai',i) ; i=i+1;
                break
                case 'e': insertar('enter',i);i=i+4;
                break
                case 'i': insertar('imes',i);i=i+3;
                break
                case 'o': insertar('ober',i);i=i+3;
                break
                case 'u': insertar('ufat',i);i=i+3;
                break
                
            break}
           ``

        }
        
        
    }
    function decodificar(){
        cadena = ent.value
        cadena = cadena.replace(/ai/g ,'a')
                    .replace(/enter/g ,'e')
                    .replace(/imes/g ,'i')
                    .replace(/ober/g ,'o')
                    .replace(/ufat/g ,'u')
         sal.value=cadena           

    }

botonCodificar = document.getElementById("codificar")
botonCodificar.addEventListener("click", almacenar)
botonDecodificar = document.getElementById("decodificar")
botonDecodificar.addEventListener("click", decodificar)



});
console.log("ejecutado");
