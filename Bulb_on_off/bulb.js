
let img1=document.getElementById("img1")


let btn1=document.getElementById("btn1")


let btn="Turn Off";


btn1.addEventListener("click",()=>{

    if(btn=="Turn Off"){

btn="Turn On"
        btn1.textContent="Turn Off"
        img1.setAttribute("src","https://img.freepik.com/free-vector/realistic-light-bulb-with-electricity_23-2149129410.jpg?semt=ais_incoming&w=740&q=80");
    }

    else{
  btn="Turn Off"
        btn1.textContent="Turn On"
        img1.setAttribute("src","https://media.istockphoto.com/id/502789173/photo/light-bulb-concept.jpg?s=612x612&w=0&k=20&c=vJfSDuFJf_4UsQcUsdMNUfDkkNU6Bf9cTHF-n4-Zwvs=")
    }
})