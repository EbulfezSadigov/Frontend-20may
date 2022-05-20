"use strict"

let input=document.querySelector(".list-group")
let inp=document.querySelector(".row .name")
let btn=document.querySelector(".col-2 button")
let inp2=document.querySelector(".row .surname")
let inp3=document.querySelector(".row .father")
let inp4=document.querySelector(".row .date")
let form=document.querySelector(".row .form")

btn.addEventListener("click",function () {
    let newElement = "<li class='list-group-item'>" + inp.value +"</li>"
    let newElement2 = "<li class='list-group-item'>" + inp2.value +"</li>"
    let newElement3 = "<li class='list-group-item'>" + inp3.value +"</li>"
    let newElement4 = "<li class='list-group-item'>" + inp4.value +"</li>"
    input.innerHTML = newElement4 + input.innerHTML ;
    input.innerHTML = newElement3 + input.innerHTML ;
    input.innerHTML = newElement2 + input.innerHTML ;
    input.innerHTML = newElement + input.innerHTML ;
    inp.value="";
    inp2.value="";
    inp3.value="";
    inp4.value="";
    form.style="display:none";
    btn.style="display:none";
})

