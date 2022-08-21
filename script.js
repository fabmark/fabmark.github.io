let ABC = " AÁBCDEÉFGHIÍJKLMNOÓÖŐPQRSTUÚÜŰVWXYZ.,"
var titkosABC = " PALIÁBCDEÉFGHÍJKMNOÓÖŐQRSTUÚÜŰVWXYZ.,"

function fade(){

    let txt = document.getElementById('result')
    txt.classList.add('fade-in')
    setTimeout(function () {
        txt.classList.remove("fade-in")
      }, 30000)
}


function ABCeloallit() {
    var kulcs = document.getElementById("inptxt").value
    var ujABC = ABC
    for (let i = 0; i < kulcs.length; i++) {
        var ch = kulcs.charAt(i)
        ujABC = ujABC.replace(ch + "", "")
    }
    titkosABC = kulcs + ujABC
    //console.log(titkosABC)
    console.log(kulcs)
}


function visszafejt(szoveg) {
    ABCeloallit()
    var titkosSzoveg = ""
    var poz = 0
    var ch
    for (let i = 0; i < szoveg.length; i++) {
        ch = szoveg.charAt(i)
        poz = titkosABC.indexOf(ch)
        titkosSzoveg += ABC.charAt(poz)
    }
    console.log(titkosSzoveg)
    
    document.getElementById("result").innerHTML = titkosSzoveg
    fade()
}
