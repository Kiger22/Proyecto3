import { OnSearch } from './actions/OnSearch';
import { createCard } from './src/components/Card/card';
import { createFooter } from './src/components/Footer/footer';
import { createHeader } from './src/components/Header/header';
import { footerLogo, menuFooter, socialLinks } from './src/data/footer';
import { heaterLogo, menuItemsHeaderI, menuItemsHeaderII } from './src/data/header';
import './style.css'

export const appDiv = document.querySelector("#app");
//const serchInput = document.querySelector(".search-input");


createHeader(heaterLogo, menuItemsHeaderI, OnSearch, menuItemsHeaderII);

export const callApi = (keyword) => {
  const accessKey = 'UdGLeHvGPYod1K-LPYP0HevqnNknec_b1g6Ov_5VbF4'
  const API_URL = `https://api.unsplash.com/search/photos?query=${keyword}&client_id=${accessKey}`

  appDiv.innerHTML = "";

  fetch(API_URL)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      res.results.forEach(results => {

        //const card = createCard(appDiv, results.urls.full);
        createCard(appDiv, results.urls.full);
        /* card.querySelector("img").addEventListener("click", () => {
          openModal(image.urls.full);
        }); */

      });
    })
    .catch((error) => {
      alert("Error al obtener los datos de la API");
    })
}

/* callApi("Ciclismo"); */

/* serchInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    callApi(searchInput.value);
  }
}); */

/* searcButton.addEventListener('click', () => {
  callApi(searchInput.value);
}); */

createFooter(footerLogo, menuFooter, socialLinks);







