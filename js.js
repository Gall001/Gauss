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

function stairs() {
  document.getElementById("identidade").innerHTML = ''
  var array = makeMetrix()
  var arrayI= new Array(stairSize);
  var stairSize = array.length
  var contador = 0

  //MATRIZ IDENTIDADE
  for (let x1 = 0; x1 < stairSize; x1++) {
    arrayI[x1]= new Array(stairSize)
    for (let x2 = 0; x2 < stairSize; x2++) {
      if(x1 == x2){
        arrayI[x1][x2] = 1
      }else{
        arrayI[x1][x2] = 0
      }
    }
  }

  var arrayL = arrayI

  //ORGANIZANDO MATRIZ
  for (let multi = 0; multi < stairSize-1; multi++) {
    for (let x = 0; x < stairSize; x++) {
      for (let y = 0; y < stairSize+1; y++) {
        if(array[x][y] == 0){
          for (let z = x+1; z < stairSize; z++) {
            if(array[z][y] != 0){
              //console.log('x, y, z = '+x+', '+y+', '+z)
              //console.log('array[x][y] = '+array[x][y]+' and array[z][y] is ='+array[z][y])
              console.log('matriz atual: '+array)
              //array = [array[x], array[z] = array[z], array[x]]
              var holder = array[x]
              array[x] = array[z]
              array[z] = holder
              var holderID = arrayI[x]
              arrayI[x] = arrayI[z]
              arrayI[z] = holderID
              console.log('matriz novo: '+array)
            }
          }
        }
      }
    }
    var pivo = array[multi][multi]

      //CRIANDO MATRIZ L
      console.log('AQUI ESTA O ARRAY U: '+ array)
      contador++
      console.log(contador+' '+stairSize)
      for (let L = contador-1; L < stairSize-1; L++) {
        console.log(array[L+1][contador-1])
        arrayL[L+1][contador-1] = array[L+1][contador-1]/array[contador-1][contador-1];
      }
      console.log('AQUI ESTA O ARRAY L: '+ arrayL)
    
      console.log('-------------------------')
      //ZERANDO ELEMENTOS
      for (let i = 1 +multi; i < stairSize; i++) {
          var M = array[i][multi]/pivo   
          console.log('array[i][multi]: '+array[i][multi]+' pivo: '+pivo)      
          for (let j = 0; j < stairSize+1; j++) {
              console.log('valors i/j/multi: '+i+', '+j+', '+multi)
              console.log('array[i][j]: '+ array[i][j] +' - M: '+ M + ' * array[multi][j]: '+array[multi][j])
              array[i][j] = (array[i][j] - M * array[multi][j]).toFixed(3)
              console.log('valor novo no array: '+ array[i][j])
          }
          console.log('+++++++++++++++') 
      }
  }
  console.log('ARRAY FINALIZADO: '+array)
  console.log('ARRAY IDENTIDADTE: '+arrayI)
  document.getElementById("L").innerHTML += 'O matriz  L (nao formatado): ' + arrayL
  document.getElementById("identidade").innerHTML += 'O matriz  identidade (depois de permutacao): ' + arrayI
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
  document.getElementById("matrizFinal").innerHTML +='Matriz U (nao formatado): ' + array
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