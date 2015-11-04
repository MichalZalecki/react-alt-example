import React from "react";

export default function () {
  return (
    <div className="alert">
      <div className="alert__text">{ this.props.text }</div>
      <button className="alert__close" onClick={ this.handleClose }>Close</button>
    </div>
  );
};
