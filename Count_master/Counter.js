
let h1=document.getElementById("h1")

let btn1=document.getElementById("btn1")

let btn2=document.getElementById("btn2")

let btn3=document.getElementById("btn3")

let count=0

btn1.addEventListener("click",()=>{
    count++
    h1.textContent=count
})

btn2.addEventListener("click",()=>{
    count--
    h1.textContent=count
})

btn3.addEventListener("click",()=>{
    h1.textContent=0
})
