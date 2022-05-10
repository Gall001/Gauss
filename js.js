const matrix = [ [1,2,4],[3,4,2],[5,7,8] ];

console.log(matrix)

function makeMetrix(){
    console.log("1")
}

function addTable() {
    var metrixSize = document.getElementById('metrixSize').value;
    console.log(metrixSize)
    var myTableDiv = document.getElementById("myDynamicTable");
    var table = document.createElement('TABLE');
    table.border = '1';
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
  
    for (var i = 0; i < metrixSize; i++) {
      var tr = document.createElement('TR');
      tableBody.appendChild(tr);
  
      for (var j = 0; j < metrixSize; j++) {
        var td = document.createElement('TD');
        td.width = '75';
        var input = document.createElement('input');
        input.type = 'number';
        input.id = 'submit'+j;
        input.value = 'Submit'+j;
        input.className = 'btn';
        td.appendChild(input);
        tr.appendChild(td);
      }
    }
    myTableDiv.appendChild(table);
  }