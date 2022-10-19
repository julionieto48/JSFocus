function inciacion_pagina(){
    // inputs
    var input_value = document.getElementById('masa-in').getAttribute('placeholder')
    //var input_value = document.getElementById('masa-in').placeholder
    let button_calculo = document.getElementById('calcular')
    var input_element = document.getElementById('Input_unit')
    var input_unit = input_element.value

    var output_element = document.getElementById('Output_unit')
    var output_unit = input_element.value

    




    

    // calculo
    button_calculo.addEventListener('click', function() {conversionCalculo(input_value,input_unit,output_unit)})

}


function conversionCalculo(input_value,input_unit,output_unit){
    var  resultado_masa
    
    console.log(input_value,input_unit,output_unit);

    if(input_unit == "gramo"){
        if(output_unit == "kilogramo"){
            resultado_masa = input_value / 1000

        }else if("libra"){
            resultado_masa = input_value / 453

        } else if("gramo"){
            resultado_masa = input_value * 1

        }

    }

    document.getElementById('result').innerHTML = resultado_masa
    

}


window.addEventListener('load', inciacion_pagina)