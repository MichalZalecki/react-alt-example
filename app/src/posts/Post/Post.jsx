import React from "react";

export default function () {
  return (
    <article className="post">
      <h1>{ this.props.title }</h1>
      <p>{ this.props.content }</p>
    </article>
  );
};
