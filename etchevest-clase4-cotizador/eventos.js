function cotizar (){
    let marca = document.querySelector("#marca").value;
    let planBasico = document.querySelector ("#basico");
    let planCompleto = document.querySelector("#completo");

    
    if(marca==="Ford"){
        if(planBasico.checked){
            let resultado1 = document.querySelector("#resultado")
            resultado1.innerHTML = "<h2>El seguro de tu auto sale $3000 </h2>"
        }
        if(planCompleto.checked){
            let resultado2 = document.querySelector("#resultado")
            resultado2.innerHTML = "<h2>El seguro de tu auto sale $3500 </h2>"
        }
    } 

    if(marca === "Chevrolet"){
        if(planBasico.checked){
            let resultado3 = document.querySelector("#resultado")
            resultado3.innerHTML = "<h2>El seguro de tu auto sale $4000 </h2>"
        }
        if(planCompleto.checked){
            let resultado4 = document.querySelector("#resultado")
            resultado4.innerHTML = "<h2>El seguro de tu auto sale $4500 </h2>"
        }
        
    }

    if(marca==="Renault"){
        if(planBasico.checked){
            let resultado5 = document.querySelector("#resultado")
            resultado5.innerHTML = "<h2>El seguro de tu auto sale $5000 </h2>"
        }
        if(planCompleto.checked){
            let resultado6 = document.querySelector("#resultado")
            resultado6.innerHTML = "<h2>El seguro de tu auto sale $5500 </h2>"
        }
    }

 
}