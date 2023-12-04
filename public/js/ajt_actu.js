const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");

closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});

openBtn.addEventListener("click", () => {
    console.log("Button clicked");
    modal.classList.add("open");
});

