function filaMasLarga(matriz){
    let Matriz = matriz[0]
    for(let i=0; i<matriz.length; i++){
       if(matriz[i].length>Matriz.length){
        return matriz[i]
       }
    }
}
const matriz1 = [ 
    [1, 4, 5, 8],
    [66, 23, 19, 80],
    [16, 55, 6, 8],
    [45, 70, 30, 10, 10, 70]    
]
console.log(matriz1)
console.log(filaMasLarga(matriz1)) // [45, 70, 30, 10, 10, 70] 