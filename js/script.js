//--------------------------------PLATAFORMA DE AUTOGESTIÓN DE SERVICIOS MÓVILES----------
let mailSaved= "maca8a15@gmail.com";
let passwordSaved= "1234";
//declaración de la función de logueo.
function InicioSesion() {
    let ingresar = false;
    let intentos = 3;
    for (let i = intentos; i > 0; i--) {
        let mailIngresado = prompt('Ingresá tu mail');
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


if (InicioSesion()) {
    let datos = 2;
    let monto = 2450;
    let menu = prompt("Elegí qué querés consultar: \n1- Ver tu consumo de datos. \n2 - Descargar tu factura. \n3 - Consultar monto a pagar. \n4 - Salir.");

    while (menu != '4') {
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
            default:
                alert('Elegiste una opción inválida');
                break;
        }
        menu = prompt("Elegí qué querés consultar: \n1- Ver tu consumo de datos. \n2 - Descargar tu factura. \n3 - Consultar monto a pagar. \n4 - Salir.");
    }
} else {
    alert('No es posible acceder a tu cuenta. Te pedimos restablecer tu contraseña.');
}

alert('Muchas gracias por ser nuestro cliente');

