import React from "react";
import { Header, Segment, Button, Icon } from "semantic-ui-react";

class MessagesHeader extends React.Component {
  state = {
    customer: this.props.currentCustomer,
    status: "",
  };

  componentDidMount() {
    this.setState({ status: this.state.customer.status });
  }

  render() {
    const { status, customer } = this.state;

    return (
      <Segment clearing>
        {/* Channel Title */}
        <Header fluid="true" as="h2" floated="left" style={{ marginBottom: 0 }}>
          <span>{customer.customer}</span>
        </Header>

        {/* Resolve Button */}
        <Header floated="right">
          {status === "unresolved" ? (
            <Button
              color="green"
              inverted
            >
              <Icon name="checkmark" /> Resolve
            </Button>
          ) : (
            <Button
              color="red"
              inverted
            >
              <Icon name="checkmark" /> Unresolve
            </Button>
          )}
        </Header>
      </Segment>
    );
  }
}

export default MessagesHeader;
