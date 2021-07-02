'use strict'

let total=0;
let continuer;
let depense=0;
let moyenne=0;
const lesDepenses=[];
let encoder=true

const tagBudjet=document.getElementById('budget');
const tagMax=document.getElementById('max');
const tagMoyenne=document.getElementById('moyenne');
const budget=parseFloat(prompt("encodez le budget max")); 
let copieBudjet=budget;
do{
depense=parseFloat(prompt("entrez le montant d'une dépense"));
if(depense<=copieBudjet){
    lesDepenses.push(depense);
    total=total+depense;
    copieBudjet=copieBudjet-depense;
    continuer=prompt("voulez vous encodez un autre montant ? oui/non");

    if(continuer==="oui")
    encoder=true;
    else
    encoder=false;
}else{
    prompt("montant épuisé");
}

}while(encoder && copieBudjet >=depense )

if(lesDepenses.length>0)
moyenne=total/lesDepenses.length;


tagBudjet.innerHTML=`Budjet restant: ${copieBudjet}`;
lesDepenses.sort((valA, valB) => valB - valA);

tagMax.innerHTML=`La plus grandes dépense : ${lesDepenses[0]}`;

tagMoyenne.innerHTML=`La moyenne des dépenses ${moyenne}`;
