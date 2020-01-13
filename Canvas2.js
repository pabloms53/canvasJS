window.onload = function () {
    //Añadimos el JSON mediante AJAX
    var xhr = new this.XMLHttpRequest();
    xhr.open("GET", "Canvas2.json", true);

    xhr.onload = function () {
        if (xhr.status == 200) {
            var resultado = JSON.parse(this.responseText)
            var canvas = document.getElementById('grafica');
            var contexto = canvas.getContext('2d');

            var radios = document.getElementsByTagName("input");
            contexto.strokeStyle = "black";
            contexto.lineWidth = 3;

            for (radio of radios) {
                radio.addEventListener("change", function (e) {
                    if (e.target.value == "lineal") {
                        contexto.clearRect(0, 0, 2000, 1000);
                        pintaGraficaLineal();
                    } else if (e.target.value == "barras") {
                        contexto.clearRect(0, 0, 2000, 1000);

                        pintaGraficaBarras();
                    } else if (e.target.value == "pastel") {
                        contexto.clearRect(0, 0, 2000, 1000);
                        pintaGraficaPastel();
                    }
                });
            }

            // Función para dibujar los ejes para la gráfica lineal y la de barras
            function dibujaEjes() {

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
            }
            // Calculamos los pixeles por fallecido dividiendo la altura del espacio que tenemos para dibujar entre el numero maximo de fallecidos
            pixelFallecido = 440 / 2500;





            // Dibujamos la grafica  lineal
            function pintaGraficaLineal() {

                dibujaEjes();

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



                movimiento = 1;
                resultado.DATOS.forEach(anio => {
                    contexto.strokeStyle = "#40FF71";
                    contexto.lineWidth = 3;

                    distanciaY = 500 - (pixelFallecido * anio.FALLECIDOS);
                    distanciaX += 83;

                    if (anio.AÑO != 2019) {
                        contexto.lineTo(distanciaX, distanciaY);
                        contexto.stroke();
                    }

                })
                contexto.strokeStyle = "black";
                contexto.lineWidth = 3;
                contexto.closePath();
            }


            function pintaGraficaBarras() {

                dibujaEjes();

                inicialX = 150;
                contexto.fillStyle = "purple";
                resultado.DATOS.forEach(anio => {
                    altura = (pixelFallecido * anio.FALLECIDOS);
                    contexto.fillRect(inicialX, 500, 40, -altura);
                    inicialX += 83;
                })

            }

            function pintaGraficaPastel() {

                sumaMuertos = 0;
                resultado.DATOS.forEach(anio => {
                    sumaMuertos += anio.FALLECIDOS;
                })
                console.log(sumaMuertos);

                radianPorFallecido = (2 * Math.PI) / sumaMuertos;

                // SECTORES HECHOS DE UNO EN UNO

                // contexto.beginPath();
                // contexto.moveTo(260, 220);
                // contexto.arc(260, 220, 200, 0, radianPorFallecido*resultado.DATOS[0].FALLECIDOS);
                // contexto.lineTo(260,220);
                // console.log(radianPorFallecido*resultado.DATOS[0].FALLECIDOS);
                // contexto.fillStyle="green";
                // contexto.fill();
                // contexto.stroke();
                // contexto.closePath();

                // contexto.beginPath();
                // contexto.moveTo(260,220);
                // contexto.arc(260, 220, 200, 0 + radianPorFallecido*resultado.DATOS[0].FALLECIDOS, radianPorFallecido*resultado.DATOS[0].FALLECIDOS+radianPorFallecido*resultado.DATOS[1].FALLECIDOS);
                // contexto.lineTo(260,220);
                // console.log(radianPorFallecido*resultado.DATOS[1].FALLECIDOS);
                // contexto.fillStyle="red";
                // contexto.fill();
                // contexto.stroke();
                // contexto.closePath();

                // contexto.beginPath();
                // contexto.moveTo(260,220);
                // contexto.arc(260, 220, 200, radianPorFallecido*resultado.DATOS[0].FALLECIDOS+radianPorFallecido*resultado.DATOS[1].FALLECIDOS, radianPorFallecido*resultado.DATOS[0].FALLECIDOS+radianPorFallecido*resultado.DATOS[1].FALLECIDOS+radianPorFallecido*resultado.DATOS[2].FALLECIDOS);
                // contexto.lineTo(260,220);
                // console.log(radianPorFallecido*resultado.DATOS[2].FALLECIDOS);
                // contexto.fillStyle="blue";
                // contexto.fill();
                // contexto.stroke();
                // contexto.closePath();


                posicionInicial = 0;
                posicionFinal = radianPorFallecido * resultado.DATOS[0].FALLECIDOS;
                color = 0;

                resultado.DATOS.forEach(anio => {

                    posicionAnterior=posicionFinal;
                    contexto.beginPath();
                    contexto.moveTo(260, 220);
                    contexto.arc(260, 220, 200, posicionInicial, posicionFinal);
                    datosAnteriores=radianPorFallecido*anio.FALLECIDOS;
                    contexto.fillStyle=resultado.COLORES[color];
                    // console.log(resultado.COLORES[color]);
                    contexto.stroke();
                    contexto.fill();
                    contexto.closePath();
                    posicionFinal+=posicionInicial+(posicionFinal);
                    console.log(posicionFinal);
                    posicionInicial=posicionInicial+datosAnteriores;

                    color++;
                })


            }

            // pintaGraficaLineal();

            // pintaGraficaBarras();

            // pintaGraficaPastel();









        } else if (xhr.status == 404)
            console.log("Error 404 no encuentra la peticion")
    }
    xhr.send()




}