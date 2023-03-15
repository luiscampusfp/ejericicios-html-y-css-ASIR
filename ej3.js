function cambiarColor() {
    let tono = $("#color").val();
    if (isNaN(tono) || tono < 0 || tono > 255) {
        alert("Error en el color")
    } else
        $(".cuadro").css("background-color", "rgb(" + tono + ", " + tono + ", " + tono + ")")
}