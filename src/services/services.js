import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

export const getCharactersByPage = async (page) => {
  const { data } = await axios.get(`${BASE_URL}/character/?page=${page}`);
  return data;
};

export const getLocationsByPage = async (page) => {
  const { data } = await axios.get(`${BASE_URL}/location/?page=${page}`);
  return data;
};

export const getEpisodesByPage = async (page) => {
  const { data } = await axios.get(`${BASE_URL}/episode/?page=${page}`);
  return data;
};