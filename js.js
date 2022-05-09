const matrix = [ [1,2],[3,4],[5,7] ];

console.log(matrix)



function addTable() {
    var myTableDiv = document.getElementById("myDynamicTable");
    var table = document.createElement('TABLE');
    table.border = '1';
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
  
    for (var i = 0; i < 3; i++) {
      var tr = document.createElement('TR');
      tableBody.appendChild(tr);
  
      for (var j = 0; j < 4; j++) {
        var td = document.createElement('TD');
        td.width = '75';
        td.appendChild(document.createTextNode("Cell " + i + "," + j));
        tr.appendChild(td);
      }
    }
    myTableDiv.appendChild(table);
  }