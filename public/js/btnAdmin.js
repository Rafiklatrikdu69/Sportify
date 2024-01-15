fetch('/public/admin')
.then(response => response.text())
.then(data => {
    if(!data){
        console.log("nul !")
    }
   donnee = JSON.parse(data).cle[0];
   console.log("donne "+donnee)
   if(donnee==1){ 
   let divCoin = document.getElementsByClassName('coin')[0];
   let divAdmin = document.createElement('button');
   divAdmin.innerHTML = "Admin";
   divCoin.appendChild(divAdmin)
   divAdmin.setAttribute('id','coin')
   divAdmin.addEventListener('click',function(){
    window.location.href='/public/administration';   
   })
}
  
  
});