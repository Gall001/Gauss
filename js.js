function addTable() {
    document.getElementById("myDynamicTable").innerHTML = "";
    var metrixSize = document.getElementById('metrixSize').value;
    var myTableDiv = document.getElementById("myDynamicTable");
    var table = document.createElement('TABLE');
    table.border = '1';
    var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);
  
    for (var i = 0; i < metrixSize; i++) {
      var tr = document.createElement('TR');
      tableBody.appendChild(tr);
  
      for (var j = -1; j < metrixSize; j++) {
        j = j+1
        var td = document.createElement('TD');
        td.width = '75';
        var input = document.createElement('input');
        input.type = 'number';
        input.id = 'submit'+i+j;
        input.value = 'Submit'+i+j;
        input.className = 'btn';
        td.appendChild(input);
        tr.appendChild(td);
        j = j-1
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
      for (let j = -1; j < metrixSize; j++) {
        j = j+1
        arrayI[j] = document.getElementById('submit'+i+j).value;
        j = j-1
      }
      array[i] = arrayI;
    }
    console.log(array)
    console.log('nao chegamos nas escadas ainda')
    return array
}


function stairs(){
  var array = makeMetrix()

  var stairSize= array.length
    for (let i = 0; i < stairSize; i++) {
      for (let j = 0; j < i; j++) {
        var M = array[i][j] / array[j][j]
        console.log('M: '+M)
        for (let x = 0; x < stairSize+1; x++) {
          console.log('i - '+i+', j - '+j+', x - '+x)
          console.log('before: '+array[i][x])
          console.log('array[i-1][j]: '+array[i-1][j])
          if(array[i][x] != 0){
            array[i][x] = array[i][x] - M * array[i-1][j]
          }else{array[i][x] =0}
          console.log('after: '+array[i][x])
        }
      }
    }
  return array
}


/* 
RESOLVENDO as equações da matriz
Separando a matriz B da matriz completa e retornando a matriz B
*/
function spliceB(matriz){
  var matrixB = [];
  console.log('matriz: '+matriz)
  for (let i = 0; i < matriz.length; i++) {
    matrixB[i] = matriz[i][matriz.length]
  }
  return matrixB
}


/* 
Separando a matriz A da matriz completa e retornando a matriz A
*/
function spliceA(matriz){
  for (let i = 0; i < matriz.length; i++){
      matriz[i].pop()
  }
  return matriz
}

/* 
Resolvendo as equações com as matrizes separadas
*/
function solveX(matrizA, matrizB){
  var matriX = []
  for (let i = matrizA.length -1; i >= 0; i--) {
    matriX[i]=matrizB[i]
    for (let j = i+1; j < matrizA.length; j++) {
      matriX[i]=matriX[i]-matriX[j]*matrizA[i][j]
    }
    matriX[i]=matriX[i]/matrizA[i][i]
  }
  return matriX
}

function calculateX(){
  document.getElementById("resultado").innerHTML = ''
  document.getElementById("matrizFinal").innerHTML =''
  var array, arrayA, arrayB = [] 
  array = stairs()
  document.getElementById("matrizFinal").innerHTML +='O matriz  final (nao formatado): ' + array
  arrayB = spliceB(array)
  arrayA = spliceA(array)
  matriX = solveX(arrayA, arrayB)
  console.log(matriX)
  for (let i = 0; i < matriX.length; i++) {
  document.getElementById("resultado").innerHTML +=' Valor do X'+(i+1)+' = '+matriX[i]
  }
}

function calculateP(){
  var array = makeMetrix()
  document.getElementById("resultado").innerHTML = ''
  document.getElementById("resultado").innerHTML += array
}