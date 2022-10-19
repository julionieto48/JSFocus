// objetos

const user = {
    name: 'Logan' ,
    lastname: 'Oereyra',
    age: 50 ,
    address: {
        country : 'Brazil',
        city : 'Manaus' ,
        street: '300 main av'
    },
    friends: ['miley' , 'Brandon'],
    active : true,

    sendMail: function(){
        return 'sending email...'
    } 
    // el vlaor tbn puede ser funcion (property)sendMail: ()=>string 
}

console.log(user)
console.log(user.address.country) // acceso punto
console.log(user.address.sendMail) 
//console.log(user.address.sendMail()) // ejecucion + no declaracion 


// shorthand properties 
const elemento = 'Computador'
const precio = 1500

const nuevoProducto = {
    elemento: elemento ,
    precio  // puedo quitar 
}

console.log(nuevoProducto)