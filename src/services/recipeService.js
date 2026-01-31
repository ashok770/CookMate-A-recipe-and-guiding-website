import axios from "axios";
import { getToken } from "../utils/auth";

const API_URL = "http://localhost:5000/api/recipes";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});

export const getAllRecipes = () => axios.get(API_URL);

export const createRecipe = (data) => axios.post(API_URL, data, authHeader());

export const getRecipeById = (id) => axios.get(`${API_URL}/${id}`);

export const updateRecipe = (id, data) =>
  axios.put(`${API_URL}/${id}`, data, authHeader());

export const deleteRecipe = (id) =>
  axios.delete(`${API_URL}/${id}`, authHeader());
