// from data.js

var tableData = data;

var tbody = d3.select("tbody");


var button = d3.select("#filter-btn1");

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
    var button = d3.select("#filter-btn2");
    button.on("click", function() {
        var inputElement = d3.select("#city");
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
            var filteredData = tableData.filter(tableData => tableData.city === inputValue);
            filteredData.forEach(function(ufoData) {
                var row = tbody.append("tr");
                Object.entries(ufoData). forEach(function([key, value]) {
                    var cell = row.append("td");
                    cell.text(value);
                });
            });
        }
    
        });
   
        var button = d3.select("#filter-btn3");
        button.on("click", function() {
            var inputElement = d3.select("#state");
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
                var filteredData = tableData.filter(tableData => tableData.state === inputValue);
                filteredData.forEach(function(ufoData) {
                    var row = tbody.append("tr");
                    Object.entries(ufoData). forEach(function([key, value]) {
                        var cell = row.append("td");
                        cell.text(value);
                    });
                });
            }
        
            });
            var button = d3.select("#filter-btn4");
            button.on("click", function() {
                var inputElement = d3.select("#country");
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
                    var filteredData = tableData.filter(tableData => tableData.country === inputValue);
                    filteredData.forEach(function(ufoData) {
                        var row = tbody.append("tr");
                        Object.entries(ufoData). forEach(function([key, value]) {
                            var cell = row.append("td");
                            cell.text(value);
                        });
                    });
                }
            
                });
                var button = d3.select("#filter-btn5");
                button.on("click", function() {
                    var inputElement = d3.select("#shape");
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
                        var filteredData = tableData.filter(tableData => tableData.shape === inputValue);
                        filteredData.forEach(function(ufoData) {
                            var row = tbody.append("tr");
                            Object.entries(ufoData). forEach(function([key, value]) {
                                var cell = row.append("td");
                                cell.text(value);
                            });
                        });
                    }
                
                    });

