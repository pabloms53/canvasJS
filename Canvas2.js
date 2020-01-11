window.onload = function () {
    //Añadimos el JSON mediante AJAX
    var xhr = new this.XMLHttpRequest();
    xhr.open("GET", "Canvas2.json", true);

    xhr.onload = function () {
        if (xhr.status == 200) {
            var resultado = JSON.parse(this.responseText)

            //PROBAMOS QUE EL ACCESO A JSON FUNCIONE CORRECTAMENTE

            // resultado.DATOS.forEach(anio => {
            //     console.log(anio['FALLECIDOS']);
            // });

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
            contexto.fillText('FALLECIDOS', 0 , 20);
            contexto.closePath();


            // Hacemos las marcas
            // Marcas del eje de ordenadas
            distancia=150;

            resultado.DATOS.forEach(anio => {
                
                contexto.font = '15pt Calibri';
                contexto.fillStyle = "black";
                contexto.fillText(anio.AÑO, distancia, 540);
                distancia+=83;
            })


            contexto.beginPath();
            for(i=170;i<=960; i+=83){
                contexto.moveTo(i, 490);
                contexto.lineTo(i, 510);
                contexto.stroke();
            }
            contexto.closePath();



            // Marcas del eje de abscisas
            altura =508;

            for(i = 1500; i<=2500; i=i+100){
                contexto.font = '15pt Calibri';
                contexto.fillStyle = "black";
                contexto.fillText(i, 50, altura);
                altura-=44;
            }

            
            contexto.beginPath();
            // contexto.strokeStyle="red";
            //Movemos la pluma el punto cero de la grafica
            for(i=456; i>=60; i-=44){
                
                contexto.moveTo(120, i);
                contexto.lineTo(140, i);
                contexto.stroke();
            }
            contexto.closePath();

            
            

            // Dibujamos la grafica
            
            
            function pintaGrafica() {

                contexto.beginPath();               
                // Calculamos la altura del espacio que tenemos para dibujar entre el numero maximo de fallecidos
                
                pixelFallecido = 440/2500; 
                console.log(pixelFallecido*resultado.DATOS[0].FALLECIDOS);
                contexto.moveTo(170,(500-(pixelFallecido*resultado.DATOS[0].FALLECIDOS)));
                contexto.lineTo(800, 200);
                contexto.stroke();

                // resultado.DATOS.forEach(registro => {

                // })
            }

            pintaGrafica();

        } else if (xhr.status == 404)
            console.log("Error 404 no encuentra la peticion")
    }
    xhr.send()




}