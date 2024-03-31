const api = "https://api.jikan.moe/v4";

document.querySelector("#header-search").addEventListener("click", () => {
  const headerInput = document.querySelector("#header-input");
  if (window.innerWidth > 768) {
    headerInput.style.maxWidth = "185px";
    headerInput.style.padding = "0 10px 0px 30px";
  }
});

document.querySelector(".menu").addEventListener("click", () => {
  mudarImgMenu();

  setTimeout(() => {
    document.querySelector(".rightside").classList.toggle("visible");
  }, 100);
});

let menuAberto = false;

function mudarImgMenu() {
  const img = document.querySelector("#menu-img");

  if (menuAberto) {
    img.src = "./assets/img/menu.svg";
  } else {
    img.src = "./assets/img/menu-open.svg";
  }

  menuAberto = !menuAberto;
}
