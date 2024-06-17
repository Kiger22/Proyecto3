import("./gallery.css");

export const craeateGallery = (node) => {
  const galleryContainer = document.querySelector(node);
  galleryContainer.classList.add("gallery-container")

  const gallery = document.createElement("div");
  gallery.classList.add("gallery");

  galleryContainer.appendChild(gallery);
}