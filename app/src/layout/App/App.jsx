import React      from "react";
import Navbar     from "app/layout/Navbar";
import AlertsList from "app/alerts/AlertsList";

export default function () {
  return (
    <div className="app">
      <Navbar />
      <AlertsList />
      <main>{ this.props.children }</main>
    </div>
  );
};
