//--------------------------------PLATAFORMA DE AUTOGESTIÓN DE SERVICIOS MÓVILES----------
let mailSaved= "prueba1234@gmail.com";
let passwordSaved= "1234";
//declaración de la función de logueo.
function InicioSesion() {
    let ingresar = false;
    let intentos = 3;
    for (let i = intentos; i > 0; i--) {
        let mailIngresado = prompt('Bienvenido/a.! Ingresá tu mail');
        let passwordIngresada = prompt('Ingresá tu contraseña.');
        if (mailIngresado === mailSaved && passwordSaved===passwordIngresada) {
            alert('Ingreso exitoso.');
            ingresar = true;
            break;
        } else {
            alert('Error. Te quedan ' + (i - 1) + ' intentos.');
        }
    }
    return ingresar;
}

///---------arrays de packs
const packs = [
    {   
        codigoPack: 1,
        tipoPack: "internet",
        Precio: 700,
        Detalle: "4GB por 30 días"
    },
    {   
        codigoPack: 2,
        tipoPack: "llamadas",
        Precio: 500,
        Detalle: "llamadas ilimitadas a cualquier destino nacional"
    },
    {   
        codigoPack: 3,
        tipoPack: "sms",
        Precio: 100,
        Detalle: "1000 sms en destino nacional"
    },
];

//-------------- submenu packs.-opciones
const packsDisponibles = () => {

    let mensaje = "\nPacks disponibles: \n";

    packs.forEach((pack) => {
        mensaje += `\n Codigo pack: ${pack.codigoPack} \n Tipo pack: ${pack.tipoPack} \n Precio: ${pack.Precio} \n Detalle: ${pack.Detalle} \n -------------------------------- \n`;
    });
    
    let eleccionPack= prompt("Elegi el código del pack que querés comprar \n" + mensaje);
    switch (eleccionPack) {
            case '1':
                alert("Se añadió al carrito el pack 4GB por 30 días")
                break;
            case '2':               
                alert('Se añadió al carrito el pack de llamadas ilimitadas a cualquier destino nacional'); 
                break;              
            case '3':
                alert('Se añadió al carrito el pack de 1000 sms en destino nacional')     
                break;          
            default:
                alert('Elegiste una opción inválida');
                packsDisponibles()  
                break;
        }
        eleccionPack = prompt("Elegí qué querés consultar: \n1- Ver tu consumo de datos. \n2 - Descargar tu factura. \n3 - Consultar monto a pagar. \n4-  Comprar packs  \n5- Salir.");
   
}


if (InicioSesion()) {
    let datos = 2;
    let monto = 2450;
    let menu = prompt("Elegí qué querés consultar: \n1- Ver tu consumo de datos. \n2 - Descargar tu factura. \n3 - Consultar monto a pagar. \n4-  Comprar packs  \n5- Salir.");

    while (menu != '5') {
        switch (menu) {
            case '1':
                alert("Te quedan disponibles " + datos +"GB de tu plan de 15 GB")
                break;
            case '2':               
                alert('Se descargó tu factura y se envió a ' + mailSaved); 
                break;              
            case '3':
                alert("Tu monto a pagar es de $"+ monto)     
                break;     
            case '4':
                packsDisponibles()  
            break;         
            default:
                alert('Elegiste una opción inválida');
                break;
        }
        menu = prompt("Elegí qué querés consultar: \n1- Ver tu consumo de datos. \n2 - Descargar tu factura. \n3 - Consultar monto a pagar. \n4-  Comprar packs  \n5- Salir.");
    }
} else {
    alert('No es posible acceder a tu cuenta. Te pedimos restablecer tu contraseña.');
}

alert('Adiós. Muchas gracias por operar con nuestros servicios');


