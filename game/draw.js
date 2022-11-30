//dibujar monigote
//base
let canvasPalo=document.getElementById('paloBase');//canvas
let base= canvasPalo.getContext("2d");


function drawBase(){
	base.beginPath();
	base.fillStyle="#0A3871";
	base.fillRect(0,295,200,5);
	//base.stroke;
}
//drawBase()
//cuerpo
function drawCuerpo(){
	base.beginPath();
	base.fillStyle="#0A3871";
	base.fillRect(100,50,5,250);
	//base.stroke;
}
//drawCuerpo();
//techo
function drawTecho(){
	base.beginPath();
	base.fillStyle="#0A3871";
	base.fillRect(100,50,85,5);
	//base.stroke;
}
//drawTecho();
//soga
function drawSoga(){
	base.beginPath();
	base.fillStyle="#0A3871";
	base.fillRect(185,50,4.5,50);
	//base.stroke;
}
//drawSoga();
//character
//cabeza 
function cabeza(){
	base.beginPath();
	base.fillStyle="#0A3871";
	base.arc(187, 126, 25, 0, 2 * Math.PI);
	base.lineWidth="4";
	base.strokeStyle='#0A3871';
	base.stroke();
}
//cabeza();
function drawBody(){
	base.beginPath();
	base.fillStyle="#0A3871";
	base.fillRect(185,151,4,70);
	//base.stroke;
}
//drawBody();
function DrawLeftArm(){
	base.beginPath();
	//base.strokeStyle="#0A3871";
	base.moveTo(185,151);
	base.lineTo(145,201);
	base.lineWidth="4";
	base.stroke();
}
//DrawLeftArm();
function DrawRightArm(){
	base.beginPath();
	//base.strokeStyle="#0A3871";
	base.moveTo(188,151);
	base.lineTo(228,201);
	base.lineWidth="4";
	base.stroke();
}
//DrawRightArm();
function drawLeftLeg(){

	base.beginPath();
	base.moveTo(186,220);
	base.lineTo(145,271);
	base.lineWidth="4";
	base.stroke();
}
//drawLeftLeg();
function drawRightLeg(){
	base.beginPath();
	base.moveTo(188,220);
	base.lineTo(225,271);
	base.lineWidth="4";
	base.stroke();
}
//drawRightLeg();