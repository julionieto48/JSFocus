
// objetos como parametros

let usuario = {
    nombre: 'Juan',
    edad: 30,
    amigos: ['jose' , 'maria']
}

function imprimir(u){
    return '<h1>Hola '+ u.nombre +' </h1>' // e sun string en formato de etiquetas
}

function imprimir_a(u){
    return '<h1> '+ u['amigos'] +' </h1>'
}

document.body.innerHTML = imprimir(usuario)
document.body.innerHTML =  '<h2> tienes' + usuario.edad + 'años. </h2> '
document.body.innerHTML = imprimir_a(usuario)

// destructurar un objeto 
function imprimir_b({nombre}){  // estoy esperando una propiedad especifica
    return '<h1> '+ nombre +' </h1>'
}

document.body.innerHTML = imprimir_b(usuario)

function imprimir_c(usuario){  // estoy esperando una propiedad especifica
    const {nombre,amigos} = usuario // solo las propiedades que deseo 

    console.log(nombre)
}
