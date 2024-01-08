// listeners
document.querySelectorAll('.like').forEach(item => {
    item.addEventListener('click', event => {
        updateLike(event.target.id);
    })
})




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