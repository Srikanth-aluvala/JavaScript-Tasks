
let h1=document.getElementById("h1")

let start=document.getElementById("start")
let stop=document.getElementById("stop")
let reset=document.getElementById("reset")
let music=document.getElementById("music")

let timeleft=6
is_running=false

start.addEventListener("click",()=>{
    
    if(is_running){
        return
    }
    is_running=true
    
   time=setInterval(()=>{
       h1.textContent=timeleft

    if(timeleft==0){
        clearInterval(time)
        timeleft=6
        music.play()

    }
    timeleft--
    },1000)
    
})

stop.addEventListener("click", ()=>{
    clearInterval(time)
    is_running=false
    music.pause()
    
})

reset.addEventListener("click",()=>{
    h1.textContent=timeleft
    timeleft=6
    is_running=false
})
