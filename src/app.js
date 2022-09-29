/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  let form = document.getElementById("formulario"); //obtener el elemento
  let numerodetarjeta = document.getElementById("exampleInputCard1"); //obtener el elemento
  let cvc = document.getElementById("exampleInputCVC1"); //obtener el elemento
  let monto = document.getElementById("exampleInputMonto1"); //obtener el elemento
  let pnombre1 = document.getElementById("exampleInputPNombre1"); //obtener el elemento
  let snombre1 = document.getElementById("exampleInputSNombre1"); //obtener el elemento
  let city1 = document.getElementById("exampleInputSCity1"); //obtener el elemento
  let cp = document.getElementById("exampleInputPostalCdoe1"); //obtener el elemento
  let ciudad = document.getElementById("exampleInputSCity1"); //obtener el elemento
  let mensaje = document.getElementById("mensaje"); //obtener el elemento
  let radios = document.getElementById("radios"); //obtener el elemento
  let inlineRadio1 = document.getElementById("inlineRadio1"); //obtener el elemento
  let inlineRadio2 = document.getElementById("inlineRadio2"); //obtener el elemento
  let inlineRadio3 = document.getElementById("inlineRadio3"); //obtener el elemento
  let inlineRadio4 = document.getElementById("inlineRadio4"); //obtener el elemento
  let fields = document.getElementById("fields"); //obtener el elemento

  form.addEventListener("submit", envioFormulario); //manipular el elemento

  function envioFormulario(event) {
    event.preventDefault();

    //NUMERO DE TARJETA

    if (numerodetarjeta.value === "") {
      numerodetarjeta.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      numerodetarjeta.style.background = "white";
    }

    //CVC

    if (cvc.value === "") {
      cvc.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      cvc.style.background = "white";
    }

    //VALUE

    if (monto.value === "") {
      monto.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      monto.style.background = "white";
    }

    //PNOMBRE1

    if (pnombre1.value === "") {
      pnombre1.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      pnombre1.style.background = "white";
    }

    //SNOMBRE1

    if (snombre1.value === "") {
      snombre1.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      snombre1.style.background = "white";
    }

    //CITY1

    if (city1.value === "") {
      city1.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      city1.style.background = "white";
    }

    //CP

    if (cp.value === "") {
      cp.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      cp.style.background = "white";
    }

    //CIUDAD

    if (ciudad.value === "") {
      ciudad.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    } else {
      ciudad.style.background = "white";
    }

    //MENSAJE

    if (mensaje.value === "") {
      mensaje.style.background = "rgb(242, 214, 214)";
    } else {
      mensaje.style.background = "white";
    }

    if (
      inlineRadio1.checked ||
      inlineRadio2.checked ||
      inlineRadio3.checked ||
      inlineRadio4.checked
    ) {
      radios.style.background = "gray";
    } else {
      radios.style.background = "rgb(242, 214, 214)";
      fields.style.display = "block";
    }

    // let card = document.querySelector("#basic-addon2").value;

    // document.querySelector("#basic-addon2").value = "";
  }
};
