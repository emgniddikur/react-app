import axios from 'axios';

const baseUrl = 'http://localhost:8080/api/items';

export const fetchIndex = authToken => {
  return axios
    .get(baseUrl, {
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
    .post(baseUrl, formItem, {
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

export const fetchShow = (id, authToken) => {
  return axios
    .get(`${baseUrl}/${id}`, {
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
    .put(`${baseUrl}/${id}`, formItem, {
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
    .delete(`${baseUrl}/${id}`, {
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
    .get(`${baseUrl}/search?keyword=${keyword}`, {
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
