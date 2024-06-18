import("./card.css");

export const createCard = (node, imgSrc, title, description) => {
  const card = document.createElement("div");
  card.className = "card";
  app.appendChild(card);

  const img = document.createElement("img");
  img.src = imgSrc;
  card.appendChild(img);

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";
  card.appendChild(cardBody);

  if (title) {
    const cardTitle = document.createElement("h2");
    cardTitle.className = "card-title";
    cardTitle.innerText = title;
    cardBody.appendChild(cardTitle);
  }

  if (description) {
    const cardText = document.createElement("p");
    cardText.className = "card-text";
    cardText.innerText = description;
    cardBody.appendChild(cardText);
  }

};