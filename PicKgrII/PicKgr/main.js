import { OnSearch } from './actions/OnSearch';
import { createCard } from './src/components/Card/card';
import { createFooter } from './src/components/Footer/footer';
import { createHeader } from './src/components/Header/header';
import { footerLogo, menuFooter, socialLinks } from './src/data/footer';
import { heaterLogo, menuItemsHeaderI, menuItemsHeaderII } from './src/data/header';
import './style.css'

const appDiv = document.querySelector("#app");
const header = document.querySelector("header");

createHeader(document.body, heaterLogo, menuItemsHeaderI, OnSearch, menuItemsHeaderII);

const callApi = (keyword) => {
  const accessKey = 'UdGLeHvGPYod1K-LPYP0HevqnNknec_b1g6Ov_5VbF4'
  const API_URL = `https://api.unsplash.com/search/photos?query=${keyword}&client_id=${accessKey}`

  fetch(API_URL)
    .then((res) => res.json())
    .then((results) => {
      console.log(results);
      results.forEach(results => {
        const card = createCard(appDiv, results.urls.full);

        /*   card.querySelector("img").addEventListener("click", () => {
            openModal(image.urls.full);
          }); */

      });
    })
    .catch((error) => {
      alert("Error al obtener los datos de la API");
    })
}
callApi("gatito")

createFooter(document.body, footerLogo, menuFooter, socialLinks);
