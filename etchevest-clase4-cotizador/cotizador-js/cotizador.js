function cotizar (){
    let marca = document.querySelector("#marca").value;
    let planBasico = document.querySelector ("#basico");
    let planCompleto = document.querySelector("#completo");



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
            fordBasico()
            desaparecerError()
        } else if(planBasico = "||"){
            marcarError()
        }

        if(planCompleto.checked){
            fordCompleto()
            desaparecerError()
        }
    }else{
        marcarError()
    }

    if(marca === "Chevrolet"){
        if(planBasico.checked){

            chevroletBasico()
            desaparecerError()
        }
        if(planCompleto.checked){
            chevroletCompleto()
            desaparecerError()
        }
        
    }

    if(marca==="Renault"){
        if(planBasico.checked){
            renaultBasico()
            desaparecerError()
        }
        if(planCompleto.checked){
            renaultCompleto()
            desaparecerError()
        }
    }
    
}

let precioBasico = 1500;
let precioCompleto = 2000;

function fordBasico(){
    fetch("marcas.json")
    .then(function(res){
        return res.json();
    })
    .then(function(marcaFord1){
        marcaFord1.forEach(function(resumen) {
            Swal.fire(
                'Muchas gracias por elegirnos!',
                `<div class="container">
                <h3>Detalle de su seleccion:</h3> 
                <img src="logos/ford.png" alt="" width="200px" height="100px">
                <li>Marca: ${resumen.Marca1}</li>
                <li>Plan: ${resumen.PlanB}</li>
                <li class="fw-bold">Precio: $${precioBasico}</li>
              </div> `,
                'success' )
        })
    })
}

function fordCompleto(){
    fetch("marcas.json")
    .then(function(res){
        return res.json();
    })
    .then(function(marcaFord2){
        marcaFord2.forEach(function(resumen) {
            Swal.fire(
                'Muchas gracias por elegirnos!',
                `<div class="container">
                <h3>Detalle de su seleccion:</h3> 
                <img src="logos/ford.png" alt="" width="200px" height="100px">
                <li>Marca: ${resumen.Marca1}</li>
                <li>Plan: ${resumen.PlanC}</li>
                <li class="fw-bold">Precio: $${precioCompleto}</li>
              </div> `,
                'success' )
        })
    })}

function chevroletBasico(){
        fetch("marcas.json")
        .then(function(res){
            return res.json();
        })
        .then(function(marcaChevrolet1){
            marcaChevrolet1.forEach(function(resumen) {
                Swal.fire(
                    'Muchas gracias por elegirnos!',
                `<div class="container">
                <h3>Detalle de su seleccion:</h3> 
                <img src="logos/chevrolet.png" alt="" width="200px" height="100px">
                <li>Marca: ${resumen.Marca2}</li>
                <li>Plan: ${resumen.PlanB}</li>
                <li class="fw-bold">Precio: $${precioBasico * 1.5}</li>
              </div> `,
                    'success' )
            })
        })}


function chevroletCompleto(){
    fetch("marcas.json")
    .then(function(res){
        return res.json();
    })
    .then(function(marcaChevrolet2){
        marcaChevrolet2.forEach(function(resumen) {
            Swal.fire(
                'Muchas gracias por elegirnos!',
                `<div class="container">
                <h3>Detalle de su seleccion:</h3> 
                <img src="logos/chevrolet.png" alt="" width="200px" height="100px">
                <li>Marca: ${resumen.Marca2}</li>
                <li>Plan: ${resumen.PlanC}</li>
                <li class="fw-bold">Precio: $${precioCompleto * 1.5}</li>
              </div> `,
                'success' )
        })
    })}

function renaultBasico(){
    fetch("marcas.json")
    .then(function(res){
        return res.json();
    })
    .then(function(marcaRenault1){
        marcaRenault1.forEach(function(resumen) {
            Swal.fire(
                'Muchas gracias por elegirnos!',
                `<div class="container">
                <h3>Detalle de su seleccion:</h3> 
                <img src="logos/renault.png" alt="" width="200px" height="200px">
                <li>Marca: ${resumen.Marca3}</li>
                <li>Plan: ${resumen.PlanB}</li>
                <li class="fw-bold">Precio: $${precioBasico * 2}</li>
              </div> `,
                'success' )
        })
    })}

function renaultCompleto(){
    fetch("marcas.json")
    .then(function(res){
        return res.json();
    })
    .then(function(marcaRenault2){
        marcaRenault2.forEach(function(resumen) {
            Swal.fire(
                'Muchas gracias por elegirnos!',
                `<div class="container">
                <h3>Detalle de su seleccion:</h3> 
                <img src="logos/renault.png" alt="" width="200px" height="200px">
                <li>Marca: ${resumen.Marca3}</li>
                <li>Plan: ${resumen.PlanC}</li>
                <li class="fw-bold">Precio: $${precioCompleto * 2}</li>
              </div> `,
                'success' )
        })
    })}

