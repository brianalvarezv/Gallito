let gallito = document.getElementById('musical')
let btnOK = document.getElementById('OK');
let clickOK = false; 
let btnSTOP = document.getElementById('stop');
let inputTag = document.getElementsByTagName('input');


// ACÁ QUIERO METER UN LISTENER PARA QUE LA ALARMA SE ACTIVE
// SÓLO EN EL CASO DE QUE HAYA TOCADO EL BOTON OK
// btnOK.addEventListener('click',reloj(),{
//   return true; 
// })

btnOK.onclick = function(){
  let alarmaLista = document.getElementById('alarmaLista');
  alarmaLista.innerHTML = "La alarma está activada";
 clickOK=true; 
  noPress();
}

btnSTOP.onclick = function(){
  let alarmaLista = document.getElementById('alarmaLista');
  alarmaLista.innerHTML = ""
  if (!gallito.paused) { 
    gallito.pause();
  }
  
  clickOK=false; 
  noPress();
  

}

// deberia hacer un BUCLE para que recorra el btnOK y el boton STOP y vea cual de los dos
// está activo...??







function reloj() {
  var hoy = new Date();
  var hora = hoy.getHours();
  var minuto = hoy.getMinutes();
  var segundo = hoy.getSeconds();
  var horaD = parseInt(document.getElementById("hora").value);
  var minutoD = parseInt(document.getElementById("minuto").value); 

  
  if (hora < 10) {
    hora = "0" + hora
  };

  if (minuto < 10) {
    minuto = "0" + minuto
  };
  if (segundo < 10) {
    segundo = "0" + segundo
  };

  if (hora == horaD && minuto == minutoD && segundo == 00 && clickOK==true){
  gallito.play();
  gallito.loop = true;
    };

var tm = document.getElementById("tm");
tm.innerHTML = (hora + ":" + minuto + ":" + segundo);    

  };

  //Actualizamos el reloj cada mil ms, o sea un segundo
setInterval(reloj, 1000);




function noPress (){
    
  // nueva función que mientras esté activada la alarma no permita hacer input
  // arranca con este bucle, pero hay un problema... cuando toco stop no me toma
  // el "clickOK false", no lo lee... así que sigue activo el prevent default aunque
  // la alarma quede desactivada dsp de toca stop, por lo q no se puede volver a configurar
  // una nueva alarma.. no sé por qué si saco este bucle for afuera de la funcion reloj...
  // deja de funcionar el bucle 

if (clickOK===true){
  for (var i = 0; i < 2; i++) {
    inputTag[i].disabled = true;   
    } 
    btnOK.disabled = true;
} else {
    for (var i = 0; i < 2; i++) {
    inputTag[i].disabled = false;   
    } 
    btnOK.disabled = false;
}  
 };
  



