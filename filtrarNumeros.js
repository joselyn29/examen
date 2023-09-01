function filtrarNumeros (array){
    const numeros = array.filter(element => element >= 6)
    return numeros
}
const array=[6, 8, 4, 2]
console.log(filtrarNumeros(array))