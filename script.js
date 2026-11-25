let inp = document.querySelector("input")
let span = document.querySelector("span")

inp.addEventListener("input" , function (){
    console.log(inp.value.length);
    let count = 20 - inp.value.length
    span.textContent = inp.value.length
    
    if(count < 0){
        span.textContent = count
        span.style.color = "red"
    }
    else{
        span.textContent = count
        span.style.color = "white"


    }

})




