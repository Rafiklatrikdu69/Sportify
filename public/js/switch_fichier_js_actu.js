const fleche = document.getElementById("arrow"); 

fetch('/public/actu/session-actu')
.then(response => response.text())
.then(data => {
    if(!data){
        console.log("nul !")
    }
   donnee = JSON.parse(data);
   console.log("donne "+donnee[1])
   let currentPost = donnee[1];
   if(currentPost&& currentPost!=0){
        document.getElementById('fichier').setAttribute('src',"../../public/js/ajt_com.js")
        document.getElementById('openModalActu').innerHTML = "Ajouter un commentaire";
        document.getElementById('tichtich').style.visibility = 'visible';
        fleche.style.visibility = "visible"; 
   }
   else{
    document.getElementById('fichier').setAttribute('src',"../../public/js/ajt_actu.js")
    document.getElementById('openModalActu').innerHTML = "Ajouter une actualité";
    document.getElementById('tichtich').style.visibility = 'hidden';
    fleche.style.visibility = "hidden";  
   }
  
});

