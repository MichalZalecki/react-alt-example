import React             from "react";
import AlertsStore       from "app/alerts/AlertsStore";
import AlertsActions     from "app/alerts/AlertsActions";
import Alert             from "app/alerts/Alert";
import history           from "app/core/history";

class AlertsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = AlertsStore.getState();

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AlertsStore.listen(this.onChange);
    this.unlistenHistory = history.listen(AlertsActions.reset);
  }

  componentWillUnount() {
    AlertsStore.unlisten(this.onChange);
    this.unlistenHistory();
  }

  onChange(state) {
    this.setState(state);
  }

  getAlerts() {
    return this.state.alerts.map(alert => <Alert {...alert} id={ alert.key } />);
  }

  render() {
    return require("./AlertsList.jsx").call(this);
  }
}

export default AlertsList;
