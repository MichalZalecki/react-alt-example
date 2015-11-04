import React    from "react";
import { Link } from "react-router";

export default function () {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts/1">Post 1</Link></li>
        <li><Link to="/posts/2">Post 2</Link></li>
        <li><Link to="/posts/3">Post 3</Link></li>
        <li><Link to="/posts/99">Post 99</Link></li>
      </ul>
    </nav>
  );
};
