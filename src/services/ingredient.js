import axios from 'axios';
import { environments } from '../environments/';

export const getIngredients = async () =>
  axios.get(`${environments.coreUrl}/ingredients?_expand=metric`);

export const createIngredient = async (ingredient) =>
  axios.post(`${environments.coreUrl}/ingredients`, ingredient);
