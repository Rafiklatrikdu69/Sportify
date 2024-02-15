const actu = document.getElementById("actu")
const prono = document.getElementById("prono")
const boutique = document.getElementById("boutique")
const jeu = document.getElementById("jeu")
const deconnexion = document.getElementById("deconnexion")
const commeColor  = document.getElementsByTagName("main")[0]
const children = commeColor.querySelectorAll(".actufixed")
let divPP = document.getElementsByClassName('photo');

for(let i = 0; i < divPP.length; i++){
  divPP[i].addEventListener('click',function(){
    console.log(divPP[i].innerHTML)
        document.getElementsByClassName('form')[i].submit()
      // console.log(document.getElementsByClassName('form')[i])
  })
}
for(let i = 1; i <children.length; i++) {
  children[i].style.backgroundColor ="#FFEBD3"
}


// listener
prono.addEventListener('mouseover', chbgon);
prono.addEventListener('mouseout', chbgout);
boutique.addEventListener('mouseover', chbgon);
boutique.addEventListener('mouseout', chbgout);
jeu.addEventListener('mouseover', chbgon);
jeu.addEventListener('mouseout', chbgout);
deconnexion.addEventListener('mouseover', chbgon);
deconnexion.addEventListener('mouseout', chbgout);

function chbgon() { 
  //Fonction qui restylise actu dans header lorsque la souris passe sur une autre categorie   
  actu.style.backgroundColor = 'black';
  actu.style.color = 'white';
  actu.style.transitionDelay = "0s";
}

function chbgout() {    
  //Fonction qui restylise actu dans header lorsque la souris quitte une autre categorie
  actu.style.transitionDuration = ".5s";
  actu.style.backgroundColor = '#40A798';
  actu.style.color = 'black';
  actu.style.marginLeft = "10%"
  actu.style.marginRight = "10%"
}

const $icon = document.querySelector('.icon');
const $arrow = document.querySelector('.arrow');

$icon.onclick = () => {
  $arrow.animate([
    {left: '0'},
    {left: '10px'},
    {left: '0'}
  ],{
    duration: 700,
    iterations: Infinity
  });
}


// function findPdpForPost($tabPdp, $postId) {
//   foreach ($tabPdp as $pdp) {
//       if ($pdp['POST_ID'] == $postId) {
//           return $pdp['PDP_SRC'];
//       }
//   }
//   // Si aucune correspondance trouvée, retournez une valeur par défaut ou gérez l'absence de PDP
//   return "../../public/images/logo2.png";
// }

// sections = document.querySelectorAll(section);
// secttions.foreach()