$("#form").submit(function(e) {
    if (!validateForm()) {
        e.preventDefault();
        console.log("prevented default");
        console.log("validirano");
    }
});

function validateForm() {
    var name = $("#fullNameInput").val();
    var email = $("#emailInput").val();
    var msg = $("#poruka").val();
    var emailRegEx = /\S+@\S+\.\S+/;

    if (name == "") {
        alert("Unesite puno ime i prezime!");
        return false;
    }
    if (!emailRegEx.test(email)) {
        alert("Unesite ispravnu email adresu!");
        return false;
    }
    if (msg == "") {
        alert("Unesite svoju poruku!");
        return false;
    }
    return true;
}