import { f2 } from "./relacionamento.js"
import { f1 } from "./leves.js"
import { f3 } from "./pesadas.js"

$(document).on("click", "#rel", function(){
    const randomElement = f2[Math.floor(Math.random() * f2.length)];
    $("#frases").text(randomElement)
})

$(document).on("click", "#lev", function(){
    const randomElement = f1[Math.floor(Math.random() * f1.length)];
    $("#frases").text(randomElement)
})

$(document).on("click", "#pes", function(){
    const randomElement = f3[Math.floor(Math.random() * f3.length)];
    $("#frases").text(randomElement)
})
