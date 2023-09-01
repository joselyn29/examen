function obtenerCantidad(matriz){
    matriz[0][0]
    let cont=0
    for(let i=0; i<matriz.length; i++){
        for (let j=0; j<matriz[i].length; j++){
            if (matriz[i][j]=='2'){
                cont++
               
            } 
            
        }
    } return cont
 }
 const matriz1 = [ 
    ['2', '1', '1', '2'],
    ['2', '2'],
    ['1', '2', '1'],
    ['2', '2', '2', '1'],   
]
console.log(obtenerCantidad(matriz1)) // 8
