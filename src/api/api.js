import axios from "axios";

const baseUrl = 'http://localhost:8080/api/items';

export const fetchIndex = () => {
  return axios
    .get(baseUrl)
    .then(response => {
      const result = response.data;
      return {result};
    })
    .catch(error => {
      return {error};
    });
};

export const fetchCreate = item => {
  return axios
    .post(baseUrl, item)
    .then(response => {
      const result = response.data;
      return {result};
    })
    .catch(error => {
      return {error};
    });
};

export const fetchUpdate = (id, item) => {
  return axios
    .put(`${baseUrl}/${id}`, item)
    .then(response => {
      const result = response.data;
      return {id, result};
    })
    .catch(error => {
      return {error};
    });
};

export const fetchDelete = id => {
  return axios
    .delete(`${baseUrl}/${id}`)
    .then(() => {
      return {id};
    })
    .catch(error => {
      return {error}
    });
};
