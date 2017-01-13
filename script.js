// ezt azert csinaltam hogy legyen egy katt szamlalo valtozom
var katt = 0

function kattszamlalo () {
   katt = katt + 1
   console.log(katt + " alkalommal kattintottad meg!")
   var cim = document.querySelector("h1")
   cim.textContent = katt + " alkalommal kattintottad meg!"
}

var gonb = document.querySelector("button")
console.log(gonb)
gonb.addEventListener("click", kattszamlalo)

// ezt tegyuk be a kattszamlaloba!




// csinalja akkor amikor foleviszem az egeret!
// akkor szamoljon, ha cimsor fole viszem az egeret!
// azt irjuk ki, hogy "x alkalommal vitted fole az egeret!"
// csinalja duplaklikkre, rendesen szamolva a kattintas szamot!
