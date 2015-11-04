const fetchHelpers = {
  jsonHeaders() {
    return {
      "Accept":       "application/json",
      "Content-Type": "application/json",
    };
  },

  authHeaders() {
    return {
      "Authorization": `Token ${localStorage.getItem("token")}`,
    };
  },
};

export default fetchHelpers;
