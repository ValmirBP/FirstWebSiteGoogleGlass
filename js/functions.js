function changePic(foto) {
    document.getElementById("IconId").src = foto
}

function calc_total() {
    var qtd = parseInt(document.getElementById('cQntd').value);
    var valor = qtd * 1500 * 6;
    document.getElementById('cTot').value = valor;
}