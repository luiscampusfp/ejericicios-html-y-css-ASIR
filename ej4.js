function intercambiar() {
    let inicio = parseInt($("#inicio").text());

    let i = 0;
    let intervalo = setInterval(() => {
        $("#fin").text(i);
        i += parseInt(inicio / 250);
        if (i > inicio) {
            clearInterval(intervalo)
            $("#fin").text(inicio);
        }
    }, 1);


}