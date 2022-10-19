// funciones 

function la_funciona(){
    return {nombre: 'nombre', edad:'26'}
}

console.log(la_funciona()) // la funcion retorn aun objeto


// la funciones pueden retornasr ... funciones

function la_funciona_a(){
    return function(){
        return 'hola'
    }
}

console.log(la_funciona_a()())


// entrada de parametros por defecto

function suma(x,y){

    if(y === undefined){
        y = 0
    }
    return x + y
}

function resta(x, y = 0){
     
    return x - y
}
console.log(suma(5,3))
console.log(suma(5))
console.log(resta(5))

// funciones anonimas
// crear en la ejecucion con el parentesis

console.log(function inicio(){
    return 'Inicializando ...'
}())

// se usa mucho en el manejo d eeventos
const button = document.createElement('button')
button.innerText = 'Dame Click'

button.addEventListener('click', function(){
    console.log('clickeado')
})
document.body.append(button)