var configMinuto;
var configSegundo;
var mostrarValor;
var evento = null;
var contador = null;
var minuto;
var segundo;
var p1=0, p2=0;


function IniciarCronometro(valor){
	this.evento = valor;
	this.configMinuto = document.getElementById('min').value;
	this.configSegundo = document.getElementById('seg').value;
	this.mostrarValor = document.getElementById('mostrarValor');
	
	
	if (evento=="start"){
		if(!document.getElementById('min').readOnly){
			document.getElementById('min').readOnly = true;
			document.getElementById('seg').readOnly = true;
			document.getElementById('btnIniciar').disabled  = true;
			document.getElementById('btnResetar').disabled  = false;
			document.getElementById('btnPausar').disabled  = false;
			this.minuto = 30;
			this.segundo = 00;
		}else{
			if(this.segundo == 0 && this.minuto != 0){
				this.segundo = 59;
				this.minuto--;
			}else{
				this.segundo--;
			}
			if(this.minuto == 0 && this.segundo == 0){
				document.getElementById('min').readOnly = false;
				document.getElementById('seg').readOnly = false;
				document.getElementById('btnIniciar').disabled  = false;
				document.getElementById('btnResetar').disabled  = true;
				document.getElementById('btnPausar').disabled  = true;
				this.mostrarValor.value = "00:00";
				
				clearTimeout(this.contador);
				return;
			}	
			
			novoMinuto = null;
			novoSegundo = null;
			if(this.minuto <= 9){
				novoMinuto = "0" + this.minuto;
			}else{
				novoMinuto = this.minuto;
			}
			if(this.segundo <= 9){
				novoSegundo = "0" + this.segundo;
			}else{
				novoSegundo = this.segundo;
			}
			this.mostrarValor.value = novoMinuto + ":" + novoSegundo;
		}
	}
	clearTimeout(this.contador);
	this.contador = setTimeout('IniciarCronometro(evento)', 1000);
}


function PausarCronometro(){
	if(document.getElementById('btnPausar').value=="PAUSAR"){
		document.getElementById('btnPausar').value = "VOLTAR";
		this.evento = "pause";
	}else{
		document.getElementById('btnPausar').value = "PAUSAR";
		this.evento = "start";
	}
}

function ResetarCronometro(){
	document.getElementById('min').readOnly = false;
	document.getElementById('seg').readOnly = false;
	document.getElementById('btnIniciar').disabled  = false;
	document.getElementById('btnResetar').disabled  = true;
	document.getElementById('btnPausar').disabled  = true;
	document.getElementById('btnPausar').value = "PAUSAR";
	this.mostrarValor.value = "30:00";

 document.getElementById('mostrarValor').classList.remove('mostrarValor2');
	document.getElementById('mostrarValor').classList.add('mostrarValor');
	document.getElementById('exibe').classList.remove('Classexibe2');
	document.getElementById('exibe').classList.add('Classexibe');

	clearTimeout(this.contador);
}

function golTime1(){
	p1 +=1;
	document.getElementById('gol_1').innerHTML = p1;
}

function golTime2(){
	p2 +=1;
	document.getElementById('gol_2').innerHTML = p2;
}
