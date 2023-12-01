let post = document.getElementById('post');
let user = document.getElementById('user');
let pronostique = document.getElementById('pronostique');
let items = document.getElementById('items');
let boutonSuppr = document.querySelectorAll('#supp');

function usere(id) {
    this.id = id;
}

post.addEventListener("click", function () {
    console.log("post");
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
    console.log("user");
});

pronostique.addEventListener("click", function () {
    console.log("pronostique");
});

items.addEventListener("click", function () {
    console.log("items");
});
