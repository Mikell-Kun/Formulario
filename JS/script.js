//expresion regular para numero de telefonos: ^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$
//expresion regular para correo electronico: ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$
//expresion regular para la edad: ^(0|[1-9]\d*)$
//expresion regular para las fechas: ^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$
//expresion regular para un id numerico: ^\d{5}$

document.getElementById('formulario').addEventListener('submit', (e) => {
    e.preventDefault();

    /*variables que obtienen el valor de los campos*/
    clave = document.getElementById('clave').value;
    nombre = document.getElementById('nombre').value;
    apellido = document.getElementById('apellido').value;
    telefono = document.getElementById('telefono').value;
    correo = document.getElementById('correo').value;
    edad = document.getElementById('edad').value;
    fechaNacimiento = document.getElementById('fechaNacimiento').value;

    /*todas las expresiones regulares para cada campo*/
    expRegText = /^\s+$/;
    expRegid = !(/^\d{5}$/).test(clave);
    expRegAge = !(/^(0|[1-9]\d*)$/).test(edad);
    expRegEmail = !(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/).test(correo); 
    expRegCel = !(/^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/).test(telefono);
    expRegFecha = !(/^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/).test(fechaNacimiento);

    /*metodo de evaluacion de todos los campos validados*/
    if(clave == null || expRegid){
        alertify.error("la clave debe contener 5 digitos");
        document.getElementById('clave').style.boxShadow = "0 0 5px ";
        return false;
    } 
    else if(nombre == null || nombre.length == 0 || expRegText.test(nombre)){
        alertify.error("el nombre aun no esta validado");
        document.getElementById('nombre').style.boxShadow = "0 0 5px yellow";
        return false;
    } 
    else if(apellido == null || apellido.length == 0 || expRegText.test(apellido)){
        alertify.error("el apellido aun no esta validado");
        document.getElementById('apellido').style.boxShadow = "0 0 5px yellow";
        return false;
    } 
    else if(edad == null || isNaN(edad) || expRegAge){
        alertify.error("la edad no es valida");
        document.getElementById('edad').style.boxShadow = "0 0 5px yellow";
        return false;
    } 
    else if(correo == null || expRegEmail){
        alertify.error("el correo electronico no es valido");
        document.getElementById('correo').style.boxShadow = "0 0 5px yellow";
        return false;
    } 
    else if(telefono == null || expRegCel){
        alertify.error("el telefono no es admisible");
        document.getElementById('telefono').style.boxShadow = "0 0 5px yellow";
        return false;
    }
    else if(fechaNacimiento == null || expRegFecha){
        alertify.error("la fecha de nacimiento no ha sido validada");
        return false;
    }
    else {
        alertify.success("el registro se completo correctamente");
    }
});