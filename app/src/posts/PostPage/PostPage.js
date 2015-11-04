import React        from "react";
import PostsActions from "app/posts/PostActions";
import PostStore    from "app/posts/PostStore";

class PostPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = PostStore.getState();

    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    PostsActions.fetch(newProps.params.id);
  }

  componentDidMount() {
    PostStore.listen(this.onChange);
    PostsActions.fetch(this.props.params.id);
  }

  componentWillUnmount() {
    PostStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return require("./PostPage.jsx").call(this);
  }
}

export default PostPage;
