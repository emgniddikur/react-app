import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/items';

export const fetchIndex = authToken => {
  return axios
    .get(baseUrl, {
      headers: {
        'authToken': authToken
      }
    })
    .then(response => {
      const data = response.data;
      return {data};
    })
    .catch(error => {
      return {error};
    });
};

export const fetchCreate = (authToken, item) => {
  return axios
    .post(baseUrl, item, {
      headers: {
        'authToken': authToken
      }
    })
    .then(response => {
      const data = response.data;
      return {data};
    })
    .catch(error => {
      return {error};
    });
};

export const fetchUpdate = (id, authToken, item) => {
  return axios
    .put(`${baseUrl}/${id}`, item, {
      headers: {
        'authToken': authToken
      }
    })
    .then(response => {
      const data = response.data;
      return {id, data};
    })
    .catch(error => {
      return {error};
    });
};

export const fetchDelete = (id, authToken) => {
  return axios
    .delete(`${baseUrl}/${id}`, {
      headers: {
        'authToken': authToken
      }
    })
    .then(() => {
      return {id};
    })
    .catch(error => {
      return {error}
    });
};
