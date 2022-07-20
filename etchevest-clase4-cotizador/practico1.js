
Bienvenido()
function Bienvenido(){
    let nombre = prompt("Ingrese su nombre")
    console.log("Hola " + nombre + " Bienvenido a Arrecifes seguros")
    
    Cotizador()
}


function Cotizador(){
    console.log("-----------")
    console.log("1. Cotizá tu seguro para Auto")
    console.log("2. Cotizá tu seguro para Moto")
    console.log("3. Otros productos")

    opcion1()
}


function opcion1(){
    let opcion = prompt ("Seleccione una opción")
   

    switch(opcion){
        case "1":
            console.log("-------------")
           console.log("1. Chevrolet")
           console.log("2. Ford")
           console.log("3. Renault")
    
           let cotizaAuto = prompt ("Seleccione una opcion")

           const marcaAuto = [
            {nombre: "Chevrolet", precio: 1000},
            {nombre: "Ford", precio: 2000},
            {nombre: "Renault", precio: 3000},   
        ]
    
           if(cotizaAuto === "1"){
            console.log("-------------")
            console.log("Muchas gracias por elegirnos!")
            const valorAuto = marcaAuto.filter ((item) => item.nombre == "Chevrolet")
            console.log(valorAuto)
            console.log("-------------")
            console.log("1. Si")
            console.log("2. No")
            volver()
           }
           if(cotizaAuto === "2"){
            console.log("-------------")
            console.log("Muchas gracias por elegirnos!")
            const valorAuto = marcaAuto.filter ((item) => item.nombre == "Ford")
            console.log(valorAuto)
            console.log("-------------")
            console.log("1. Si")
            console.log("2. No")
            volver()
           }
           if(cotizaAuto === "3"){
            console.log("-------------")
            console.log("Muchas gracias por elegirnos!")
            const valorAuto = marcaAuto.filter ((item) => item.nombre == "Renault")
            console.log(valorAuto)
            console.log("-------------")
            console.log("1. Si")
            console.log("2. No")
            volver()
           }
            break;
        case "2":
            console.log("-------------")
           console.log("1. Yamaha")
           console.log("2. Honda")
           console.log("3. KTM")
    
           let cotizaMoto = prompt ("Indique la marca de su vehículo")

           const marcaMoto = [
            {nombre: "Yamaha", precio: "500"},
            {nombre: "Honda", precio: "600"},
            {nombre: "KTM", precio: "750"},   
        ]
           if(cotizaMoto === "1"){
            console.log("-------------")
            console.log("Muchas gracias por elegirnos!")
            const valorMoto = marcaMoto.filter ((item) => item.nombre == "Yamaha")
            console.log(valorMoto)
            console.log("1. Si")
            console.log("2. No")
            volver()
           
    
          }
           if(cotizaMoto === "2"){
            console.log("-------------")
            console.log("Muchas gracias por elegirnos!")
            const valorMoto = marcaMoto.filter ((item) => item.nombre == "Honda")
            console.log(valorMoto)
            console.log("-------------")
            console.log("Desea cotizar algun otro producto?")
            console.log("1. Si")
            console.log("2. No")
            volver()
    
          }
           if(cotizaMoto === "3"){
            console.log("-------------")
            console.log("Muchas gracias por elegirnos!")
            const valorMoto = marcaMoto.filter ((item) => item.nombre == "KTM")
            console.log(valorMoto)
            console.log("-------------")
            console.log("Desea cotizar algun otro producto?")
            console.log("1. Si")
            console.log("2. No")
            volver()
    
           }           
            break;
        case "3":
            let contacto = prompt("Coloque su correo electrónico y lo contactaremos a la brevedad")
            console.log(contacto)
            break;
    }

}


function volver(){
    let mensaje = prompt ("Desea cotizar algun otro producto?")

    if(mensaje === "1"){
        Cotizador()
    }
    if(mensaje === "2"){
        alert("Muchas gracias por elegirnos")
    }
}