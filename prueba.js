//Gráfica lineal
var canvas = document.getElementById('grafica');
var ctx = canvas.getContext('2d');

//Eje de ordenadas
ctx.beginPath();
ctx.moveTo(40, 40);
ctx.lineTo(40, 500);
ctx.stroke();

//Eje de abscisas
ctx.beginPath();
ctx.moveTo(40, 500);
ctx.lineTo(700, 500);
ctx.stroke();

//Datos
ctx.lineWidth = 2;
ctx.strokeStyle = "rgb(88, 214, 141)";
ctx.beginPath();
ctx.moveTo(50, 450);
ctx.lineTo(100, 200);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(100, 200);
ctx.lineTo(150, 250);
ctx.stroke();
ctx.closePath();