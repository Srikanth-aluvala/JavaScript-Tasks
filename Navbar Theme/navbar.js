let body=document.body
let btn1=document.getElementById("btn1")

let current='light'

btn1.addEventListener("click", ()=>{
    // console.log("cliked");

    if(current=='light')
    {
        current='dark'
        body.style.backgroundColor='black'
        body.style.color='white'
        btn1.textContent='🌟Light'
        btn1.style.background='white'
    }

    else{
        current='light'
        body.style.backgroundColor='white'
        body.style.color='black'

        btn1.textContent='🌙 Dark'
        
    }
    
})