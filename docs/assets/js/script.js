const api = "https://api.jikan.moe/v4";

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

document.querySelector("#header-search-img").addEventListener("click", () => {
  const search = document.querySelector("#header-search-active");
  search.classList.toggle("search-area-active");

  if (search.classList.contains("search-area-active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
});

let timeoutId;

const inputGet = document
  .querySelector("#input-sectionSearch")
  .addEventListener("input", async (e) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(async () => {
      async function searchContent() {
        const userInput = e.target.value.trim();
        if (!userInput) return;

        try {
          const response = await fetch(`${api}/anime?q=${userInput}`);
          const json = await response.json();
          const data = Array.isArray(json.data) ? json.data : [json.data];

          const listMain = document.querySelector(".sectionSearch-content");
          console.log(json.data);
          console.log(userInput);
          console.log(data);

          listMain.innerHTML = "";

          for (let i of data) {
            const genres = i.genres.map((genre) => genre.name).join(", ");
            const newList = `
              <div class="content">
                <a href="${i.url}" target="_blank">
                 <img src="${i.images.jpg.image_url}" alt="photo">
                  <p id="ss-title">${i.title}</p>
                  <p id="ss-genre"><strong>Gênero:</strong> ${genres}</p>
                  <p id="ss-adp"><strong>Adaptação:</strong> ${i.source}</p>
                </a>
              </div>
            `;
            listMain.innerHTML += newList;
          }
        } catch (error) {
          document.querySelector(".sectionSearch-content").innerHTML = `
            <h1 style="font-size: 25px;">Olá! Parece que ocorreu um erro :(</h1>
            <div style="font-size: 20px; display: flex; flex-direction: column;align-items: center;">
              Por favor, <br/> entre em contato comigo <br/> para eu resolver isso! <br/>
              @3u_richard ou @richard_recode | Obrigado(a)! <br/> <br/>
              <img width="300px" src="./assets/img/anime-gif.gif" alt="anime-gif"/>
            </div>
            `;
          console.error("Erro ao buscar anime:", error);
        }
      }

      searchContent();
    }, 500);
  });

async function lastNotices() {
  const response = await fetch(`${api}/reviews/anime`);
  const json = await response.json();
  console.log(json);

  document
    .querySelector("#reviewClickExpanse")
    .addEventListener("click", () => {
      document.querySelector(".newNotice").classList.add("newNoticeClicked");
      document.body.style.overflow = "hidden";

      const newNotice = document.querySelector(".newNotice");
      for (let i of json.data) {
        newNotice.innerHTML += `
        <div class="area-review">
            <div class="leftside">
              <div class="leftside1">
                <img src="${i.entry.images.jpg.large_image_url}"/>
                <h2>${i.entry.title}</h2>
              </div>
              <div class="leftside2">
                <p>Nota do usuário: ${i.score}</p>
                <p>Recomendado pelo usuário? <span> ${i.tags[0]} </span></p>
              </div>
            </div>
          <div class="rightside">
            <h3>Review</h3>
            <p lang="en">${i.review}</p>
          </div>
        </div>
      `;
      }
    });

  const img1 = json.data[0].entry.images.jpg.large_image_url;
  const title1 = json.data[0].entry.title;

  const img2 = json.data[1].entry.images.jpg.large_image_url;
  const title2 = json.data[1].entry.title;

  const img3 = json.data[3].entry.images.jpg.large_image_url;
  const title3 = json.data[3].entry.title;

  const img4 = json.data[4].entry.images.jpg.large_image_url;
  const title4 = json.data[4].entry.title;

  let contentImgs2 = document.querySelector(".contentImgs-notices");
  /* console.log(contentImgs2); */

  const newNotice1 = `
        <div class="newNotice" id="newNotice1">
          <a href="#" id="newClick1">
            <img src='${img1}' alt="mix-animes" />
            <p>${title1}</p>
          </a>
          <p id="p1"></p>
        </div>
      `;

  const newNotice2 = `
        <div class="newNotice" id="newNotice2"> 
          <a href="#" id="newClick2">
            <img src='${img2}' alt="mix-animes" />
            <p>${title2}</p>
          </a>
          <p id="p2"></p>
        </div>
      `;

  const newNotice3 = `
        <div class="newNotice" id="newNotice3">
          <a href="#" id="newClick3">
            <img src='${img3}' alt="mix-animes" />
            <p>${title3}</p>
          </a>
          <p id="p3"></p>
        </div>
      `;

  const newNotice4 = `
        <div class="newNotice" id="newNotice4">
          <a href="#" id="newClick4">
            <img src='${img4}' alt="mix-animes" />
            <p>${title4}</p>
          </a>
          <p id="p4"></p>
        </div>
      `;

  contentImgs2.innerHTML += newNotice1;
  contentImgs2.innerHTML += newNotice2;
  contentImgs2.innerHTML += newNotice3;
  contentImgs2.innerHTML += newNotice4;

  document.querySelector("#newClick1").addEventListener("click", () => {
    const newP = document.querySelector("#p1");
    newP.innerHTML = json.data[0].review;

    document.querySelector("#newNotice1").classList.add("newNoticeClicked");

    document.body.style.overflow = "hidden";

    setTimeout(() => {
      newP.appendChild(document.querySelector("#newNotice1"));
    }, 200);
  });

  document.querySelector("#newClick2").addEventListener("click", () => {
    const newP = document.querySelector("#p2");
    newP.innerHTML = json.data[1].review;

    document.querySelector("#newNotice2").classList.add("newNoticeClicked");

    document.body.style.overflow = "hidden";

    setTimeout(() => {
      newP.appendChild(document.querySelector("#newNotice2"));
    }, 200);
  });

  document.querySelector("#newClick3").addEventListener("click", () => {
    const newP = document.querySelector("#p3");
    newP.innerHTML = json.data[2].review;

    document.querySelector("#newNotice3").classList.add("newNoticeClicked");

    document.body.style.overflow = "hidden";

    setTimeout(() => {
      newP.appendChild(document.querySelector("#newNotice3"));
    }, 200);
  });

  document.querySelector("#newClick4").addEventListener("click", () => {
    const newP = document.querySelector("#p4");
    newP.innerHTML = json.data[3].review;

    document.querySelector("#newNotice4").classList.add("newNoticeClicked");

    document.body.style.overflow = "hidden";

    setTimeout(() => {
      newP.appendChild(document.querySelector("#newNotice4"));
    }, 200);
  });

  document.querySelector("#inicio").addEventListener("click", () => {
    window.location = "";
  });
}

lastNotices();

async function seasons() {
  const response = await fetch(`${api}/seasons/upcoming`);
  const json = await response.json();
  const seasonList = json.data;
  /* console.log(seasonList); */

  /* document.querySelector('#imgMain').src = */

  function addNewContent() {
    let nameSeasons = {
      spring: " Primavera 🌸",
      summer: " Verão 😎",
      fall: " Outono 🍁",
      winter: " Inverno ❄️",
    };

    const titleSeasons = document.querySelector("#seasons-h1");
    const webSiteTitle = document.querySelector("#webSiteTitle");

    switch (seasonList[0].season) {
      case "spring":
        titleSeasons.innerHTML += `${nameSeasons.spring}`;
        webSiteTitle.innerHTML += `${nameSeasons.spring}`;
        break;
      case "summer":
        titleSeasons.innerHTML += `${nameSeasons.summer}`;
        webSiteTitle.innerHTML += `${nameSeasons.summer}`;
        break;
      case "fall":
        titleSeasons.innerHTML += `${nameSeasons.fall}`;
        webSiteTitle.innerHTML += `${nameSeasons.fall}`;
        break;
      case "winter":
        titleSeasons.innerHTML += `${nameSeasons.winter}`;
        webSiteTitle.innerHTML += `${nameSeasons.winter}`;
        break;
      default:
        break;
    }

    const htmlList = document.querySelector(".list");

    for (let i of seasonList) {
      const randomIndex = Math.floor(Math.random() * seasonList.length);
      const randomAnime = seasonList[randomIndex];

      const imgMain = document.querySelector("#imgMain");
      imgMain.src = randomAnime.images.jpg.large_image_url;

      const animeActualMain = document.querySelector("#animeActualMain");
      animeActualMain.innerHTML = `${randomAnime.title}`;

      const newList = document.createElement("div");
      newList.innerHTML += `
      <img class="imgAnimeList" src="${i.images.jpg.large_image_url}" alt="${i.title}"/>
      <h2 id="pSet" title="${i.title}">${i.title}</h2>
      <p id="gen">Gênero: ${i.genres[0].name}</p>
      <p id="adp">Adaptação: ${i.source}</p>
      `;

      htmlList.appendChild(newList);

      let genresContent = "";
      for (let genre of i.genres) {
        genresContent += `<p>${genre.name}</p>`;
      }

      // Adicionar evento de clique ao newList
      newList.addEventListener("click", () => {
        // Verifique se a classe 'cardClicked' já está presente no elemento
        if (!newList.classList.contains("cardClicked")) {
          newList.classList.add("cardClicked");
          document.body.style.overflow = "hidden";

          newList.innerHTML += `
          <div class="moreInfo">
            <div><p><strong>Gêneros:</strong> ${genresContent} </p></div>
            <div><p><strong>Temporada:</strong> ${i.season}</p></div>
            <div><p><strong>Episódios:</strong> ${i.episodes}</p></div>
            <div><p><strong>Titulo_ingles:</strong> ${i.title_english}</p></div>
            <div><p><strong>Titulo_japones:</strong> ${i.title_japanese}</p></div>
            <div><p><strong>Ano:</strong> ${i.year}</p></div>
            <div><p><strong>Rank#</strong> ${i.rank}</p></div>
            <div><p><strong>Popularidade#</strong> ${i.popularity}</p></div>

          </div>
        `;
        }
      });

      htmlList.appendChild(newList);
    }
  }

  addNewContent();
}

seasons();

async function topAnimes() {
  const response = await fetch(`${api}/top/anime`);
  const json = await response.json();
  const data = json.data;

  const htmlList = document.querySelector(".listTopAnime");
  for (let i of data) {
    const newList = document.createElement("div");
    newList.innerHTML += `
      <img class="imgAnimeList" src="${i.images.jpg.large_image_url}" alt="${i.title}"/>
      <h2 id="pSet" title="${i.title}">${i.title}</h2>
      <p id="gen">Gênero: ${i.genres[0].name}</p>
      <p id="adp">Adaptação: ${i.source}</p>
      <p id="rank">Rank #${i.rank}</p>
      `;
    htmlList.appendChild(newList);
  }
}
topAnimes();

async function topMangas() {
  const response = await fetch(`${api}/top/manga`);
  const json = await response.json();
  const data = json.data;

  const htmlList = document.querySelector(".listTopManga");
  for (let i of data) {
    const newList = document.createElement("div");
    newList.innerHTML += `
      <img class="imgAnimeList" src="${i.images.jpg.large_image_url}" alt="${i.title}"/>
      <h2 id="pSet" title="${i.title}">${i.title}</h2>
      <p id="gen">Gênero: ${i.genres[0].name}</p>
      <p id="adp">Adaptação: ${i.source}</p>
      <p id="rank">Rank #${i.rank}</p>
      `;
    htmlList.appendChild(newList);
  }
}
topMangas();

async function topTeste() {
  const response = await fetch(`https://api.jikan.moe/v4/random/anime`);
  const json = await response.json();
}
topTeste();

document.addEventListener("DOMContentLoaded", function () {
  const scrollList = document.querySelector(".list");
  const left = document.querySelector("#left-arrow");
  const right = document.querySelector("#right-arrow");

  right.addEventListener("click", () => {
    scrollList.scrollLeft += 750;
  });
  left.addEventListener("click", () => {
    scrollList.scrollLeft -= 750;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollList = document.querySelector(".listTopAnime");
  const left = document.querySelector("#left-arrow3");
  const right = document.querySelector("#right-arrow3");

  right.addEventListener("click", () => {
    scrollList.scrollLeft += 750;
  });
  left.addEventListener("click", () => {
    scrollList.scrollLeft -= 750;
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollList = document.querySelector(".listTopManga");
  const left = document.querySelector("#left-arrow4");
  const right = document.querySelector("#right-arrow4");

  right.addEventListener("click", () => {
    scrollList.scrollLeft += 750;
  });
  left.addEventListener("click", () => {
    scrollList.scrollLeft -= 750;
  });
});
