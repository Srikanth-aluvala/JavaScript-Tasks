let inp2=document.getElementById("inp2")

console.log(inp2);

let btn1=document.getElementById("btn1")

btn1.addEventListener("click",()=>{
    // console.log(inp2.type);

    if(inp2.type=='password'){
     
        inp2.type='text'
        btn1.textContent='Hide'
        btn1.style.backgroundColor='red'
        btn1.style.color='white'
    }
    else{
        inp2.type='password'
        btn1.textContent='Show'
        btn1.style.backgroundColor='blue'
    }
    
})