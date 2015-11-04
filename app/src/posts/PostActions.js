import alt          from "app/core/alt";
import fetchHeaders from "app/network/fetchHeaders";
import fetchPipes   from "app/network/fetchPipes";

class PostActions {
  fetch(id) {
    this.dispatch();
    fetch(`//localhost:3000/posts/${id}`, {
      method: "POST",
    })
      .then(fetchPipes.throwOnError)
      .then(fetchPipes.parseJSON)
      .then(this.actions.fetchSuccess)
      .catch(this.actions.fetchFail);
  }

  fetchSuccess(data) {
    this.dispatch(data);
  }

  fetchFail(error) {
    this.dispatch(error);
  }
}

export default alt.createActions(PostActions);
