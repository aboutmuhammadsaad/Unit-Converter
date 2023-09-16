/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl=document.getElementById("input-el")
const convertBtn=document.getElementById("convert-btn")
const lengthBox=document.getElementById("length")
const volumeBox=document.getElementById("volumn")
const massBox=document.getElementById("mass")

let inputvalue=0
convertBtn.addEventListener("click",function(){
    inputvalue=inputEl.value
    //inputEl.value=""
    length(inputvalue)
    volumn(inputvalue)
    mass(inputvalue)
})
function length(value){
    m=value*3.281
    f=value/3.281
    let ans= `${value} meters = ${m.toFixed(3)} feets | ${value} feets = ${f.toFixed(3)} meters`
    console.log(ans)
    lengthBox.innerHTML = ans
}
function volumn(value){
    l=value*0.264
    g=value/0.264
    let ans= `${value} liters = ${l.toFixed(3)} gallon | ${value} gallom = ${g.toFixed(3)} liters`
    volumeBox.innerHTML=ans
}
function mass(value){
    k=value*2.204
    p=value/2.204
    let ans= `${value} kilogram = ${k.toFixed(3)} pound | ${value} pound = ${p.toFixed(3)} kilogram`
    massBox.innerHTML=ans
}