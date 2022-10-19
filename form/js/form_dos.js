

function addDog(){
    var nombre = document.getElementById("nombre").value
    var fecha_nacimiento = document.getElementById("nacimiento").value
    

    let result = calcularEdad(fecha_nacimiento)
    console.log(result[0])
    input = result[0]
    edad = result[1]
   

    if(input === true){
        var tr = document.createElement('tr')
        var td1 = tr.appendChild(document.createElement('td'))
        var td2 = tr.appendChild(document.createElement('td'))
        var td3 = tr.appendChild(document.createElement('td'))

        td1.innerHTML = nombre
        td2.innerHTML = fecha_nacimiento
        td3.innerHTML = edad

        document.getElementById("tbl").appendChild(tr)

    }

    
}

function calcularEdad(dob){
    const current_date = new Date().toJSON().slice(0, 10) //Sun Oct 02 2022 19:00:00 GMT-0500 (hora estándar de Colombia) string
    parseInt(current_date)
    var valid_input = false

    // convert input into date object 
    // fecha nac
    let dob_date = new Date(dob)  
    let dob_day = dob_date.getDate();
    let dob_month = dob_date.getMonth() + 1; // xq no hay mes cero
    let dob_year = dob_date.getFullYear();

    dob_date = `${dob_year}-${dob_month}-${dob_day}`;
    
    // actual
    let current = current_date.split('-');
    current_year = current[0]; 
    current_month = current[1]
    current_day = current[current.length - 1]; // Outputs: Alice
    

    

    if(  dob_year > current_year || (dob_year === current_year && dob_month > current_month) || (dob_year === current_year && dob_month === current_month && dob_day > current_day)        )
    {
        document.getElementById("message").innerHTML = "*!!No ha nacido!!*" ;
        return;
    } else{
        document.getElementById("message").innerHTML = "" ;
        valid_input = true;
    }

    
    // calculo 
    var diff_anio = current_year - dob_year;
    var diff_mes;
    var diff_dia;

    if(current_month >= dob_month){
        diff_mes = current_month - dob_month;
    } else{
        diff_anio--;
        diff_mes = 12 + current_month 
    }

    /*
    if(current_day >= dob_day){
        diff_dia = current_day - dob_day;
        
    }else{
        diff_mes--;
        let dias = month[current_month - 2]
        diff_dia = dias + current_day - dob_day

        if(diff_mes <0){
            diff_mes = 11;
            diff_anio--;
        }
    }*/
    
    return [valid_input,diff_anio]
    
}

let accionBotonAdd = document.getElementById("botton-add").addEventListener('click', addDog)

// https://www.freecodecamp.org/news/javascript-get-current-date-todays-date-in-js/
// https://www.javascripttutorial.net/javascript-return-multiple-values/