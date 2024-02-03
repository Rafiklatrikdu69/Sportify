let article = document.getElementById('articles')
let donnee = {}; // Déclarer la variable à l'extérieur
let couleurList = document.getElementById('couleur')
let range = document.getElementsByClassName('range')[0]
var prixRange = 500;
let tabPrix = []
let tabCouleur = []
let tabPossede = []
var option = null;
var type = null
var tableau = null;
var repAchat = null;

function filtre(prix) {
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
    tabCouleur = array;
    tabPossede = array;
    tabPrix = array;
    tableau = new Tableau(donnee['1']);
    document.getElementById('reboot').addEventListener("click",function(){
      console.log("reboot")
       while (article.hasChildNodes()) {
         article.removeChild(article.firstChild);
       }
       createSection(array)
    })
    createSection(array)
    let new_array; 
    let selectedTypes = [];

    function appliquerFiltre() {
      tableau.createMemento();

      while (article.hasChildNodes()) {
        article.removeChild(article.firstChild);
      }

      tabPrix = array.filter(filtrerParPrix);
      tabPossede = array.filter(filtrerParPossion);

      if (selectedTypes.length > 0) {
        new_array = tabCouleur.filter(
          (element) => tabPrix.includes(element) && tabPossede.includes(element) && selectedTypes.includes(element.type)
        );
      } else {
        new_array = tabCouleur.filter(
          (element) => tabPrix.includes(element) && tabPossede.includes(element)
        );
      }

      console.log('Nouveau tableau après filtres:', new_array);

      createSection(new_array);
    }


    appliquerFiltre();

    range.addEventListener('change', function() {
      prixRange = parseInt(this.value);
      console.log('Type de la valeur du range:', typeof this.value);
      console.log('Valeur du range:', prixRange);

      appliquerFiltre();
    });

    couleurList.addEventListener('change', function() {
      tableau.createMemento();
      tabCouleur = array;

      if (couleurList.selectedOptions.length > 0) {
        option = couleurList.selectedOptions[0].label;

        if (option === "Aucune") {
          while (article.hasChildNodes()) {
            article.removeChild(article.firstChild);
          }

          tabPossede = array.filter(filtrerParPossion);
          appliquerFiltre();

        } else {
          console.log('Option sélectionnée :', couleurList.selectedOptions[0].label);
          tabCouleur = array.filter(filtrerParID);
          tabPossede = array.filter(filtrerParPossion);
          appliquerFiltre();
        }
      } else {
        console.log('Aucune option sélectionnée.');
      }
    });

    let dispo = document.querySelectorAll('.dispo');

    for (let i = 0; i < dispo.length; i++) {
      dispo[i].addEventListener("change", function() {
        tableau.createMemento();
        console.log(dispo[i].value);

        while (article.hasChildNodes()) {
          article.removeChild(article.firstChild);
        }

        if (dispo[i].checked) {
          if (!selectedTypes.includes(dispo[i].value)) {
            selectedTypes.push(dispo[i].value);
          }
        } else {
          const index = selectedTypes.indexOf(dispo[i].value);
          if (index !== -1) {
            selectedTypes.splice(index, 1);
            console.log("deselection !");
          }
        }

        appliquerFiltre();
      });
    }
  })

  .catch(error => {
    console.error('Erreur lors de la récupération des données:', error);
  });
var elementsInvalides = 0;

