let article = document.getElementById('articles')
let donnee = {}; // Déclarer la variable à l'extérieur
let couleurList = document.getElementById('couleur')
let range = document.getElementsByClassName('range')[0]
var prixRange = 140;
let tabPrix = []
let tabCouleur = []
let tabPossede = []
var option = null;
var type = null
function filtre(prix){
  this.prix = prix; 
}
fetch('/public/boutique/product')
.then(response => response.json())
.then(dataFromServer => {
  if (!dataFromServer) {
    console.log("nul !");
  }
  
  donnee = dataFromServer; 
  console.log("donnee", donnee['1']);
  
  let array = donnee['1']
  
  
  tabCouleur = array
  tabPossede = array
  tabPrix = array
  

  let new_array = tabCouleur.filter(
    (element) => tabPrix.includes(element));
    new_array = new_array.filter(
      (element) => tabPossede.includes(element)
      )
      createSection(new_array)
      
   
      range.addEventListener('change',function(){
    
        tabPrix = array
        
        while (article.hasChildNodes()) {
          article.removeChild(article.firstChild);
        }
        
        prixRange = parseInt(this.value)
        console.log(typeof this.value)
        console.log(prixRange)
        tabPrix=  array.filter(filtrerParPrix);
        tabPossede = array.filter(filtrerParPossion)
        let new_array = tabCouleur.filter(
          (element) => tabPrix.includes(element));
          new_array = new_array.filter(
            (element) => tabPossede.includes(element)
            )
            console.log(new_array)
            createSection(new_array) 
            new_array = null
          })
          
          couleurList.addEventListener('change', function() {
            tabCouleur = array
          
            
            if (couleurList.selectedOptions.length > 0) {
              option = couleurList.selectedOptions[0].label;
              if(option==="Aucune"){
                while (article.hasChildNodes()) {
                  article.removeChild(article.firstChild);
                }
                tabPossede = array.filter(filtrerParPossion)
                let new_array = tabCouleur.filter(
                  (element) => tabPrix.includes(element));
                  new_array = new_array.filter(
                    (element) => tabPossede.includes(element)
                    )
                createSection(new_array) 
                
              }else{ 
                console.log('Option sélectionnée :', couleurList.selectedOptions[0].label);
                tabCouleur=  array.filter(filtrerParID);
                tabPossede = array.filter(filtrerParPossion)
                let new_array = tabCouleur.filter(
                  (element) => tabPrix.includes(element));
                  new_array = new_array.filter(
                    (element) => tabPossede.includes(element)
                    )
                    console.log(new_array)
                    
                    while (article.hasChildNodes()) {
                      article.removeChild(article.firstChild);
                    }
                    
                    
                    createSection(new_array) 
                    
                    new_array = null 
                           
                  }
                  
                } else {
                  
                  console.log('Aucune option sélectionnée.');
                }
              });
              
              let dispo = document.querySelectorAll('.dispo')
              for(let i = 0;i<dispo.length;i++){
                dispo[i].addEventListener("click",function(){
                  console.log(dispo[i].value)
                  while (article.hasChildNodes()) {
                    article.removeChild(article.firstChild);
                  }
                  type = dispo[i].value;
                  tabPossede = array.filter(filtrerParPossion)
                  let new_array = tabCouleur.filter(
                    (element) => tabPrix.includes(element));
                    new_array = new_array.filter(
                      (element) => tabPossede.includes(element)
                      )
                      console.log(new_array)
                      createSection(new_array)
                      new_array = null
                      
                    })
                  }          
                  
                  
                  
                  
                  
                  
                })
                .catch(error => {
                  console.error('Erreur lors de la récupération des données:', error);
                });
                var elementsInvalides = 0;
                
                function filtrerParID(obj,prix) {
                  // Si c'est un nombre
                  if (obj.couleur===option) {
                    return true;
                  } else {
                    elementsInvalides++;
                    return false;
                  }
                }
                function filtrerParPrix(obj) {
                  // Si c'est un nombre
                  if (obj.prix<=prixRange) {
                    return true;
                  } else {
                    elementsInvalides++;
                    return false;
                  }
                }
                
                function filtrerParPossion(obj) {
                  // Si c'est un nombre
                  if (obj.type===type || type ==null) {
                    return true;
                  } else {
                    elementsInvalides++;
                    return false;
                  }
                }
                function createSection(arrByID){
                  
                  for(let i = 0;i<arrByID.length;i++){
                    
                    let divCard = document.createElement('div')
                    divCard.setAttribute('class','card')
                    let img = document.createElement('img')
                    img.setAttribute('src','images/img'+arrByID[i].id+'.jpg')
                    let h1 = document.createElement('h1')
                    h1.setAttribute('class','nom')
                    
                    h1.setAttribute('id',arrByID[i].id)
                    h1.textContent =arrByID[i].nom
                    
                    let p1= document.createElement('p')
                    p1.setAttribute('class','price')
                    p1.setAttribute('id',arrByID[i].prix)
                    p1.innerHTML = arrByID[i].prix + " points";
                    let p2 = document.createElement('p')
                    p2.innerHTML = arrByID[i].description
                    let p3 = document.createElement('p')
                    let btn = document.createElement('button')
                    btn.setAttribute('id','achat')
                    btn.innerHTML = "Acheter"
                    p3.appendChild(btn)
                    
                    
                    
                    
                    divCard.appendChild(img)
                    divCard.appendChild(h1)
                    divCard.appendChild(p1)
                    divCard.appendChild(p2)
                    divCard.appendChild(p3)
                    
                    article.appendChild(divCard)
                  }
                  
                  // Definition des const qui vont être utilisées durant tout le code
                  const boutique = document.getElementById("boutique");
                  const actu = document.getElementById('actu');
                  const prono = document.getElementById('prono');
                  const jeu = document.getElementById('jeu');
                  const deconnexion = document.getElementById('deconnexion');
                  
                  let achat = document.querySelectorAll('#achat');
                  
                  // Ajout des event listener pour enlever le "surlignage" de boutique dans le header lorsque une autre categorie est selectionné
                  actu.addEventListener('mouseover', chbgon);
                  actu.addEventListener('mouseout', chbgout);
                  prono.addEventListener('mouseover', chbgon);
                  prono.addEventListener('mouseout', chbgout);
                  jeu.addEventListener('mouseover', chbgon);
                  jeu.addEventListener('mouseout', chbgout);
                  deconnexion.addEventListener('mouseover', chbgon);
                  deconnexion.addEventListener('mouseout', chbgout);
                  
                  function chbgon() { 
                    //Fonction qui restylise boutique dans header lorsque la souris passe sur une autre categorie   
                    boutique.style.backgroundColor = 'black';
                    boutique.style.color = 'white';
                    boutique.style.transitionDelay = "0s";
                  }
                  
                  function chbgout() {    
                    //Fonction qui restylise boutique dans header lorsque la souris quitte une autre categorie
                    boutique.style.transitionDuration = ".5s";
                    boutique.style.backgroundColor = '#40A798';
                    boutique.style.color = 'black';
                    boutique.style.marginLeft = "10%"
                    boutique.style.marginRight = "10%"
                  }
                  
                  
                  
                  //const closeModalBtn = document.getElementById('closeModal');
                  // closeModalBtn.addEventListener('click', function () {
                  //     const modal = document.getElementById('modal');
                  //     modal.classList.remove('open');
                  // });
                  
                  
                  const confirmPurchaseBtn = document.getElementById('confirmPurchase');
                  const closeModalBtn = document.getElementById('closeModal');
                  const modal = document.getElementById('modal');
                  
                  function showConfirmation(itemId, itemPrice, itemName) {
                    document.getElementById('itemToBuy').textContent = itemName + ' à ' + itemPrice + ' points';
                    modal.classList.add('open');
                    
                    confirmPurchaseBtn.addEventListener('click', function confirmHandler() {
                      handleConfirmPurchase(itemId, itemPrice);
                      modal.classList.remove('open');
                      confirmPurchaseBtn.removeEventListener('click', confirmHandler);
                    });
                  }
                  
                  closeModalBtn.addEventListener('click', function() {
                    modal.classList.remove('open');
                  });
                  
                  function handleConfirmPurchase(itemId, itemPrice) {
                    let items = new item(itemId, itemPrice);
                    fetch('/public/json-item', {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json; charset=utf-8"
                      },
                      body: JSON.stringify(items)
                    })
                    .then(function(response){
                      response.text();
                      window.location.reload();
                    }
                    
                    )
                    .then(data => {
                      console.log(data);
                    })
                    .catch(error => {
                      console.error('Error:', error);
                    });
                  }
                  
                  function item(item_id, points) {
                    this.item_id = item_id;
                    this.points = points;
                  }
                  
                  //let achat = document.querySelectorAll('#achat');
                  achat.forEach(function (achatBtn) {
                    achatBtn.addEventListener("click", function (event) {
                      let parentCard = event.target.closest('.card');
                      let itemId = parentCard.querySelector('.nom').id;
                      let itemPrice = parentCard.querySelector('.price').id;
                      let itemName = parentCard.querySelector('.nom').textContent;
                      
                      showConfirmation(itemId, itemPrice, itemName);
                    });
                  });
                  
                  ;
                  
                  
                  
                }
                
                
                
                
                function getClassement(nom){
                  fetch('/public/json-classement', {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json; charset=utf-8"
                    },
                    body: JSON.stringify({nom: nom})
                  })
                  .then(response => response.text())
                  .then(data => {
                    console.log(data);
                    window.location.reload();
                  })
                  .catch(error => {
                    console.error('Error:', error);
                  });
                }
                
                
                
                
                
                // clique sur le bouton de la photo de profil
                // ouvre la fenetre modal
                let buttonpdp = document.getElementById('buttonpdp');
                let modalpdp = document.getElementById('modalpdp');
                let closemodalpdp = document.getElementById('closemodalpdp');
                let submitpdp = document.getElementById('submitpdp');
                
                buttonpdp.addEventListener('click', function () {
                  modalpdp.classList.add('open');
                }
                );
                
                closemodalpdp.addEventListener('click', function () {
                  modalpdp.classList.remove('open');
                }
                );
                
                // clique sur une image de la modal
                // change la photo de profil
                let images = document.querySelectorAll('.imgpdp');
                let pdp;
                let imageSelected;
                
                images.forEach(function(image) {
                  image.addEventListener('click', function() {
                    // Supprimer la classe 'image-selected' de toutes les images
                    images.forEach(function(img) {
                      img.classList.remove('image-selected');
                      img.classList.remove('selected');
                    });
                    
                    // Ajouter les classes 'image-selected' et 'selected' à l'image cliquée
                    // L'ajout de deux classes est nécessaire pour que l'image soit correctement stylisée
                    // Car une même propriété peut être définie dans deux classes différentes
                    // Le problème ici venait de l'opacité qui était définie dans les deux classes
                    // Avec ces deux classes (à première vue inutiles), la classe selected devient plus précis
                    // Et donc l'opacité prise en compte est celle de la classe selected
                    image.classList.add('image-selected');
                    image.classList.add('selected');
                    
                    // Mettre à jour l'image sélectionnée
                    imageSelected = image;
                    pdp = image.src;
                  });
                });
                
                
                
                // clique sur le bouton submit de la modal
                // change la photo de profil dans la base de données
                submitpdp.addEventListener('click', function () {
                  fetch('/public/json-pdp', {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json; charset=utf-8"
                    },
                    body: JSON.stringify({pdp: pdp})
                  })
                  .then(response => response.text())
                  .then(data => {
                    console.log(data);
                    window.location.reload();
                  })
                  .catch(error => {
                    console.error('Error:', error);
                  });
                }
                );
                
                
                
                
