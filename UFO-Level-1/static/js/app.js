// from data.js
var tableData = data;

var tbody = d3.select("tbody");


var button = d3.select("#filter-btn");

button.on("click", function() {
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var table = document.getElementById("ufo-table");
    for (var i = table.rows.length - 1; i > 0; i--){table.deleteRow(i);}

    if(inputValue == null || inputValue == ""){

        data.forEach(function(ufoData) {
            var row = tbody.append("tr");
            Object.entries(ufoData).forEach(function([key, value]) {
                var cell = row.append("td");
                console.log(value);
            });
        });
    } else{
        var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
        filteredData.forEach(function(ufoData) {
            var row = tbody.append("tr");
            Object.entries(ufoData). forEach(function([key, value]) {
                var cell = row.append("td");
                cell.text(value);
            });
        });
    }

    });

   


