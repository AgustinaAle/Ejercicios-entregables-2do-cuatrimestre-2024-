"use strict";

let contenedor = document.getElementById("contenedor");

fetch("https://randomuser.me/api/")
.then (res => res.json())
.then (data => {
        console.log(data.results[0]);
        contenedor.innerHTML=`
        <img src="${data.results[0].picture.large}" width="150px"/>
        <h4>Apellido: ${data.results[0].name.last}</h4>
        <h4>Nombre: ${data.results[0].name.first}</h4>
        <h5>Genero: ${data.results[0].gender}</h5>
        <h5>Fecha y hora de nacimiento: ${data.results[0].dob.date}</h5>
        <h6>Edad: ${data.results[0].dob.age}</h6>
        `;

    })
   

