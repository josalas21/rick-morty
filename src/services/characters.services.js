import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

export const getCharactersByPage = async (page) => {
  const { data } = await axios.get(`${BASE_URL}/character/?page=${page}`);
  return data;
};
