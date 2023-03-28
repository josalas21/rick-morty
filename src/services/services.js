import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

export const getDataByPage = async (section, page) => {
  const { data } = await axios.get(`${BASE_URL}/${section}/?page=${page}`);
  return data;
};

export const getFilteredDataByPage = async (section, page, filteredName) => {
  const { data } = await axios.get(
    `${BASE_URL}/${section}/?page=${page}&name=${filteredName}`
  );
  return data;
};
