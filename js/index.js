function onLoad() {

    var i = 0;
    var j = 0;
    var k = 0;
    var txtPrvi = document.getElementById("prvo").innerHTML;
    var txtNovi = 'voliš.'
    var txtDrugi = document.getElementById("drugo").innerHTML;
    var speed = 300;

    document.getElementById("drugo").hidden = true;
    document.getElementById("prvo").innerText = '';
    document.getElementById("drugo").innerText = '';

    function typeWriter() {
        if (i < txtPrvi.length) {
            document.getElementById("prvo").innerHTML += txtPrvi.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
            setTimeout(prikazi, 14000);
        } else if (!document.getElementById("prvo").innerHTML.endsWith("voliš.")) {
            setTimeout(obrisi, 1000);  
        }
    }
    setTimeout(typeWriter, speed);

    var prikazi = function () {
        document.getElementById("drugo").hidden = false;
        if (j < txtDrugi.length) {
            document.getElementById("drugo").innerHTML += txtDrugi.charAt(j);
            j++;
        }
        setTimeout(prikazi, 1000);
    }

    function obrisi(){
        if (i >= (txtPrvi.length - txtNovi.length)) {
            var tmp = txtPrvi.substring(0, i);
            document.getElementById("prvo").innerHTML = tmp;
            i--;
            setTimeout(obrisi, speed);
        } else if (k < txtNovi.length){
            document.getElementById("prvo").innerHTML += txtNovi.charAt(k);
            k++;
            setTimeout(obrisi, speed);
        }
        if (k >= txtNovi.length) {
            document.getElementById("prvo").style["borderRightStyle"] = "hidden";
        }
    }
}