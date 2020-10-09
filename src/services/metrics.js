import axios from 'axios';
import { environments } from '../environments/'

export const getMetrics = async () => {
    return axios.get(`${environments.coreUrl}/metrics`);
}