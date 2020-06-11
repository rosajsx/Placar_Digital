var configMinuto;
var configSegundo;
var mostrarValor;
var evento = null;
var contador = null;
var p1=0, p2=0;
const value = document.querySelector("#teste");
const btnELAumentar = document.querySelector("#teste1");
const btnElDiminuir = document.querySelector("#teste2")






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

			let result = value.value.split(":");
			let result_min = parseFloat(result[0]);
			let result_seg = parseFloat(result[1]);
			

			this.minuto = result_min;
			this.segundo = result_seg;

			btnELAumentar.disabled = true;
			btnElDiminuir.disabled = true;
      
			
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
	btnELAumentar.disabled = false;
	btnElDiminuir.disabled = false;
	document.getElementById('btnPausar').value = "PAUSAR";
	this.mostrarValor.value = "00:00";

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


function increase(){

	 //retorna valores separados pelo :
	 let valor_separado = value.value.split(":");

	 let min = parseFloat(valor_separado[0]);
	 let seg = valor_separado[1];

	 min += 05; 

	 value.value = min + ":" + seg;
}

function decrease(){

	let valor_separado = value.value.split(":");
	let min = parseFloat(valor_separado[0]);
	let seg = valor_separado[1];

	if(min == 0){
		return
	}

	min -= 05;

	value.value = min + ":" + seg;

}
