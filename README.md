# Gabriel Miguel Cabrera Samano 20491199
# Formulario validado

## El funcionamiento de la etiqueta input en HTML y los diferentes argumentos que puede tener.
-  se utiliza para crear un control interactivo en un formulario web que permite a los usuarios ingresar datos. El funcionamiento de esta etiqueta varía según el valor del atributo type, que determina el tipo de control que se creará:
type: Especifica el tipo de control que se va a crear. Algunos de los valores más comunes son:
- - text: Crea un campo de texto de una sola línea.
- - password: Crea un campo de contraseña que oculta el texto ingresado.
- - checkbox: Crea un checkbox para seleccionar/deseleccionar opciones.
- - radio: Crea un botón de radio para seleccionar una opción de un conjunto.
- - submit: Crea un botón de envío para enviar el formulario.
- - button: Crea un botón sin funcionalidad específica (se puede agregar JavaScript para definir acciones).
- - file: Crea un control para seleccionar archivos desde el dispositivo del usuario, mostrando el nombre del archivo seleccionado.

algunas de las propiedades que se pueden implementar en html para los input, pueden ser:
- name: Define el nombre del control, que se usa para identificar el valor enviado al servidor cuando se envía el formulario. Es importante para el procesamiento de los datos del formulario en el lado del servidor.
- value: Establece el valor inicial del control. Por ejemplo, en un campo de texto (type="text"), este atributo define el texto predefinido que aparece en el campo cuando se carga la página.
- placeholder: Muestra un texto de ejemplo dentro del control antes de que el usuario ingrese algún valor. Es útil para proporcionar instrucciones o ejemplos de formato de entrada.
- required: Es un atributo booleano que indica si el control debe ser completado antes de enviar el formulario. Cuando está presente, el navegador no permite enviar el formulario hasta que este control tenga un valor.
- disabled: También es un atributo booleano que deshabilita el control, lo que significa que el usuario no puede interactuar con él ni enviar su valor con el formulario.

## como puede configurarse la etiqueta button.
- la etiqueta button se utiliza para crear un botón en una página web que puede realizar acciones como enviar un formulario, ejecutar scripts de JavaScript, o realizar cualquier acción interactiva definida por el desarrollador. sin embargo, para este proyecto, sustituimos su implementacion con la introduccion del input gracias a las herramientas que proporciona boostrap, de esta manera, cambiamos el input de manera que efectue como un boton cualquiera.

## El método addEventlistener y como se utiliza en este proyecto.
- document.getElementById('formulario').addEventListener('submit', (e) => {} nos permite analizar el documento que manera que reconozca todos los elementos que conforman parte del id formulario. nosotros implementamos un evento al momento que realizamos un click en el boton, y de esta manera registramos toda la informacion que forme parte del documento. este evento se efectuara para todos los input de type 'submit' con el que lo relacionamos.

## La forma en que son validadas cada una de las entradas.
- expRegid = !(/^\d{5}$/).test(clave);
- la expresion del id consta de unicamente considerar 5 digitos al evaluar la variable de la clave, en donde si no existe un valor ingresado o dentro de la expresion no reconoce el texto, enviara un error de campo invalidado
if(clave == null || expRegid){
        alertify.error("la clave debe contener 5 digitos");
        document.getElementById('clave').style.boxShadow = "0 0 5px ";
        return false;
    } 
- expRegText /^\s+$/;
- la expresion de los textos dicta que debe aceptar caracteres dentro del campo de texto, la condicion menciona que si no existe un valor ingresado, ya sea por el largo o el texto, o no reconoce la expresion, enviara un error de campo invalidado
else if(nombre == null || nombre.length == 0 || expRegText.test(nombre)){
        alertify.error("el nombre aun no esta validado");
        document.getElementById('nombre').style.boxShadow = "0 0 5px yellow";
        return false;
    }
- de la misma forma, aplica con la condicion para los apellidos
else if(apellido == null || apellido.length == 0 || expRegText.test(apellido)){
        alertify.error("el apellido aun no esta validado");
        document.getElementById('apellido').style.boxShadow = "0 0 5px yellow";
        return false;
    }
- expRegAge = !(/^(0|[1-9]\d*)$/).test(edad);
- la expresion de la edad abarca cualquier rango de numeros mientras sean positivos, por lo que, la condicion se aplica si los valores dentro de la edad sean numeros o si la expresion detecta cualquier que sea diferente de los positivos, dado el caso, enviara un error de campo invalidado
else if(edad == null || isNaN(edad) || expRegAge){
        alertify.error("la edad no es valida");
        document.getElementById('edad').style.boxShadow = "0 0 5px yellow";
        return false;
    } 
- expRegEmail = !(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/).test(correo); 
- la expresion del correo electronico reconoce cualquier linea de texto (incluyendo numeros) siempre y cuando tome a consideracion el @ y el . dentro del texto. la condicion se aplica si la expresion no contiene un valor o no es reconocido por parte de la expresion, en ese caso enviara un error de campo invalidado
else if(correo == null || expRegEmail){
        alertify.error("el correo electronico no es valido");
        document.getElementById('correo').style.boxShadow = "0 0 5px yellow";
        return false;
    } 
- expRegCel = !(/^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/).test(telefono);
- la expresion del telefono puede reconocer los valores que tengan o no un signo de separacion, como los () o el guion - siempre y cuando contenga unicamente 10 digitos. la condicion aplica unicamente si el telefono no pose un valor o la expresion no forma parte de ella. dada la situacion enviara un error de campo invalidado.
else if(telefono == null || expRegCel){
        alertify.error("el telefono no es admisible");
        document.getElementById('telefono').style.boxShadow = "0 0 5px yellow";
        return false;
    }
- expRegFecha = !(/^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/).test(fechaNacimiento);
- la expresion de la fecha puede validar un formato de asignacion de fecha con (/, . o -), sin embargo, la validacion de la fecha se representa de esa forma: "dd/mm/aaaa". la condicion aplicara si no contiene un valor o no forma parte de la expresion, de ser el caso, enviara un erro con el campo invalidado.
else if(fechaNacimiento == null || expRegFecha){
        alertify.error("la fecha de nacimiento no ha sido validada");
        return false;
    }
