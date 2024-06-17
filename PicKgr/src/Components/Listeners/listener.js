import { callApi } from "../../../main";

const inputSearch = document.querySelector(".search-input");
const searchButton = document.querySelector(".search-button");


inputSearch.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    const keyword = e.target.value.trim();

    if (keyword !== "") {
      callApi(keyword);
    }
    else {
      alert("Debe escribir algo");
    }
  }
});

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const keyword = e.target.value.trim();

  if (keyword !== "") {
    callApi(keyword);
  }
  else {
    alert("Debe escribir algo");
  }
});

