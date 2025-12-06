let inp=document.getElementById("inp1")

function calculate(value){
    inp.value+=value;
}

function clear1(){
  inp.value=''
}

function evaluation(){
    inp.value=eval(inp.value)
}


