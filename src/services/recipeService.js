import axios from "axios";
import { getToken } from "../utils/auth";

const API_URL = "http://localhost:5000/api/recipes";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

const authHeaderFormData = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
    "Content-Type": "multipart/form-data",
  },
});

export const getAllRecipes = () => axios.get(API_URL);

export const createRecipe = (data) => {
  // If data has file, use FormData
  if (data instanceof FormData) {
    return axios.post(API_URL, data, authHeaderFormData());
  }
  return axios.post(API_URL, data, authHeader());
};

export const getRecipeById = (id) => axios.get(`${API_URL}/${id}`);

export const updateRecipe = (id, data) => {
  // If data has file, use FormData
  if (data instanceof FormData) {
    return axios.put(`${API_URL}/${id}`, data, authHeaderFormData());
  }
  return axios.put(`${API_URL}/${id}`, data, authHeader());
};

export const deleteRecipe = (id) =>
  axios.delete(`${API_URL}/${id}`, authHeader());
