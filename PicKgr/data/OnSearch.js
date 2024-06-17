import { callApi } from "../main"

const input = document.querySelector(".search-input");
const keyword = input.value.trim();

export const OnSearch = () => {
  callApi(keyword);
}