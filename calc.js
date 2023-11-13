
var ismetles
var kamat_szazalek;
var z_szam;
var eredmeny;
var szamolo;
var megoldas;
var
z_szam = 0;
//


document.getElementById("reset").onclick = function(){
    location.reload();
}



document.getElementById("valaszto_fent").onclick = function(){
    z_szam = document.getElementById("valasz_szazalek").value;
    szamolo = document.getElementById("szazalek").value / document.getElementById("szam").value;
    szamolo = parseFloat(szamolo.toFixed(3));
    eredmeny = document.getElementById("valasz_szazalek").value / (document.getElementById("szazalek").value / document.getElementById("szam").value);
    megoldas = document.getElementById("megoldas");
    megoldas.textContent =document.getElementById("szazalek").value + "/" + document.getElementById("szam").value + "=" + szamolo + " | " + z_szam + "/" + szamolo + "=" + eredmeny;
    document.getElementById("valasz_szam_p").innerHTML = eredmeny;
}

document.getElementById("valaszto_lent").onclick = function(){
    z_szam = document.getElementById("valasz_szam").value;
    szamolo = document.getElementById("szam").value / document.getElementById("szazalek").value;
    szamolo = parseFloat(szamolo.toFixed(3));
    eredmeny = document.getElementById("valasz_szam").value / (document.getElementById("szam").value / document.getElementById("szazalek").value);
    megoldas = document.getElementById("megoldas");
    megoldas.textContent = document.getElementById("szam").value + "/" + document.getElementById("szazalek").value + "=" + szamolo + " | " + z_szam + "/" + szamolo + "=" + eredmeny;
    document.getElementById("valasz_szazalek_p").innerHTML = eredmeny;   
}

document.getElementById("gomb").onclick = function() {
    ismetles = document.getElementById("ismetles").value;
    kamat_szazalek = document.getElementById("kamat").value/100;
    kamat_szazalek = kamat_szazalek+1;
    console.log(kamat_szazalek)
    szamolo = document.getElementById("toke").value*(kamat_szazalek**(ismetles));
    szamolo = parseFloat(szamolo.toFixed(2));
    eredmeny = document.getElementById("toke").value+"*"+kamat_szazalek+"^"+ismetles+"="+szamolo;
    console.log(eredmeny)
    megoldas = document.getElementById("megoldas_kamat");
    megoldas.textContent = eredmeny.toString();
};


t*(k/100+1)^ismetles


