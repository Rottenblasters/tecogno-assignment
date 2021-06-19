import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import "./App.css";
import { connect } from "react-redux";

import SidePanel from "./SidePanel/SidePanel";
import Messages from "./Messages/Messages";
import MetaPanel from "./MetaPanel/MetaPanel"
import { setCustomer } from "../actions";

class App extends React.Component {
  state = {
    customers: this.props.customers,
    currentCustomer: this.props.currentCustomer,
  };

  changeCurrentCustomer = (customer) => {
    this.setState({ currentCustomer: customer });
    this.props.setCustomer(customer, this.state.customers);
  };

  render() {
    const { customers, currentCustomer } = this.state;
    return (
      <Grid celled className="app">
        <Grid.Row>
          <GridColumn width={4}>
            <SidePanel
              customers={customers}
              currentCustomer={currentCustomer}
              changeCurrentCustomer={this.changeCurrentCustomer}
            />
          </GridColumn>
          <Grid.Column width={8}>
            <Messages />
          </Grid.Column>
          <Grid.Column width={4}>
            <MetaPanel />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({
  customers: state.customerData.customers,
  currentCustomer: state.customerData.currentCustomer,
});

export default connect(mapStateToProps, { setCustomer })(App);
