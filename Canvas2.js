window.onload = function () {
    //Añadimos el JSON mediante AJAX
    var xhr = new this.XMLHttpRequest();
    xhr.open("GET", "Canvas2.json", true);

    xhr.onload = function () {
        if (xhr.status == 200) {
            var resultado = JSON.parse(this.responseText)
            var canvas = document.getElementById('grafica');
            var contexto = canvas.getContext('2d');

            

            // Dibujamos los ejes
            //  Eje de ordenadas
            contexto.beginPath();
            contexto.moveTo(130, 500);
            contexto.lineTo(1000, 500);
            contexto.stroke();
            contexto.font = '15pt Calibri';
            contexto.fillStyle = 'blue';
            contexto.fillText('AÑO', 1030, 540);
            contexto.closePath();

            // Eje de abscisas
            contexto.beginPath();
            contexto.moveTo(130, 40);
            contexto.lineTo(130, 500);
            contexto.stroke();
            contexto.font = '15pt Calibri';
            contexto.fillStyle = "red";
            contexto.fillText('FALLECIDOS', 0, 20);
            contexto.closePath();


            // Añadimos los valores de referencia de los ejes
            // Añadimos los valores de referencia del eje de ordenadas
            distancia = 150;

            resultado.DATOS.forEach(anio => {

                contexto.font = '15pt Calibri';
                contexto.fillStyle = "black";
                contexto.fillText(anio.AÑO, distancia, 540);
                distancia += 83;
            })

            // Añadimos los valores de referencia del eje de abscisas
            altura = 508;

            for (i = 1500; i <= 2500; i = i + 100) {
                contexto.font = '15pt Calibri';
                contexto.fillStyle = "black";
                contexto.fillText(i, 50, altura);
                altura -= 44;
            }

            // Calculamos los pixeles por fallecido dividiendo la altura del espacio que tenemos para dibujar entre el numero maximo de fallecidos
            pixelFallecido = 440 / 2500;





            // Dibujamos la grafica  lineal
            function pintaGraficaLineal() {

                // Ponemos las marcas de los ejes
                // Eje de ordenadas
                contexto.beginPath();
                for (i = 170; i <= 960; i += 83) {
                    contexto.moveTo(i, 490);
                    contexto.lineTo(i, 510);
                    contexto.stroke();
                }
                contexto.closePath();

                // Eje de abcisas
                contexto.beginPath();

                for (i = 456; i >= 60; i -= 44) {

                    contexto.moveTo(120, i);
                    contexto.lineTo(140, i);
                    contexto.stroke();
                }
                contexto.closePath();

                contexto.beginPath();



                //Calculamos el alto inicial donde colocaremos la pluma
                altoInicial = 500 - (pixelFallecido * resultado.DATOS[0].FALLECIDOS);

                // Movemos la pluma al punto de inicio de la grafica
                distanciaX = 170;
                contexto.moveTo(distanciaX, altoInicial);
                contexto.strokeStyle = "#40FF71";


                movimiento = 1;
                resultado.DATOS.forEach(anio => {

                    distanciaY = 500 - (pixelFallecido * anio.FALLECIDOS);
                    distanciaX += 83;

                    // console.log("movimiento: "+movimiento+ ", distancia x: "+ distanciaX + ", distancia y: "+distanciaY);
                    contexto.lineWidth=3;
                    contexto.lineTo(distanciaX, distanciaY);
                    movimiento += 1;
                    contexto.stroke();

                })
            }

            
            function pintaGraficaBarras() {

                inicialX=150;
                contexto.fillStyle = "purple";
                resultado.DATOS.forEach(anio => {
                    altura = (pixelFallecido * anio.FALLECIDOS);
                    contexto.fillRect(inicialX,500, 40, -altura);
                    inicialX+=83;
                })

            }

            function pintaGraficaPastel(){
                contexto.beginPath();
                contexto.arc(300, 200, 150, 0, 2*Math.PI);
                contexto.fillStyle="red";
                // contexto.arc(400, 300, 150, 0, Math.PI);
                // contexto.fillStyle="yellow";
                // contexto.arc(400, 300, 150, Math.PI, 0 );
                // contexto.fillStyle="red";
                
                contexto.fill();
                contexto.stroke();
                contexto.closePath();
            }

            pintaGraficaLineal();

            // pintaGraficaBarras();
    
            // pintaGraficaPastel();

            







        } else if (xhr.status == 404)
            console.log("Error 404 no encuentra la peticion")
    }
    xhr.send()




}