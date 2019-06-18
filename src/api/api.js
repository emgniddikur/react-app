import axios from 'axios';
import {restApiUrl} from '../config';

export const fetchIndex = authToken => {
  return axios
    .get(restApiUrl, {
      headers: {
        authToken
      }
    })
    .then(response => {
      const items = response.data;
      return {items};
    })
    .catch(error => {
      return {error};
    });
};

export const fetchCreate = (authToken, formItem) => {
  return axios
    .post(restApiUrl, formItem, {
      headers: {
        authToken
      }
    })
    .then(response => {
      const item = response.data;
      return {item};
    })
    .catch(error => {
      return {error};
    });
};

export const fetchUpdate = (id, authToken, formItem) => {
  return axios
    .put(`${restApiUrl}/${id}`, formItem, {
      headers: {
        authToken
      }
    })
    .then(response => {
      const item = response.data;
      return {item};
    })
    .catch(error => {
      return {error};
    });
};

export const fetchDelete = (id, authToken) => {
  return axios
    .delete(`${restApiUrl}/${id}`, {
      headers: {
        authToken
      }
    })
    .catch(error => {
      return {error}
    });
};

export const fetchSearch = (keyword, authToken) => {
  return axios
    .get(`${restApiUrl}/search?keyword=${keyword}`, {
      headers: {
        authToken
      }
    })
    .then(response => {
      const items = response.data;
      return {items};
    })
    .catch(error => {
      return {error}
    });
};
