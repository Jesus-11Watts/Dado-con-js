const boton = document.querySelector(".btn-dado");

boton.addEventListener("click",()=>{
    location.reload()
})

let ramdom = Math.round(Math.random()*6);
console.log(ramdom)

if (ramdom === 1){
    document.getElementById("main-padre").classList.remove("padre")
    document.getElementById("padre").classList.add("padre")
    document.getElementById("uno-1").classList.add("uno-1")
}else if (ramdom === 2){
    document.getElementById("main-padre").classList.remove("padre")
    document.getElementById("padre-2").classList.add("padre")
    document.getElementById("uno-2").classList.add("uno-2")
    document.getElementById("dos-2").classList.add("dos-2")
}else if (ramdom === 3){
    document.getElementById("main-padre").classList.remove("padre")
    document.getElementById("padre-3").classList.add("padre")
    document.getElementById("uno-3").classList.add("uno-3")
    document.getElementById("dos-3").classList.add("dos-3")
    document.getElementById("tres-3").classList.add("tres-3")
}else if (ramdom === 4){
    document.getElementById("main-padre").classList.remove("padre")
    document.getElementById("padre-4").classList.add("padre")
    document.getElementById("uno-4").classList.add("uno-4")
    document.getElementById("dos-4").classList.add("dos-4")
    document.getElementById("tres-4").classList.add("tres-4")
    document.getElementById("cuatro-4").classList.add("cuatro-4")
}else if (ramdom === 5){
    document.getElementById("main-padre").classList.remove("padre")
    document.getElementById("padre-5").classList.add("padre")
    document.getElementById("uno-5").classList.add("uno-5")
    document.getElementById("dos-5").classList.add("dos-5")
    document.getElementById("tres-5").classList.add("tres-5")
    document.getElementById("cuatro-5").classList.add("cuatro-5")
    document.getElementById("cinco-5").classList.add("cinco-5")
}else if (ramdom === 6){
    document.getElementById("main-padre").classList.remove("padre")
    document.getElementById("padre-6").classList.add("padre")
    document.getElementById("uno-6").classList.add("uno-6")
    document.getElementById("dos-6").classList.add("dos-6")
    document.getElementById("tres-6").classList.add("tres-6")
    document.getElementById("cuatro-6").classList.add("cuatro-6")
    document.getElementById("cinco-6").classList.add("cinco-6")
    document.getElementById("seis-6").classList.add("seis-6")
}
else{
    location.reload()
}