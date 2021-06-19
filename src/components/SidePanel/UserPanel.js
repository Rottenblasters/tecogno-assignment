import React from "react";
import { Grid, Header, Icon } from "semantic-ui-react";

class UserPanel extends React.Component {
  state = {
    employee: {
      displayName: 'Rahul',
      id: 123
    }
  };

  dropdownOptions = () => [
    {
      key: "user",
      text: (
        <span>
          Signed in as <strong>{this.state.employee.displayName}</strong>
        </span>
      ),
      disabled: true,
    },
    {
      key: "signout",
      text: <span>Sign Out</span>,
    },
  ];

  render() {
    return (
      <Grid>
        <Grid.Column>
          <Grid.Row style={{ padding: "1.2em", margin: 0 }}>
            {/* App Header */}
            <Header inverted floated="left" as="h2">
              <Icon name="code" />
              <Header.Content>Queries</Header.Content>
            </Header>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  }
}

export default UserPanel;
