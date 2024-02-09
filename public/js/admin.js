function Pronostique(pronostiqueur_id, match_prono, cote_prono, date_prono, mise, status) {
    this.pronostiqueur_id = pronostiqueur_id;
    this.match_prono = match_prono;
    this.cote_prono = cote_prono;
    this.date_prono = date_prono;
    this.mise = mise;
    this.status = status;
}

let post = document.getElementById('post');
let user = document.getElementById('user');
let pronostique = document.getElementById('pronostique');
let equipe = document.getElementById('equipe');
let boutonSuppr = document.querySelectorAll('#supp');
let events = document.getElementById('events');
let ajoutUtils = document.getElementById('ajout-util');
let terminerMatch = document.querySelectorAll('.myBtn');
let choixCote = document.querySelectorAll('#btn-cote');
let cat = document.getElementById('cat')
function usere(id) {
    this.id = id;
}

function reset(){
    var elements = document.querySelectorAll('.part-middle');
    var elementsAjout = document.querySelectorAll('#ajout');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.visibility = 'hidden';
        
    }
    
}
reset();
document.getElementById('part-1').style.visibility = "visible"; 

post.addEventListener("click", function () {
    console.log("post");
    reset();
    document.getElementById('part-2').style.visibility = "visible";    
});

boutonSuppr.forEach(function(boutonSuppr, i) {
    boutonSuppr.addEventListener("click", function () {
        console.log("supprimer");
        let t = new usere(document.getElementsByClassName('id')[i].id);
        fetch('/public/json', {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json; charset=utf-8"
            },
            "body": JSON.stringify(t)
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données JSON:', error);
        });
    });
    i++;
});

user.addEventListener("click", function () {
    reset();
    document.getElementById('part-1').style.visibility = "visible"; 
});
ajoutUtils.addEventListener("click",function(){
    document.getElementById('ajout').style.visibility = "visible";    
    
})

pronostique.addEventListener("click", function () {
    reset();
    console.log("pronostique");
    document.getElementById('part-3').style.visibility = "visible";
    
    
});

// for(let i = 0;i<terminerMatch.length;i++){
//     terminerMatch[i].addEventListener('click',function(){

//         reset();


//     })
// }

events.addEventListener("click",function(){
    reset();
    console.log("evenement");
    document.getElementById('part-4').style.visibility = "visible"; 
})
equipe.addEventListener("click", function () {
    reset();
    console.log("equipe");
    document.getElementById('part-5').style.visibility = "visible"; 
});
cat.addEventListener('click',function(){
    reset();
    console.log("cat");
    document.getElementById('part-6').style.visibility = "visible"; 
})
var modal = document.querySelectorAll("#myModal");
let contentModal = document.querySelectorAll('.modal-content');
var buttons = document.querySelectorAll(".modal-content");


// Get the button that opens the modal
var btn = document.querySelectorAll(".myBtn");

// Get the <span> element that closes the modal
var span = document.querySelectorAll("#close");

// When the user clicks the button, open the modal 
function victoire(match_id,cote){
    this.match_id = match_id;
    this.cote = cote;
}
var tmp = 0;

for(let j = 0 ;j<btn.length;j++){
    btn[j].onclick = function() {
        tmp = terminerMatch[j].id;
        console.log(terminerMatch[j].id);
        modal[j].style.display = "block";
        
        
    }
    
}

for(let i = 0;i<buttons.length;i++){
    buttons[i].onclick= function(){
        vic = new victoire(tmp,buttons[i].className)
        fetch("/public/json-prono-victoire", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json; charset=utf-8"
            },
            "body": JSON.stringify(vic)
        })
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            console.log(data);
        }
        );
        console.log(buttons[i].className);
        
        location.reload();
    }
}


// When the user clicks on <span> (x), close the modal
for(let i = 0 ;i<span.length;i++){
    span[i].onclick = function() {
        modal[i].style.display = "none";
    }
}



// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }