// zadanie 1
var a=10; 
var b=20;

let add=a+b; 
let sub=b-a; 
let mul=a*b;
let div=b/a;
let mod=a%b;
console.log("Zadanie #1:")
console.log(add); 
console.log(sub);
console.log(mul);
console.log(div);
console.log(mod);

document.getElementById("addR").
innerHTML="\n Wynikiem + jest: " + add;
document.getElementById("subR").
innerHTML="Wynikiem - jest: " + sub;
document.getElementById("mulR").
innerHTML="Wynikiem * jest: " + mul;
document.getElementById("divR").
innerHTML="Wynikiem / jest: " + div;
document.getElementById("modR").
innerHTML="Wynikiem % jest: " + mod;


// zadanie 2
var at=2
var bt=3
var ct=4
var p=(at+bt+ct)/2
var pole=Math.sqrt(p*(p-at)*(p-bt)*(p-ct));

console.log("Zadanie 2: Pole trójkąta: " + pole);
document.getElementById("pole1").
innerHTML="Zadanie 2: Pole trójkąta: " + pole;



// Zadanie 3
const num = Math.ceil(Math.random()*10); 
console.log("Zadanie 3: " + num);
const gnum = prompt("Zadanie 3: "); 
if(num==gnum){
    console.log("Zadanie 3: dobra robota"); 
} else{
    console.log("Zadanie 3: Nie udało się")
}
document.getElementById("los1").innerHTML=
"Zadanie 3: Twoja liczba: " + gnum + 
", liczba losowa: " + num;



// Zadanie 4
const licz1=parseFloat(prompt("Zadanie 4: Podaj 1-ą liczbę: "));
const licz2=parseFloat(prompt("Zadanie 4: Podaj 2-ą liczbę: "));
const licz3=parseFloat(prompt("Zadanie 4: Podaj 3-ą liczbę: "));
var n = 0;
if(licz1 >= licz2 && licz1 >= licz3){
    console.log("Zadanie 4: " + licz + " jest najwienkszą liczbą");
    n = licz1;
} else if(licz2 >= licz1 && licz2 >= licz3){
    console.log("Zadanie 4: " + licz2 + " jest najwienkszą liczbą");
    n = licz2;
} else{
    console.log("Zadanie 4: " + licz3 + " jest najwienkszą liczbą");
    n = licz3;
}
document.getElementById("najw").innerHTML=
"Zadanie 4: " + n + " jest najwienkszą liczbą";



// Zadanie 5
function gcd(x, y) {
    if (y === 0) {
      return x;
    } else {
      return gcd(y, x % y);
    }
}
console.log("Zadanie 5: nwd (182, 254)" + gcd(182, 254)); 
console.log("Zadanie 5: nwd (174, 186)" + gcd(165, 315)); 

document.getElementById("nwd").innerHTML= 
"Zadanie 5: nwd (182, 254) wynosi "+gcd(182, 254);



// Zadanie 6
const student1 = {
    Imie: "Yehor",
    Nazwisko: "Vzoniuk",
    Wiek: 18,
};
const student2 = {
    Imie: "Artur",
    Nazwisko: "Avramenko",
    Wiek: 18,
};
const student3 = {
    Imie: "Igor",
    Nazwisko: "Vozniuk",
    Wiek: 18,
};
console.log("Zadanie 6: Imie studenta 1: " + student1.firstName);
console.log("Zadanie 6: Wiek studenta 1: " + student1.age);
console.log("Zadanie 6: Nazwisko studenta 1:" + student1.lastName);



// Zadanie 7
function stworzStudenta() {
    const Imie = document.getElementById("name").value;
    const Wiek = document.getElementById("age").value;
    const Nazwisko = document.getElementById("lastName").value;

const student = {
    Imie: Imie,
    Nazwisko: Nazwisko,
    Wiek: Wiek,
};

    document.getElementById("Imie_studenta").innerHTML = "Imię: " + student.Imie;
    document.getElementById("Wiek_studenta").innerHTML = "Wiek: " + student.Wiek;
    document.getElementById("Nazwisko_studenta").innerHTML = "Nazwisko: " + student.Nazwisko;
}



// Zadanie 8
function showTime(){
    return (new Date()).toLocaleTimeString();
};
document.getElementById('czas').
innerHTML = showTime();

setInterval(function() {
    document.getElementById('czas').
    innerHTML = showTime();}, 1000);