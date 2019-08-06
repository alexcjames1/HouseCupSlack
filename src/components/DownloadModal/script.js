document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector("nav").classList.toggle("hidden");
});

document.querySelector(".show-modal").addEventListener("click", () => {
    document.querySelector(".modal").classList.remove("hidden");
});

document.querySelector(".modal-close").addEventListener("click", () => {
    document.querySelector(".modal").classList.add("hidden");
});
