// api.js
import axios from 'axios';

const fetchData = async (endpoint, params) => {
    const apiUrl = `https://suitmedia-backend.suitdev.com${endpoint}`;
    try {
      const response = await axios.get(apiUrl, params);
      return response;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };
  
  export const getData = async (endpoint, params) => {
    const result = await fetchData(endpoint, params);
    return result.data.data;
  };
  
  export const getLinks = async (endpoint, params) => {
    const result = await fetchData(endpoint, params);
    return result.data.links;
  };
  
  export const getMeta = async (endpoint, params) => {
    const result = await fetchData(endpoint, params);
    return result.data.meta;
  };
  