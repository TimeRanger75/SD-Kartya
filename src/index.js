import './style.css';
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";

let input="";
let kartyak=[
    {
      nev: "Maxi Ultra",
      meret: "128"
    },
    {
      nev: "Maxi Ultra S",
      meret: "256"
    },
    {
      nev: "Maxi Ultra X",
      meret: "512"
    },
    {
      nev: "Átlagos SD kártya",
      meret: "128"
    },
    {
      nev: "Átlagos SD kártya 2",
      meret: "256"
    },
    {
      nev: "Átlagos SD kártya 2.1",
      meret: "256"
    },
    {
      nev: "Ólcsó microSD",
      meret: "32"
    },
    {
      nev: "Kevésbé olcsó microSD",
      meret: "64"
    }
  ]
  
for (let i = 0; i < kartyak.length; i++) {
   console.log(kartyak[i]);
}

console.log(kartyak.length);
document.addEventListener("DOMContentLoaded",()=>{
    document.getElementById("input").addEventListener("input",()=>{
        input=document.getElementById("input").value;
        if(input.length>2){
            //console.log(input);
        }
    })
})

