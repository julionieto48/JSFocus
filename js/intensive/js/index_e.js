// arrow functions

function multiplicar(x,y){
    return x * y 
}

const multiplicarr = (x,y) => {
    return x * y 
}  // es como function(){}

const buttonn = document.createElement('button')
buttonn.innerText = 'Dame Click'

buttonn.addEventListener('click', () => {
    console.log('clickeado')
})
document.body.append(buttonn)


// inline arrow functions
const mostrarTexto = ()=>{
    return 'muy buenas '
}

const mostrarTextoContinua = () => 'muy buenas '

const showObj = () => ({telefono: 324897})

console.log(mostrarTexto(), mostrarTextoContinua(), showObj().telefono )

// string literals -- interpolacion 
const fondoPass = 'red'
const fondoNotPass = 'yellow'
const color = 'blue'
const autorizado = false
buttonn.style = `background: ${autorizado ? fondoPass : fondoNotPass} ; color: ${color};`