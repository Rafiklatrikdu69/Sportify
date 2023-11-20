let nom;
let prenom;
do{
    nom = prompt("Quel est votre nom");
    prenom = prompt("Quel est votre prénom");
} while(nom=="" || prenom=="");
console.log("Bonjour "+nom + " " + prenom);
alert("Bonjour "+nom + " " + prenom);
document.write("Bonjour "+nom + " " + prenom + "T'es le plus bo de tout les rebeu !");