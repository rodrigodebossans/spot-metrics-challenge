import axios from 'axios';
import { environments } from '../environments/';

export const getIngredients = async (params) =>
  axios.get(`${environments.coreUrl}/ingredients?${params}`);

export const createIngredient = async (ingredient) =>
  axios.post(`${environments.coreUrl}/ingredients`, ingredient);
