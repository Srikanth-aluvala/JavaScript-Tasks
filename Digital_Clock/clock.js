let h1=document.getElementById("h1")
let h2=document.getElementById("h2")
let start=document.getElementById("Start")
let stop=document.getElementById("Stop")



function updateclock(){

    let date=new Date()

    let hrs=date.getHours()
    let min=date.getMinutes()
    let sec=date.getSeconds()


    hrs=hrs<10?"0"+hrs:hrs
    min=min<10?"0"+min:min
    sec=sec<10?"0"+sec:sec

     h1.innerHTML=`${hrs}: ${min}:${sec}`
     h2.innerHTML=date.toDateString()
    

}
updateclock()

// setInterval(updateclock,1000);


let timer=null
 
// start button

start.addEventListener("click",()=>{
  if(timer==null){
    updateclock()
    timer=setInterval(updateclock, 1000)
  }
})

// stop

stop.addEventListener("click",()=>{
    clearInterval(timer)
    timer=null
})

