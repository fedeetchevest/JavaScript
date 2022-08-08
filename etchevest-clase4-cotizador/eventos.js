function cotizar (){
    let marca = document.querySelector("#marca").value;
    let planBasico = document.querySelector ("#basico");
    let planCompleto = document.querySelector("#completo");

    let precioBasico = 1500 ;
    let precioCompleto = 2000 

    function marcarError(){
        let error = document.querySelector ("#resultado")
        error.innerHTML = `<div class=" container mt-3 p-3 mb-2 bg-danger text-white"><h2> Seleccione una opción </h2></div>`;        
    }

    if(marca==="Ford"){
        if(planBasico.checked){
            let resultado1 = document.querySelector("#resultado")
            resultado1.innerHTML = `<h2> El valor de tu seguro es de $${precioBasico} por mes </h2>`
        } else if(planBasico = "||"){
            marcarError()
        }

        if(planCompleto.checked){
            let resultado2 = document.querySelector("#resultado")
            resultado2.innerHTML = `<h2> El valor de tu seguro es de $${precioCompleto} por mes </h2>`
        }
    }else{
        marcarError()
    }

    if(marca === "Chevrolet"){
        if(planBasico.checked){
            let resultado3 = document.querySelector("#resultado")
            resultado3.innerHTML = `<h2> El valor de tu seguro es de $${precioBasico *= 1.5} por mes </h2>`
        }
        if(planCompleto.checked){
            let resultado4 = document.querySelector("#resultado")
            resultado4.innerHTML = `<h2> El valor de tu seguro es de $${precioCompleto *= 1.5} por mes </h2>`
        }
        
    }

    if(marca==="Renault"){
        if(planBasico.checked){
            let resultado5 = document.querySelector("#resultado")
            resultado5.innerHTML = `<h2> El valor de tu seguro es de $${precioBasico *= 2} por mes </h2>`
        }
        if(planCompleto.checked){
            let resultado6 = document.querySelector("#resultado")
            resultado6.innerHTML = `<h2> El valor de tu seguro es de $${precioCompleto *= 2} por mes </h2>`
        }
    } 
}