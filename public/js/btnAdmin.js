fetch('/public/admin')
.then(response => response.text())
.then(data => {
    if(!data){
        console.log("nul !")
    }
   donnee = JSON.parse(data).cle[0];
   console.log("donne "+donnee)
   if(donnee==1){ 
   let asidecat = document.getElementById("categorie");
   let divAdmin = document.createElement('button');
   divAdmin.innerHTML = "Admin";
   asidecat.appendChild(divAdmin);
   divAdmin.addEventListener('click',function(){
    window.location.href='/public/administration';   
   })
}
  
  
});