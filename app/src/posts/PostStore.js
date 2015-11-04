import alt         from "app/core/alt";
import PostActions from "app/posts/PostActions";

class PostStore {
  constructor() {
    this.state = {
      post: {},
      loading: false,
    };

    this.bindListeners({
      handleStartLoading: PostActions.FETCH,
      handleFetchSuccess: PostActions.FETCH_SUCCESS,
      handleFetchFail:    PostActions.FETCH_FAIL,
    });
  }

  handleStartLoading() {
    this.setState({ loading: true });
  }

  handleFetchSuccess(post) {
    this.setState({ post, loading: false });
  }

  handleFetchFail() {
    this.setState({ post: {}, loading: false });
  }
}

export default alt.createStore(PostStore, "PostStore");
