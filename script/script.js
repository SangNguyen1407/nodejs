function updateTable() {
    console.log("test");
    var socket = io();

    socket.on('getLiveData', function (data) {
        var tbl = document.getElementById("table_persons");
        var tblBody = document.getElementById("tbody_table_persons");
        
        for (var key of data) {
            // creates a table row
            var tr = document.createElement("tr");
            tr.setAttribute('onclick', 'onRowClick(this)')
            var i = 0;
            var items = key.split(';');
            for (var item of items) {
                if (i == 0){
                var td = document.createElement('td');
                var a = document.createElement('a');
                a.innerHTML = item.trim();
                a.setAttribute('href', 'https://www.google.com');
                td.appendChild(a);
                tr.appendChild(td);
                }
                else if (i == 5){
                
                }
                else {
                var td = document.createElement("td");
                td.innerHTML = item.trim();
                tr.appendChild(td);
                }
                i++;
            } // cell
            var td = document.createElement("td");
            td.innerHTML = "<input type='checkbox'>"
            tr.appendChild(td);
            
            // add the row to the end of the table body
            tblBody.appendChild(tr);
            }// end of row
        
            // put the <tbody> in the <table>
            tbl.appendChild(tblBody);

    });



}