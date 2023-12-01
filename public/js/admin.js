let post = document.getElementById('post');
let user = document.getElementById('user');
let pronostique = document.getElementById('pronostique');
let items = document.getElementById('items');
let boutonSuppr = document.getElementById('supp');
post.addEventListener("click", function (){
    console.log("post");
});
boutonSuppr.addEventListener("click",function(){
    console.log("supprimer");
    fetch("../../app/Models/UtilisateurDAO.php", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json; charset=utf-8"
        },
        "body": JSON.stringify(document.getElementsByClassName("id").value)
    })
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            console.log(data);
           
        })
        .catch(function (error) {
            console.error('Erreur lors de la requête :', error);
        });
});

user.addEventListener("click", function (){
    console.log("user");
})
pronostique.addEventListener("click", function (){
    console.log("pronostique");
})

items.addEventListener("click", function (){
    console.log("items");
})



