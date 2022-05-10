function addTable() {
    var metrixSize = document.getElementById('metrixSize').value;
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
        input.id = 'submit'+i+j;
        input.value = 'Submit'+i+j;
        input.className = 'btn';
        td.appendChild(input);
        tr.appendChild(td);
      }
    }
    myTableDiv.appendChild(table);
    return metrixSize
  }

  function makeMetrix(){
    var metrixSize = document.getElementById('metrixSize').value;
    const array = []
    for (let i = 0; i < metrixSize; i++) {
      const arrayI = []
      for (let j = 0; j < metrixSize; j++) {
        arrayI[j] = document.getElementById('submit'+i+j).value;
      }
      array[i] = arrayI;
    }
    return array
}


/*
1 2 3   4
4 5 6   7
7 8 9   6
Array A = no sistema acima o array a é :
    1 2 3  
    4 5 6
    7 8 9

Array B = no sistema acima o array B é:

    4
    7
    6
*/
const m = [ [3, 1, 5, 35,    5],   
            [0, 2, 5, 12,   66],
            [5, 5, 1, 8,    18],
            [8, 6, 2, 5,    34]   ];



// Formula
function formula(multiplicador, x, pivo) {
    this.x = x - (multiplicador * pivo)
    return this.x
}
// Metodo que procura o pivo na coluna especificada, tendo como parametro o array completo e o x
// e retorna o multiplicador
function acharMultiplicador(array, coluna, x){
    var multiplicador
    for(let i = 0; i < array.length; i++) {
        for (let j = coluna; j < array[i].length;){
            if (array[i][j]!= 0) {
                multiplicador = array[i][j]
                return multiplicador
                break
            }else{
                break
            }
        }
        if (multiplicador) {
            break
        }
    }
}

function procurarUltimo(array){
    for (let i = array.length-1; i > 0; i--){
        for (let j = 0; j < array.length; j++) {
           if (array[i][j] != 0) {
               console.log(array[i][j])
               break
           }else{
               break
           }
            
        }
    }
}


var x = acharMultiplicador(m,3)
console.log(x)
metodo(m)
