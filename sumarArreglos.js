function sumarArreglos (array1, array2){
    let nuevoArray = []
    for (let i=0; i<array1.length; i++){
        nuevoArray.push(array1[i]+array2[i])
    }
    return nuevoArray
}
const array1 = [2, 4, 6]
const array2 = [2, 4, 6]
console.log(sumarArreglos(array1, array2))