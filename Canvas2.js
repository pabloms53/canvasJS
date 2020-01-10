window.onload = function() {
    //Añadimos el JSON mediante AJAX
    var xhr = new this.XMLHttpRequest();
    xhr.open("GET", "Canvas2.json", true);

    xhr.onload = function() {
        if (xhr.status == 200)
            var resultado = JSON.parse(this.responseText)

        else if (xhr.status == 404)
            console.log("Error 404 no encuentra la peticion")
    }
    xhr.send




}