const openBtn = document.getElementsByClassName("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");


for (i of openBtn) {
    i.addEventListener("click",()=>{
        modal.classList.add("open");
    });
  }


closeBtn.addEventListener("click",()=>{
    modal.classList.remove("open")
})