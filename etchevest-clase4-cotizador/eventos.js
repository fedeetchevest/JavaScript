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

    function desaparecerError(){
        let desaparecerError = document.querySelector ("#resultado")
        desaparecerError.innerHTML = "<h2></h2>"
    }

    if(marca==="Ford"){
        if(planBasico.checked){
            Swal.fire(
                'Muchas gracias por elegirnos!',
                `el valor de su seguro es de $${precioBasico} por mes`,
                'success'
              )
            desaparecerError()
        } else if(planBasico = "||"){
            marcarError()
        }

        if(planCompleto.checked){
            Swal.fire(
                'Muchas gracias por elegirnos!',
                `el valor de su seguro es de $${precioCompleto} por mes`,
                'success'
              )
            desaparecerError()
        }
    }else{
        marcarError()
    }

    if(marca === "Chevrolet"){
        if(planBasico.checked){
            Swal.fire(
                'Muchas gracias por elegirnos!',
                `el valor de su seguro es de $${precioBasico *= 1.5} por mes`,
                'success'
              )
            desaparecerError()
        }
        if(planCompleto.checked){
            Swal.fire(
                'Muchas gracias por elegirnos!',
                `el valor de su seguro es de $${precioCompleto *= 1.5} por mes`,
                'success'
              )
            desaparecerError()
        }
        
    }

    if(marca==="Renault"){
        if(planBasico.checked){
            Swal.fire(
                'Muchas gracias por elegirnos!',
                `el valor de su seguro es de $${precioBasico *= 2} por mes`,
                'success'
              )
            desaparecerError()
        }
        if(planCompleto.checked){
            Swal.fire(
                'Muchas gracias por elegirnos!',
                `el valor de su seguro es de $${precioBasico *= 2} por mes`,
                'success'
              )
            desaparecerError()
        }
    }
    
}