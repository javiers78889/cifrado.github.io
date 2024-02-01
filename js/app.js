

function extraer(){
    // Verifica si el texto tiene mayúsculas o expresiones regulares
   let codigo = document.getElementById('entrada').value;
   let vuelta;
   let patron = /[.*+?^${}()|[\]\\]@<>=!¡+/;
   let patr= /[áéíóúüÁÉÍÓÚÜ]/;
   let paso=false;
   for(i=0; i<codigo.length;i++)
    {
        if(codigo.charAt(i).includes(" "))
        {
            
            i++;
        }
        else
        {
            if(codigo.charAt(i) === codigo.charAt(i).toUpperCase() || patron.test(codigo.charAt(i)) || patr.test(codigo.charAt(i))){
            
                vuelta=document.getElementById('aviso').textContent= "No se puede usar letras mayuscula, Ni expresiones regulares";
                paso= true;
                
            }

            else {
                vuelta=document.getElementById('aviso').textContent= "";

                
            }
        }

        
   }
   if(paso== false)
   {
    encriptar(codigo);
   }
    
   return vuelta;

}
//encripta los valores proporcionados por el user
function encriptar(variable){
    let traduccion="";
    for(i=0; i<variable.length;i++)
    {
        if(variable.charAt(i)=="e")
        {
            traduccion=traduccion+"enter"
            
        }
        else if(variable.charAt(i)=="i")
        {
            traduccion=traduccion+"imes"
            console.log(traduccion);
        }
        else if(variable.charAt(i)=="a")
        {
            traduccion=traduccion+"ai"
            console.log(traduccion);
        }
        else if(variable.charAt(i)=="o")
        {
            traduccion=traduccion+"ober"
            console.log(traduccion);
        }
        else if(variable.charAt(i)=="u")
        {
            traduccion=traduccion+"ufat"
            console.log(traduccion);
        }
        else
        {
            traduccion=traduccion + variable.charAt(i);
        }
        
    }

    return document.getElementById('salida').textContent=traduccion;

}

//copiar texto 
function copiarTexto() {
    var textarea = document.getElementById('salida');
    textarea.select();
    
    try {
      document.execCommand('copy');
      alert('Texto copiado al portapapeles');
    } catch (err) {
      console.error('No se pudo copiar el texto: ', err);
    }
  }


  //desencriptar

  function desencriptar(){
    let base = document.getElementById('salida').value;
    let resultado="";

        for(i=0; i<base.length;i++)
        {
            if(base.charAt(i)==="e"&& base.charAt(i+1)==="n" && base.charAt(i+2)==="t" && base.charAt(i+3)==="e" && base.charAt(i+4)==="r")
            {
                resultado= resultado+"e";
                i+=4;
                
            }
            else if(base.charAt(i)==="i"&& base.charAt(i+1)==="m" && base.charAt(i+2)==="e" && base.charAt(i+3)==="s")
            {
                resultado= resultado+"i";
                i+=3;
                
            }
            else if(base.charAt(i)==="a"&& base.charAt(i+1)==="i")
            {
                resultado= resultado+"a";
                i+=1;
                
            }
            else if(base.charAt(i)==="o"&& base.charAt(i+1)==="b" && base.charAt(i+2)==="e" && base.charAt(i+3)==="r")
            {
                resultado= resultado+"o";
                i+=3;
                
            }
            else if(base.charAt(i)==="u"&& base.charAt(i+1)==="f" && base.charAt(i+2)==="a" && base.charAt(i+3)==="t")
            {
                resultado= resultado+"u";
                i+=3;
                
            }
            else
            {
                resultado=resultado + base.charAt(i);
            }
        }

    return alert(resultado);
  }

