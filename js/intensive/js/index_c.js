// manipulacion dom

console.log(document.title)

const titulo = document.createElement('h1') // es un elemento
titulo.innerText = 'saludos desde tu codigo JS'
document.body.append(titulo)


// boton como event handler 
const btn  = document.createElement('button') 
btn.innerText = 'Aceptar'

btn.addEventListener('click' , function(){console.log('Hola!!')} )
btn.addEventListener('dblclick', function(){console.log(titulo.innerText = ':)')})

document.body.append(btn)