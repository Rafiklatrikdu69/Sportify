const openBtn = document.getElementsByClassName("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");


window.addEventListener('popstate', function(){
    console.log("User clicked the browser buttons popstate");
});