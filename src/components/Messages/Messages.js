import React from "react";
import { Segment, Comment } from "semantic-ui-react";
import { connect } from "react-redux";

import MessagesHeader from "./MessagesHeader";
import MessageForm from "./MessageForm";
import Message from "./Message";
import Skeleton from "./Skeleton";


class Messages extends React.Component {
  state = {
    customer: this.props.currentCustomer,
    messages: []
  };

  componentDidMount() {
    this.setState({ customer: this.props.currentCustomer, messages: this.props.currentCustomer.messages });
  }

  displayMessages = (messages) =>
    messages.length > 0 &&
    messages.map((message) => (
      <Message
        key={message.timeStamp}
        message={message}
      />
    ));

  displayMessageSkeleton = (loading) =>
    loading ? (
      <React.Fragment>
        {[...Array(10)].map((_, i) => (
          <Skeleton key={i} />
        ))}
      </React.Fragment>
    ) : null;

  render() {

    const { messages, customer } = this.state;

    return (
      <React.Fragment>
        <MessagesHeader
          currentCustomer = {customer}
        />

        <Segment>
          <Comment.Group className="messages">
            {this.displayMessages(messages)}
          </Comment.Group>
        </Segment>

        <MessageForm
          customer = {customer}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  customers: state.customerData.customers,
  currentCustomer: state.customerData.currentCustomer
});


export default connect(mapStateToProps, {})(Messages);
