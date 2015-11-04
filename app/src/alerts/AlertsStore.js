import alt           from "app/core/alt";
import PostActions   from "app/posts/PostActions";
import AlertsActions from "app/alerts/AlertsActions";
import uuid          from "node-uuid";

class AlertsStore {
  constructor() {
    this.state = {
      alerts: [],
    };

    this.bindListeners({
      handleFail:   PostActions.FETCH_FAIL,
      handleRemove: AlertsActions.REMOVE,
      handleReset:  AlertsActions.RESET,
    });
  }

  handleFail(data) {
    const alert  = { text: data.message, key: uuid.v4() };
    const alerts = this.state.alerts.concat([alert]);

    this.setState({ alerts });
  }

  handleRemove(key) {
    const alerts = this.state.alerts.filter(alert => alert.key !== key);

    this.setState({ alerts });
  }

  handleReset(key) {
    const alerts = [];

    this.setState({ alerts });
  }
}

export default alt.createStore(AlertsStore, "AlertsStore");
