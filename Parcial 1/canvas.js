var d = document.getElementById('Dibujo')
var lienzo = d.getContext('2d')

var d = document.getElementById('Dibujo2')
var lienzo2 = d.getContext('2d')

var d = document.getElementById('Dibujo3')
var lienzo3 = d.getContext('2d')
/*
//Iniciamos el lienzo
lienzo.beginPath();
//Color para la linea
lienzo.strokeStyle = "red";
// Coordenada inicial para el trazo
lienzo.moveTo(190,80);
//coordenada final para el trazo
lienzo.lineTo(190,110);
//funcion para dibujar la linea
lienzo.stroke();
//cierra el trazo
lienzo.closePath();
*/

function DibujarLineas(color, xInicial, yInicial, xFinal, yFinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

function DibujarLineas3(color, xInicial, yInicial, xFinal, yFinal){
    lienzo3.beginPath();
    lienzo3.strokeStyle = color;
    lienzo3.moveTo(xInicial, yInicial);
    lienzo3.lineTo(xFinal, yFinal);
    lienzo3.stroke();
    lienzo3.closePath();
}



//Cuadrado
function dibujarCuadrado(){
  grad1=lienzo.createLinearGradient(2,2,400,2);
  grad1.addColorStop(0, "red");
  grad1.addColorStop(0.5, "green");
  grad1.addColorStop(1, "purple")
  lienzo.fillStyle = grad1;
  lienzo.strokeStyle = "black";
  lienzo.lineWidth=5;
  lienzo.beginPath();
  lienzo.moveTo(0, 0);
  lienzo.lineTo(0, 400);
  lienzo.lineTo(400, 400);
  lienzo.lineTo(400, 0);
  lienzo.stroke();
  lienzo.fill();
  lienzo.closePath();
}




function dibujarCirculo0() {
  lienzo2.strokeStyle = "black"
  lienzo2.fillStyle = "red"
  lienzo2.lineWidth = 1;
  lienzo2.beginPath();
  lienzo2.arc(550,250,250,0,2*Math.PI)
  lienzo2.stroke();
  lienzo2.fill();
  lienzo2.closePath();
}

//Punto 2
dibujarCuadrado();
dibujarCirculo0();


//punto 1

//Plano Cartesiano punto A
DibujarLineas3("black", 250, 1, 250, 401);
DibujarLineas3("black", 50, 200, 450, 200);
//Vector
DibujarLineas3("red", 250, 200, 330, 80);
//direccion
lienzo3.strokeStyle = "black"
lienzo3.lineWidth = 1;
lienzo3.beginPath();
lienzo3.arc(250, 200, 42, 0,-0.977, true);
lienzo3.stroke();
lienzo3.closePath();


//punto 2
//plano cartesiano
DibujarLineas3("black", 750, 1, 750, 401);
DibujarLineas3("black", 550, 200, 950, 200);
//Vector
DibujarLineas3("blue", 750, 200, 590, 40);
//direccion
lienzo3.strokeStyle = "black"
lienzo3.lineWidth = 1;
lienzo3.beginPath();
lienzo3.arc(750, 200, 100, 0,-2.356, true);
lienzo3.stroke();
lienzo3.closePath();

//punto 3
DibujarLineas3("black", 1250, 1, 1250, 401);
DibujarLineas3("black", 1050, 200,1550, 200);
//Vector
DibujarLineas3("green", 1250, 200, 1290, 280);
//direccion
lienzo3.strokeStyle = "black"
lienzo3.lineWidth = 1;
lienzo3.beginPath();
lienzo3.arc(1250, 200, 40, 0,-5.16617, true);
lienzo3.stroke();
lienzo3.closePath();


//punto 4
lienzo3.fillStyle = "blue";
lienzo3.beginPath();
DibujarLineas3("black", 350, 750, 700, 850); //1 a 3
DibujarLineas3("black", 350, 750, 550, 500); //1 a 2
DibujarLineas3("black", 550, 500, 700, 850); //2  a 3
DibujarLineas3("black", 700, 850, 715, 835);
DibujarLineas3("black", 550, 500, 565, 495);
DibujarLineas3("black", 565, 495, 715, 835);
//
DibujarLineas3("black", 628, 682, 643, 667)

//Tiangulo interno
DibujarLineas3("black", 525, 800, 450, 622);
DibujarLineas3("black", 450, 622, 628, 682);
DibujarLineas3("black", 628, 682, 525, 800);


//Triangulos pintados
//Triangulo 1
 lienzo3.fillStyle = "yellow";
 lienzo3.strokeStyle = "black";
 lienzo3.lineWidth = 0;
 lienzo3.beginPath();
 lienzo3.moveTo(350, 750);
 lienzo3.lineTo(450, 622);
 lienzo3.lineTo(525, 800);
 //lienzo3.lineTo(550, 200);
 lienzo3.stroke();
 lienzo3.fill();
 lienzo3.closePath();


 //trianglo 2
 lienzo3.fillStyle = "red";
 lienzo3.strokeStyle = "black";
 lienzo3.lineWidth = 0;
 lienzo3.beginPath();
 lienzo3.moveTo(525, 800);
 lienzo3.lineTo(628, 682);
 lienzo3.lineTo(700, 850);
 lienzo3.stroke();
 lienzo3.fill();
 lienzo3.closePath();

 //Triangulo 3

 lienzo3.fillStyle = "blue";
 lienzo3.strokeStyle = "black";
 lienzo3.lineWidth = 0;
 lienzo3.beginPath();
 lienzo3.moveTo(450, 622);
 lienzo3.lineTo(550, 500);
 lienzo3.lineTo(628, 682);
 //lienzo3.lineTo(550, 200);
 lienzo3.stroke();
 lienzo3.fill();
 lienzo3.closePath();
