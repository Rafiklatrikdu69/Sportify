function Pronostique(pronostiqueur_id, match_prono, cote_prono, date_prono, mise, status) {
    this.pronostiqueur_id = pronostiqueur_id;
    this.match_prono = match_prono;
    this.cote_prono = cote_prono;
    this.date_prono = date_prono;
    this.mise = mise;
    this.status = status;
}

document.addEventListener('DOMContentLoaded', function () {
    const closeBtn = document.getElementById("closeModal");
    const modal = document.getElementById("modal");
    const matchJoue = document.getElementById("match_joue");
    const coteJoue = document.getElementById("cote_joue");
    const miseInput = document.getElementById("mise");
    const gainOutput = document.getElementById("gain");
    const pariForm = document.getElementById("pariForm");

    closeBtn.addEventListener("click", () => {
        document.getElementsByClassName('match-deja-jouer')[0].style.visibility = "hidden";
                    
        modal.classList.remove("open");
    });

    function reply_click(clicked_id) {
        var parties = clicked_id.split(/\+/);
        console.log("Button clicked with ID: " + clicked_id);
        matchJoue.innerText = parties[1];
        coteJoue.innerText = parties[0];
        miseInput.value = ""; // Réinitialisez la valeur de mise
        gainOutput.textContent = ""; // Réinitialisez le texte du gain
        modal.classList.add("open");
    }

    miseInput.addEventListener('input', function () {
        var mise = parseFloat(miseInput.value);
        var cote = parseFloat(coteJoue.innerText);
        if (!isNaN(mise) && !isNaN(cote)) {
            var gainPotentiel = mise * cote;
            // Arrondir a l'entier le plus proche
            gainPotentiel = Math.ceil(gainPotentiel);
            gainOutput.textContent = `Votre gain potentiel est de : ${gainPotentiel}`;
        } else {
            gainOutput.textContent = 'Veuillez entrer des valeurs valides pour la mise.';
        }
    });


    let pronostique1 = null;

    pariForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var mise = parseFloat(miseInput.value);
        pronostique1 = new Pronostique(12, matchJoue.innerText, coteJoue.innerText, '2023-11-24', mise, 0);
    
        let resultatElement = document.getElementById("resultat");
    
        fetch("/public/json-prono", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json; charset=utf-8"
            },
            "body": JSON.stringify(pronostique1)
        })
        .then(function(response) {
            var text = response.text();
            window.location.reload();
            return text;
        })
            .then(function (data) {
                console.log(data);
                resultatElement.textContent="";
                    document.getElementsByClassName('match-deja-jouer')[0].style.visibility = "hidden";
                
                if(data==true){
                    resultatElement.textContent = "Vous avez deja pronostiquer !";
                    document.getElementsByClassName('match-deja-jouer')[0].style.visibility = "visible";
                    location.reload();
                }
               
                if(data==="point"){
                    resultatElement.textContent = "Vous n'avez pas assez de points !";
                    document.getElementsByClassName('match-deja-jouer')[0].style.visibility = "visible";
                    location.reload();
                }
              

              
               
            })
            .catch(function (error) {
                console.error('Erreur lors de la requête :', error);
            });
    });
   
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            for (let index = 0; index < data.length; index++) {
                const section = document.createElement('section');
                section.setAttribute("class", "prono_ev");
                section.setAttribute("id", "p" + data[index].id);

                const div1 = document.createElement('div');
                div1.setAttribute("class", "div1");
                const img = document.createElement('img');
                console.log();
                img.setAttribute("src", `../../public/images/${data[index].cat_sport}.svg`);
                img.setAttribute("id", "image_sport");
                div1.appendChild(img);
                

                const div2 = document.createElement('div');
                div2.setAttribute("class", "div2");

                const p1 = document.createElement("p");
                p1.setAttribute("class", "TESTING");
                p1.innerHTML = data[index].equipe_domicile + " - " + data[index].equipe_exterieur;
                const p2 = document.createElement("p");
                p2.setAttribute("class", "TESTING");
                p2.innerHTML = data[index].nom_evenement;
                const p3 = document.createElement("p");
                p3.setAttribute("class", "TESTING");
                p3.innerHTML = data[index].cat_sport;
                const p4 = document.createElement("p");
                p4.setAttribute("class", "TESTING");
                p4.innerHTML = data[index].date_evenement;
                div2.appendChild(p4);
                div2.appendChild(p3);
                div2.appendChild(p2);
                div2.appendChild(p1);
               
                const div3 = document.createElement('div');
                div3.setAttribute("class", "div3");
                const bouton1 = document.createElement('button');
                bouton1.setAttribute("id", data[index].cote_domicile + "+" + data[index].id);
                bouton1.setAttribute("class", "openModal");
                bouton1.addEventListener("click", function () {
                    reply_click(this.id);
                });
                bouton1.innerHTML = data[index].cote_domicile;
                div3.appendChild(bouton1);
               

                const div4 = document.createElement('div');
                div4.setAttribute("class", "div4");
                const bouton2 = document.createElement('button');
                bouton2.setAttribute("id", data[index].cote_exterieur + "+" + data[index].id);
                bouton2.setAttribute("class", "openModal");
                bouton2.addEventListener("click", function () {
                    reply_click(this.id);
                });
                bouton2.innerHTML = data[index].cote_exterieur;
                div4.appendChild(bouton2);
                section.appendChild(div4);
                section.appendChild(div3);
                section.appendChild(div2);
                section.appendChild(div1);

                document.querySelector('main').appendChild(section);
            }
        })
        .catch(error => console.error('Erreur lors du chargement des données:', error));

});


