import React        from "react";
import PostsActions from "app/posts/PostsActions";

class PostsPage extends React.Component {
  componentDidMount() {
    PostsActions.fetch();
  }

  render() {
    return require("./PostsPage.jsx").call(this);
  }
}

export default PostsPage;
