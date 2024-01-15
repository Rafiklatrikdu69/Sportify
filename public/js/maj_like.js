// listeners
document.querySelectorAll('.like').forEach(item => {
    item.addEventListener('click', event => {
        updateLike(event.target.id);
    })
})

let actus = document.querySelectorAll('#actualite')




// functions
function updateLike(id) {
    fetch('/public/json-like', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({id: id})
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


// recuperation tab like by id (tabLikesById) avec un fetch
fetch('/public/actu/like')
    .then(response => response.json())
    .then(dataFromServer => {
        if (!dataFromServer) {
          console.log("nul !");
        }

        donnee = dataFromServer;
        actus.forEach(actu => {
            let id = actu.id;
            let like = donnee[id];
            actu.querySelector('.like').innerHTML = like;
            // changer le style du bouton like
            

        })
    })

