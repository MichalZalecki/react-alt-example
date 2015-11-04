import React from "react";
import Post from "app/posts/Post";

export default function () {
  return (
    <div className="post-page">
      { this.state.loading ? <span>Loading&hellip;</span> : <Post {...this.state.post} /> }
    </div>
  );
};
