

let encuesta = {
    pregunta: "¿Cual es su candidato favorito?",
    respuestas: [ "John Jackson" , "Jack Johnson" , "Kaia"],

    conteo_total: 0,
    peso_conteo: [0,0,0],
    respuesta_elegida: 0
};

let encuesta_DOM = { // https://developer.mozilla.org/es/docs/Web/API/Document/querySelector
    ques:document.querySelector(".votos .ques "),
    answ:document.querySelector(".votos .answ")
};


//console.log(encuesta_DOM)

encuesta_DOM.ques.innerText = encuesta.pregunta;
// https://bobbyhadz.com/blog/javascript-cannot-set-property-innerhtml-of-null#:~:text=To%20resolve%20the%20%22Cannot%20set,not%20present%20in%20the%20DOM.&text=Copied!,-const%20el%20%3D%20document
encuesta_DOM.answ.innerHTML = encuesta.respuestas.map(function(rta,i){

    return(
        `
        <div class="rta" onclick="marcar_rta('${i}')">
            ${rta}
            <span class="barra-porcentaje"></span>
            <span class="valor-porcentaje"></span>
        </div>
        `
    );

}).join("");

function marcar_rta(i){
    encuesta.respuesta_elegida = +i ;
    
    try{
        document.querySelector(".votos .answ .rta .selected ").classList.remove("selected");
    }catch(e){  console.log(e)}      
    
    document.querySelectorAll(".votos .answ .rta")[+i].classList.add("selected");
    mostrar_resultados();

    
    
    
}

function mostrar_resultados(){
    let answs = document.querySelectorAll(".votos .answ .rta ");
    

    for(let i = 0; i < answs.length; i++){
        let porcentage = 0;
        if(i == encuesta.respuesta_elegida){
            porcentage = Math.round( (encuesta.peso_conteo[i]+1) * 100 / (encuesta.conteo_total + 1 ) );
            
        } else{
            porcentage = Math.round( (encuesta.peso_conteo[i]) * 100 / (encuesta.conteo_total + 1 ) );
            
        }
        

        answs[i].querySelector(".barra-porcentaje").style.width = porcentage + "%";
        answs[i].querySelector(".valor-porcentaje").innerText = porcentage + "%";
    }
}

// contador votos
vote_submit(encuesta.respuesta_elegida) // 0 1 2

function vote_submit(cand_selected){
    
    votar.addEventListener('click', ()=>{
        encuesta.peso_conteo[cand_selected] =  encuesta.peso_conteo[cand_selected] + 1 ;
        encuesta.conteo_total = encuesta.conteo_total + 1 ;
        console.log(encuesta.peso_conteo)
    })
}
 