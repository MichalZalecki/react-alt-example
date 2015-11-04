import React from "react";

class App extends React.Component {
  render() {
    return require("./App.jsx").call(this);
  }
}

export default App;
