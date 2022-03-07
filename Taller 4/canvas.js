var d = document.getElementById('Dibujo')
var lienzo = d.getContext('2d')


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


//Cuadrado
//punto 3
function dibujarCuadrado(){

  grad1=lienzo.createLinearGradient(2,2,400,2);
  grad1.addColorStop(0, "red");
  grad1.addColorStop(0.33, "blue");
  grad1.addColorStop(0.66, "green");
  grad1.addColorStop(1, "purple")
  lienzo.fillStyle = grad1;
  lienzo.strokeStyle = "black";
  lienzo.lineWidth=1;

  lienzo.beginPath();
  lienzo.shadowOffsetX=12;
  lienzo.shadowOffsetY=12;
  lienzo.shadowColor = "#aa0";
  lienzo.shadowBlur = 7;
  lienzo.moveTo(2, 2);
  lienzo.lineTo(2, 400);
  lienzo.lineTo(400,400);
  lienzo.lineTo(400, 2);
  lienzo.stroke();
  lienzo.fill();
  lienzo.closePath();


}
//Rectangulo
function dibujarRectangulo(){
lienzo.fillStyle = "blue";
lienzo.strokeStyle = "black";
lienzo.lineWidth = 5;
lienzo.beginPath();
lienzo.moveTo(1, 250);
lienzo.lineTo(1, 450);
lienzo.lineTo(500, 450);
lienzo.lineTo(500, 250);
lienzo.stroke();
lienzo.fill();
lienzo.closePath();

}
//Triangulo equilatero
function dibujarTriangulo1(){
  lienzo.fillStyle = "yellow";
  lienzo.strokeStyle = "black";
  lienzo.lineWidth = 5;
  lienzo.beginPath();
  lienzo.moveTo(250, 200);
  lienzo.lineTo(450, 200);
  lienzo.lineTo(350, 26);
  lienzo.lineTo(250, 200);
  lienzo.stroke();
  lienzo.fill();
  lienzo.closePath();


}
//triangulo isoceles
function dibujarTriangulo2(){
  lienzo.fillStyle = "green";
  lienzo.strokeStyle = "black";
  lienzo.lineWidth = 5;
  lienzo.beginPath();
  lienzo.moveTo(550, 200);
  lienzo.lineTo(800, 50);
  lienzo.lineTo(800, 350);
  lienzo.lineTo(550, 200);
  lienzo.stroke();
  lienzo.fill();
  lienzo.closePath();

}

function dibujarCirculo(){
  grad1=lienzo.createLinearGradient(500,220,900,220);
  grad1.addColorStop(0, "orange");
  grad1.addColorStop(0.25, "yellow");
  grad1.addColorStop(0.50, "red");
  grad1.addColorStop(0.75, "green");
  grad1.addColorStop(1, "blue")

  lienzo.fillStyle = grad1;
  lienzo.strokeStyle = "black"
  lienzo.lineWidth = 1;
  lienzo.beginPath();
  lienzo.shadowOffsetX=-10;
  lienzo.shadowOffsetY=12;
  lienzo.shadowColor = "#e9967a";
  lienzo.shadowBlur = 7;
  lienzo.arc(700,220,200,0,2*Math.PI)
  lienzo.stroke();
  lienzo.fill();
  lienzo.closePath();
}


dibujarCuadrado();
dibujarCirculo();
