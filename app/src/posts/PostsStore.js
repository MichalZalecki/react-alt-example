import alt          from "app/core/alt";
import PostsActions from "app/posts/PostsActions";

class PostsStore {
  constructor() {
    this.state = {
      posts: [],
      loading: false,
    };

    this.bindListeners({
      handleStartLoading: PostsActions.FETCH,
      handleFetchSuccess: PostsActions.FETCH_SUCCESS,
      handleFetchFail:    PostsActions.FETCH_FAIL,
    });
  }

  handleStartLoading() {
    this.setState({ loading: true });
  }

  handleFetchSuccess(posts) {
    this.setState({ posts, loading: false });
  }

  handleFetchFail() {
    this.setState({ posts: [], loading: false });
  }
}

export default alt.createStore(PostsStore, "PostsStore");
