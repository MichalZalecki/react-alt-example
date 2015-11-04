const fetchPipes = {
  endpoint(str) {
    return `//${environment.HOST}${str}`;
  },

  throwOnError(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  },

  parseJSON(response) {
    return response.json();
  },
};

export default fetchPipes;
