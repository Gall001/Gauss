function Astairs() {
    var array = [[3,3,1,7],
                [2,4,-1,3],
                [1,-1,5,5]]
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
                //console.log('matriz atual: '+array)
                //array = [array[x], array[z] = array[z], array[x]]
                var holder = array[x]
                array[x] = array[z]
                array[z] = holder
                var holderID = arrayI[x]
                arrayI[x] = arrayI[z]
                arrayI[z] = holderID
                //console.log('matriz novo: '+array)
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
            //console.log('array[i][multi]: '+array[i][multi]+' pivo: '+pivo)      
            for (let j = 0; j < stairSize+1; j++) {
                //console.log('valors i/j/multi: '+i+', '+j+', '+multi)
                //console.log('array[i][j]: '+ array[i][j] +' - M: '+ M + ' * array[multi][j]: '+array[multi][j])
                array[i][j] = (array[i][j] - M * array[multi][j]).toFixed(3)
                //console.log('valor novo no array: '+ array[i][j])
            }
            //console.log('+++++++++++++++') 
        }
    }
    //console.log('ARRAY FINALIZADO: '+array)
    //console.log('ARRAY IDENTIDADTE: '+arrayI)
    return array
}

Astairs()


function Bstairs(){
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