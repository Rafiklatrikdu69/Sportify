let post = document.getElementById('post');
let user = document.getElementById('user');
let pronostique = document.getElementById('pronostique');
let items = document.getElementById('items');
let boutonSuppr = document.querySelectorAll('#supp');
let events = document.getElementById('events');
let ajoutUtils = document.getElementById('ajout-util');
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
events.addEventListener("click",function(){
    reset();
    console.log("pronostique");
    document.getElementById('part-4').style.visibility = "visible"; 
})
items.addEventListener("click", function () {
    console.log("items");
});
