export const openModal = (src) => {

  const modal = document.createElement("div");
  modal.classList.add("modal");


  const modalImg = document.createElement("img");
  modalImg.src = src;
  modalImg.classList.add("modal-img");


  modal.appendChild(modalImg);


  document.body.appendChild(modal);


  modal.addEventListener('click', () => {
    document.body.removeChild(modal);
  });
}