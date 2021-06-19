import React from "react";
import { Menu, Icon, Button } from "semantic-ui-react";

class Customers extends React.Component {
  state = {
    currentCustomer: this.props.currentCustomer,
    tab: "",
    customers: this.props.customers,
  };

  componentDidMount() {
    this.setState({ tab: this.state.currentCustomer.status });
  }

  changeActiveCustomer = (customer) => {
    this.setState({ currentCustomer: customer, tab: customer.status });
    this.props.changeCurrentCustomer(customer);
  };

  getResolved = () => {
    this.setState({ tab: "resolved" });
  };

  getUnresolved = () => {
    this.setState({ tab: "unresolved" });
  };
  displayCustomers = (customers) =>
    customers.length > 0 &&
    customers.map(
      (customer) =>
        customer.status === this.state.tab && (
          <Menu.Item
            key={customer.id}
            onClick={() => {
              this.changeActiveCustomer(customer);
            }}
            name={customer.name}
            style={{ opacity: 0.7 }}
            active={customer.id === this.state.currentCustomer.id}
          >
            # {customer.customer}
          </Menu.Item>
        )
    );

  render() {
    const { customers } = this.state;
    return (
      <Menu.Menu className="menu">
        <Menu.Item fitted>
          <Button.Group>
            <Button
              color="orange"
              onClick={this.getResolved}
              content="Resolved"
              labelPosition="left"
              icon="checkmark"
            />
            <Button
              color="teal"
              onClick={this.getUnresolved}
              content="Unresolved"
              labelPosition="right"
              icon="cancel"
            />
          </Button.Group>
        </Menu.Item>
        <Menu.Item fitted>
          <span>
            <Icon name="star" /> {this.state.tab} customers
          </span>
        </Menu.Item>
        {this.displayCustomers(customers)}
      </Menu.Menu>
    );
  }
}

export default Customers;
