var lestouches=document.querySelectorAll(".touche");
var ecran=document.getElementById("ecran");
var egale=document.querySelector(".egal");


for(i=0; i<lestouches.length;i++){
    lestouches[i].addEventListener("click",calcul);

}

egale.addEventListener("click",somme);


function calcul(){
    var recup = this.innerHTML;
   ecran.innerHTML+=recup;
   
}

function somme(){
    var result=eval(ecran.innerText);
    ecran.innerHTML=ecran.innerHTML+" = "+result;
}