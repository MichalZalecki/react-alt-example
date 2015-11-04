import React           from "react";
import connectToStores from 'alt/utils/connectToStores';
import PostsStore      from "app/posts/PostsStore";
import Post            from "app/posts/Post";

@connectToStores
class PostsList extends React.Component {
  static getStores() {
    return [PostsStore];
  }

  static getPropsFromStores() {
    return PostsStore.getState();
  }

  getPosts() {
    return this.props.posts.map(post => <Post {...post} key={ post.id } />);
  }

  render() {
    return require("./PostsList.jsx").call(this);
  }
}

export default PostsList;
