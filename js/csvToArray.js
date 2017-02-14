$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "oldDb.csv",
        dataType: "text",
        success: function(data) {console.log(data);}
    });
});