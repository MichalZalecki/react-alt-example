import React         from "react";
import AlertsActions from "app/alerts/AlertsActions";

class Alert extends React.Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    AlertsActions.remove(this.props.id);
  }

  render() {
    return require("./Alert.jsx").call(this);
  }
}

export default Alert;
