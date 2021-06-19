import React from "react";
import { Menu } from "semantic-ui-react";

import UserPanel from "./UserPanel";
import Customers from "./Customers";

class SidePanel extends React.Component {
  render() {
    return (
      <Menu
        size="large"
        inverted
        fixed="left"
        vertical
        style={{fontSize: "1.2rem", width: "25%" }}
      >
        <UserPanel/>
        <Customers 
          customers = {this.props.customers}
          currentCustomer = {this.props.currentCustomer}
          changeCurrentCustomer = {this.props.changeCurrentCustomer}
        />
      </Menu>
    );
  }
}

export default SidePanel;
