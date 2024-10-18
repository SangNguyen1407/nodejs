function updateTable() {
 //   var socket = io();

 //   socket.on('getLiveData', function (data) {
        var tbl = document.getElementById("table_persons");
        var tblBody = document.getElementById("tbody_table_persons");
        
        var value = "<%=data%>";
        var rows = ["1;2;3","4;5;6"]
        for (var key of rows) {
            console.log(key);
            // creates a table row
            var tr = document.createElement("tr");
            tr.setAttribute('onclick', 'onRowClick(this)');

            var items = key.split(';');
            for (var item of items) {
                var td = document.createElement("td");
                td.innerHTML = item.trim();
                tr.appendChild(td);
            } // cell
            var td = document.createElement("td");
            td.innerHTML = "<input type='checkbox'>";
            tr.appendChild(td);
            
            // add the row to the end of the table body
            tblBody.appendChild(tr);
        }// end of row
        
            // put the <tbody> in the <table>
            tbl.appendChild(tblBody);

 //   });



}