import { callApi } from "../main";

export const OnSearch = () => {
  //alert(" Buscando");
  const searchInput = document.querySelector(".search-input");

  callApi(searchInput.value);

}