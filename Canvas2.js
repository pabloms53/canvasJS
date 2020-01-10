window.onload = function() {
    //Añadimos el JSON mediante AJAX
    var xhr = new this.XMLHttpRequest();
    xhr.open("GET", "Canvas2.json", true);

    xhr.onload = function() {
        if (xhr.status == 200) {
            var resultado = JSON.parse(this.responseText)

            //PROBAMOS QUE EL ACCESO A JSON FUNCIONE CORRECTAMENTE

            // resultado.DATOS.forEach(anio => {
            //     console.log(anio['FALLECIDOS']);
            // });
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

        } else if (xhr.status == 404)
            console.log("Error 404 no encuentra la peticion")
    }
    xhr.send()




}