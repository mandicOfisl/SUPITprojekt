$(document).ready(function(){
    $("#kontaktLink").click(function(){
    console.log("ksjhdfljsdlf");
    $("#kontakt").load("kontakt.html");
    var x = document.getElementById("kontakt");
    x.style.display = "block";
    });
});

function hideKontakt(){
    var x = document.getElementById("kontakt");
    x.style.display = "none";
}