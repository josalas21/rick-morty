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

export const getDataByPage = async (section, page) => {
  const { data } = await axios.get(`${BASE_URL}/${section}/?page=${page}`);
  return data;
};

export const getFilteredDataByPage = async (section, page, filteredName) => {
  const { data } = await axios.get(`${BASE_URL}/${section}/?page=${page}&name=${filteredName}`);
  return data;
};