function createSection(arrByID){
    
  for(let i = 0;i<arrByID.length;i++){
         //console.log(arrByID[i]);
      let divCard = document.createElement('div')
      divCard.setAttribute('class','card')
      let img = document.createElement('img')
      img.setAttribute('src','images/'+arrByID[i].type+arrByID[i].id+'.png')
      let h1 = document.createElement('h1')
      h1.setAttribute('class','nom')
     
      h1.setAttribute('id',arrByID[i].id)
      h1.textContent =arrByID[i].nom
     
      let p1= document.createElement('p')
      p1.setAttribute('class','price')
      p1.setAttribute('id',arrByID[i].prix)
      p1.innerHTML = arrByID[i].prix + " points";
      let p2 = document.createElement('p')
      p2.innerHTML = arrByID[i].type + " " + arrByID[i].description
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

  const confirmPurchaseBtn = document.getElementById('confirmPurchase');
  const closeModalBtn = document.getElementById('closeModal');
  const modal = document.getElementById('modal');

  function showConfirmation(itemId, itemPrice, itemName) {
    var item_id = itemId;
    var item_price = itemPrice;
    var item_name = itemName;
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

  modalAchatReussi = document.getElementById('modalachatreussi');
  closeModalAchatReussiBtn = document.getElementById('closemodalachatreussi');
  modalPointInsuffisant = document.getElementById('modalpointinsuffisant');
  closeModalPointInsuffisantBtn = document.getElementById('closemodalpointinsuffisant');

  function handleConfirmPurchase(itemId, itemPrice) {
    let items = new item(itemId, itemPrice);
    fetch('/public/json-item', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(items)
    })
    .then(response => response.json())
    .then(dataFromServer => {
        if (dataFromServer.hasOwnProperty('item_id')) {
            console.log('Achat réussi. Item ID:', dataFromServer.item_id);
            //alert("Achat réussi");
            // ouverture modal achat reussi
            modalAchatReussi.classList.add('open');
            closeModalAchatReussiBtn.addEventListener('click', function() {
              modalAchatReussi.classList.remove('open');
              // Recharge la page après un achat réussi
              window.location.reload();
            });
        } else if (dataFromServer.hasOwnProperty('error')) {
            console.log('Erreur lors de l\'achat:', dataFromServer.error);
            if(dataFromServer.error == "points insuffisants"){
              //alert("Vous n'avez pas assez de points pour acheter cet item");
              // ouverture modal points insuffisants
              modalPointInsuffisant.classList.add('open');
              closeModalPointInsuffisantBtn.addEventListener('click', function() {
                modalPointInsuffisant.classList.remove('open');
                // Recharge la page après un achat réussi
                window.location.reload();
              });
            }else if(dataFromServer.error == "item deja possede"){
              alert("Vous possedez deja cet item");
            }
        } else {
            console.log('Réponse inattendue du serveur:', dataFromServer);
        }
    })
    .catch(error => {
        console.error('Erreur lors de la requête:', error);
    });
}


  function item(item_id, points) {
    this.item_id = item_id;
    this.points = points;
  }

  achat.forEach(function(achatBtn) {
    achatBtn.addEventListener("click", function(event) {
      let parentCard = event.target.closest('.card');
      let itemId = parentCard.querySelector('.nom').id;
      let itemPrice = parentCard.querySelector('.price').id;
      let itemName = parentCard.querySelector('.nom').textContent;

      showConfirmation(itemId, itemPrice, itemName);
      document.getElementById('itemToBuy').textContent = itemName + ' à ' + itemPrice + ' points';
      document.getElementById('itemToBuy2').textContent = itemName + ' à ' + itemPrice + ' points';
    });
  });
  }
function filtrerParID(obj, prix) {

  if (obj.couleur === option) {
    return true;
  } else {
    elementsInvalides++;
    return false;
  }
}

function filtrerParPrix(obj) {
  // Si c'est un nombre
  if (obj.prix <= prixRange) {
    return true;
  } else {
    elementsInvalides++;
    return false;
  }
}

function filtrerParPossion(obj) {

  if (obj.type === type || type == null) {
    return true;
  } else {
    elementsInvalides++;
    return false;
  }
}


  
class Tableau {
  constructor(data) {
    this.data = data;
    this.mementos = [];
  }

  createMemento() {
    this.mementos.push(new TableauMemento(this.data));
  }

  setMemento(memento) {
    this.data = memento.getState();
  }

}

function undoLastFilter() {
  if (tableau.mementos.length > 0) {
    const lastMemento = tableau.mementos.pop();
    tableau.setMemento(lastMemento);
    createSection(lastMemento);
  }
}



class TableauMemento {
  constructor(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }
}



