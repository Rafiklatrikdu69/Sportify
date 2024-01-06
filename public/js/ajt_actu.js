const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModalActu");
let ajout = document.querySelectorAll('#ajoutActu');

console.log("Ajout : actualité");

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});

openBtn.addEventListener("click", () => {
    console.log("Button clicked");
    modal.classList.add("open");
});



// pour ajouter un post
function Post(titre, contenu) {
    this.titre = titre;
    this.contenu = contenu;
}


document.addEventListener('DOMContentLoaded', function () {
    const ajoutBtn = document.getElementById("ajoutActu");

    ajoutBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Empêche le comportement par défaut du formulaire (rechargement de la page)

        let titre = document.getElementById('titre').value;
        let contenu = document.getElementById('contenu').value;

        let post = new Post(titre, contenu);
        console.log(post);

   
    });
});
