import React from "react";

export default function () {
  return (
    <div className="posts-list">
      { this.props.loading ? <span>Loading&hellip;</span> : this.getPosts() }
    </div>
  );
};
