import { API_KEY, BASE_URL, IMG_URL, language } from "./api.js";

movieButton.addEventListener("click", onClick);

function onClick() {
  movieButton.disabled = true;

  const movieId = Math.floor(Math.random() * 500);
  fetch(`${BASE_URL}/${movieId}?api_key=${API_KEY}&${language}`)
    .then((response) => response.json())
    .then((data) => {
      renderData(data);
      movieButton.disabled = false;
    })
    .catch(() => {
      onClick();
    });
}

function renderData({ poster_path, title, overview }) {
  if (!poster_path || !title || !overview) onClick();

  hero.classList.add("show");
  heroImg.src = IMG_URL + poster_path;
  heroTitle.innerText = title;
  heroOverview.innerText = overview;
}
