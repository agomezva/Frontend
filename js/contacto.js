let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let email = document.getElementById("email")
let telefono = document.getElementById("telefono")
let fecha = document.getElementById("fecha")
let hora = document.getElementById("hora")
let cedula = document.getElementById("cedula")
let comentario = document.getElementById("comentario")
let btnEnviar = document.getElementById("btnSubmit")
let formulario = document.getElementById("form")
let usuario = [];

// formulario.addEventListener("submit",e=>{
//     e.preventDefault();
//     let regemail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;
//     let entrar = false
//     if(nombre.value =="" || apellido.value == "" || email.value == ""
//     || telefono.value == "" || comentario.value == ""){
//         alert("llena todos los campos")
//         entrar = true;
//     }
//     if(!regemail.test(emailReg.value)){
//         parrafo += `el Email no es valido <br>`
//         entrar = true;
//     }

//     nombre.value = "";
//     apellido.value = "";
//     email.value = "";
//     telefono.value = "";
//     fecha.value = "";
//     hora.value = "";
//     comentario.value = "";
    
// })

// formulario.addEventListener("submit",e=>{
//     e.preventDefault();
//     usuario.push({
//         nombre:nombre.value,
//         apellido:apellido.value,
//         email:email.value,
//         telefono:telefono.value,
//         fecha:fecha.value,
//         hora:hora.value
//     })
//     console.log(usuario);
// })
// usuario.forEach((elem)=>{
//     console.log(elem);
// })