var arrData = [];

$(document).ready(function() {
     HideShowListKolegija();
 });

$("#input-kolegij").autocomplete({
    source: function(request, response){
        $.ajax({
            dataType: "json",
            type: "GET",
            url: "http://www.fulek.com/VUA/SUPIT/GetNastavniPlan",
            success: function(data){
                var filtrirano = data.filter(d => d.label.toLowerCase().startsWith(
                    request.term.toLowerCase()));
                response(filtrirano);
            }
        })
    },
    focus: function(e, ui) {
        $("#input-kolegij").val(ui.item.label);
        return false;
    },
    select: function(e, ui) {
        $("#input-kolegij").val("");
        GetKolegij(ui.item.value);
        return false;
    }
});

function GetKolegij(id) {
    $.ajax({
        dataType: "json",
        type: "GET",
        url: "http://www.fulek.com/VUA/SUPIT/GetKolegij/" + id,
        success: AddKolegijToList
    })
}

function AddKolegijToList(data) {
    var btnDelete = $("<button/>")
        .text("Obriši")
        .click(function(e) {
            var idToRemove = $(this).closest("tr").find("label").text();
            var index = arrData.map(item => item.id).indexOf(Number(idToRemove));
            arrData.splice(index, 1);
            UpdateTotal();
            HideShowListKolegija();
            $(this).closest("tr").remove();
        });

    var tds = [
        $("<label/>").text(data.id).attr("hidden", "true"),
        $("<td/>").text(data.kolegij),
        $("<td/>").text(data.ects),
        $("<td/>").text(data.sati),
        $("<td/>").text(data.predavanja),
        $("<td/>").text(data.vjezbe),
        $("<td/>").text(data.tip),
        $("<td/>").append(btnDelete)
    ];
    var row = $("<tr/>").append(tds);
    $("#lista-odabranih").append(row);

    arrData.push(data);
    UpdateTotal();
    HideShowListKolegija();
}

function UpdateTotal() {
    var ectsTotal = arrData.map(item => item.ects).reduce((acc, val) => acc + val, 0);
    var satiTotal = arrData.map(item => item.sati).reduce((acc, val) => acc + val, 0);

    $("#ects-total").text(ectsTotal);
    $("#sati-total").text(satiTotal);
}

function HideShowListKolegija() {
    if (arrData.length === 0) {
        $("#rezultat").hide();
    } else {
        $("#rezultat").show();
    }
}