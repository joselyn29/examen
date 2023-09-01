function cuentaRegresiva (numeroInicial){
    let nuevoArray = []
   for(let i=numeroInicial; i>=0; i--){
    nuevoArray.push(i)
   } 
   return nuevoArray
}
console.log(cuentaRegresiva(10))