/* import { appDiv } from "../main"
import { createCard } from "../src/components/Card/card"

export const OnSearch = (keyword) => {

  const accessKey = 'UdGLeHvGPYod1K-LPYP0HevqnNknec_b1g6Ov_5VbF4'
  const API_URL = `https://api.unsplash.com/search/photos?query=${keyword}&client_id=${accessKey}`

  fetch(API_URL)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      res.results.forEach(results => {
        const card = createCard(appDiv, results.urls.full);

          card.querySelector("img").addEventListener("click", () => {
            openModal(image.urls.full);
          });

      });
    })
    .catch((error) => {
      alert("Error al obtener los datos de la API");
    })

} */