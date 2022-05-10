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
const m = [ [1, 2, 5],   
            [3, 4, 5],
            [5, 7, 1]   ];




function formula(multiplicador, x, pivo) {
    this.x = x - (multiplicador - pivo)
    return this.x
}

function metodo(array){
    var x, y
    for(let cont = 0; cont < array.length; cont++) {
        y = array[cont][cont]
        console.log(y)
        for (let index = 0; index < array[cont].length; index++){
            console.log('teste '+array[cont][index])            
        }
        
    }
}


metodo(m)
