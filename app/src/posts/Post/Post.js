import React from "react";

class Post extends React.Component {
  render() {
    return require("./Post.jsx").call(this);
  }
}

export default Post;
