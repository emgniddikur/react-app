const Config = () => {
  if (process.env.NODE_ENV === 'test') {
    // test
    return {
      restApiUrl: process.env.REACT_APP_REST_API_URL
    }
  } else if (process.env.NODE_ENV === 'production') {
    // production
    return {
      restApiUrl: process.env.REACT_APP_REST_API_URL
    }
  }
  // development
  return {
    restApiUrl: process.env.REACT_APP_REST_API_URL
  }
};

export const restApiUrl = Config().restApiUrl;