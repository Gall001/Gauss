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
  const stairs = []
  const zerado = [];
  var stairSize= array.length
  console.log('inicio das escadas, tamanho: '+array.length)
  for (let i = 0; i < stairSize; i++) {
    for (let j = 0; j < i; j++) {
      console.log(array[i][j])
      console.log("Antes array[i][j] "+array[i][j]+" array[i-1][j] "+array[i-1][j])
      var M = array[i][j] / array[i-j][j]
      console.log(M + "  esse eh o M")
      for (let x = 0; x < stairSize+1; x++) {
        console.log('ANTES array i x: '+ array[i][x]+' array i j: '+ array[i][j]+ ' m: '+ M +' array i-1 j: '+ array[i-1][j])
        if(array[i][x] !=0){zerado[x] = array[i][x] = array[i][x] - M * array[i-1][j]}
        console.log('DEPOIS array i x: '+ array[i][x]+' array i j: '+ array[i][j]+ ' m: '+ M +' array i-1 j: '+ array[i-1][j])
      }
      console.log(zerado);
    }
  }

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
// const m = [ [3, 1, 5, 35,    5],   
//             [0, 2, 5, 12,   66],
//             [5, 5, 1, 8,    18],
//             [8, 6, 2, 5,    34]   ];



// // Formula
// function formula(multiplicador, x, pivo) {
//     this.x = x - (multiplicador * pivo)
//     return this.x
// }
// // Metodo que procura o pivo na coluna especificada, tendo como parametro o array completo e o x
// // e retorna o multiplicador
// function acharMultiplicador(array, coluna, x){
//     var multiplicador
//     for(let i = 0; i < array.length; i++) {
//         for (let j = coluna; j < array[i].length;){
//             if (array[i][j]!= 0) {
//                 multiplicador = array[i][j]
//                 return multiplicador
//                 break
//             }else{
//                 break
//             }
//         }
//         if (multiplicador) {
//             break
//         }
//     }
// }

// function procurarUltimo(array){
//     for (let i = array.length-1; i > 0; i--){
//         for (let j = 0; j < array.length; j++) {
//            if (array[i][j] != 0) {
//                console.log(array[i][j])
//                break
//            }else{
//                break
//            }
            
//         }
//     }
// }


// var x = acharMultiplicador(m,3)
// //console.log(x)
// //metodo(m)
