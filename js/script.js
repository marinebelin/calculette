var lestouches=document.querySelectorAll(".touche");
var ecran=document.getElementById("ecran");
var egale=document.querySelector(".egal");
var ce=document.querySelector(".reinit");

for(i=0; i<lestouches.length;i++){
    lestouches[i].addEventListener("click",calcul);
    
}

egale.addEventListener("click",somme);
ce.addEventListener("click",reinitialiser);

function calcul(){
    var recup = this.innerHTML;
    ecran.innerHTML+=recup;
  
    
   
}

function somme(){
    var result=eval(ecran.innerText);
    var final = Math.round(result*100)/100;
    ecran.innerHTML=ecran.innerHTML+" = "+final;
    for(i=0; i<lestouches.length;i++){
        lestouches[i].removeEventListener("click",calcul);
    }
      
}

function reinitialiser(){
    ecran.innerHTML="";
    for(i=0; i<lestouches.length;i++){
    lestouches[i].addEventListener("click",calcul);
    
}

    
}
//Math.round(ton_chiffre*100)/100;  arrondir a deux chiffres apres la virgule