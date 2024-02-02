let a = 5;
let b ="5";

if(a = b){
    console.log('true=1');
   } else {
    console.log('false=1');
   }

/* gibt true aus, da a = b gesetzt wird und somit true ist. 
In JS sind strings und Zahlen gleichwertig. 
= bedeutet in JS Zuweisung, 
== bedeutet Vergleich, 
=== bedeutet Vergleich mit Typenprüfung
*/


if(a == b){
    console.log('true=2');
   } else {
    console.log('false=2');
   }


if(a === b){
    console.log('true=3');
   } else {
    console.log('false=3');
   }

// dürfen nicht gemeinsam verwendet werden, da sonst falsche Werte ausgegeben werden können.