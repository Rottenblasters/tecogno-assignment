import React from "react";
import {
  Segment,
  Header,
} from "semantic-ui-react";

class MetaPanel extends React.Component {
  state = {
  };

  render() {
    return (
      <Segment >
        <Header as="h3" attached="top">
          MetaPanel
        </Header>
      </Segment>
    );
  }
}

export default MetaPanel;
