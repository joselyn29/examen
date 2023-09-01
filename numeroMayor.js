function numeroMayor(matriz){
 let Matriz = matriz[0][0]
 for(let i=0; i<matriz.length; i++){
    for (let j=0; j<matriz[i].length; j++){
        if (matriz[i][j]>Matriz){
            Matriz=matriz[i][j]
        }
    }
 }
 return Matriz
}
const matriz1 = [ 
    [1, 4, 5, 8],
    [66, 23, 19, 80],
    [16, 55, 6, 8],
    [45, 70, 30, 10]    
]
console.log(matriz1)
console.log(numeroMayor(matriz1)) // 80