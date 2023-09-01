function matrizCuadrada(matriz){
    let Matriz = matriz.length
 for(let i=0; i<Matriz; i++){
        if(matriz[i].length!==Matriz){
         return false}
    }
    return true
} 
 

const matriz1 = [ 
    [1, 4, 5, 8],
    [66, 23, 19, 80],
    [16, 55]
    // [45, 70, 30, 10]    
]
const matriz2=[
    [6,7,8],
    [7,9,5],
    [1,2,3]
]
console.log(matriz1)
console.log(matrizCuadrada(matriz1)) // false
console.log(matrizCuadrada(matriz2)) // true
