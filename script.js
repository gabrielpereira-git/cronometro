function iniciarCronometro(){
	var timer_horas = document.getElementById("timer_horas");
	var timer_minutos = document.getElementById("timer_minutos");
	var timer_segundos = document.getElementById("timer_segundos");
	var timer_decimo = document.getElementById("timer_decimo");


var h = 0; m = 0; s = 0; d = 0;

cronometro_id = setInterval(function() {
  
 timer_horas.innerHTML = h < 10 ? '0' + h : h;
 timer_minutos.innerHTML = m < 10 ? '0' + m : m;
 timer_segundos.innerHTML =s < 10 ? '0' + s : s;
 timer_decimo.innerHTML =d < 10 ? '0' + d : d;

 if(d < 9){ d += 1; }
 else if ( s < 59) { d = 0; s += 1; }
 else if ( m < 59){ d = 0; s = 0; m += 1; }
 else if ( h < 23) { d = 0; s = 0; m = 0; h += 1; }	
 else { alert ('Ops !! Já se passaram 24 horas.'); }

}, 100);

}

function zerarCronometro(){
	clearInterval(cronometro_id);

	document.getElementById("timer_horas").innerHTML = "00";
	document.getElementById("timer_minutos").innerHTML = "00";
	document.getElementById("timer_segundos").innerHTML = "00";
	document.getElementById("timer_decimo").innerHTML = "00";

}
function pausarCronometro(){
	alert('Você pausou o Cronometro');
}

var cronometro_id = 0;