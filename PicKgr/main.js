import { OnSearch } from './data/OnSearch';
import { openModal } from './data/OpenModal';
import { createButton } from './src/Components/Button/button'
import { createCard } from './src/Components/Card/card';
import { createFooter } from './src/Components/Footer/footer';
import { craeateGallery } from './src/Components/Gallery/gallery';
import { createHeader } from './src/Components/Header/header';
import { createSearchInput } from './src/Components/Search/search';
import { footerLogo, menuItems, socialLinks } from './src/data/footer';
import { heaterLogo, menuItemsHeaderI, menuItemsHeaderII } from './src/data/header';
import './style.css'

const main = document.querySelector("main");
export const appDiv = document.querySelector("#app");

createHeader(main, heaterLogo, menuItemsHeaderI, OnSearch, menuItemsHeaderII);
createFooter(main, footerLogo, menuItems, socialLinks);
craeateGallery(appDiv);

export const callApi = (keyword) => {
  const accessKey = 'UdGLeHvGPYod1K-LPYP0HevqnNknec_b1g6Ov_5VbF4'
  const API_URL = `https://api.unsplash.com/search/photos?query=${keyword}&client_id=${accessKey}`

  fetch(API_URL)
    .then((res) => res.json())
    .then((image) => {
      image.forEach(image => {
        const card = createCard(image.urls.small, image.alt_description, image.description || 'Sin descripción');

        card.querySelector("img").addEventListener("click", () => {
          openModal(image.urls.full);
        });

        appDiv.appendChild(card);
      });
    })
    .catch((error) => {
      alert("Error al obtener los datos de la API");
    })
}










