import React from "react";
import { Segment, Comment } from "semantic-ui-react";
import { connect } from "react-redux";

import MessagesHeader from "./MessagesHeader";
import MessageForm from "./MessageForm";
import Skeleton from "./Skeleton";

class Messages extends React.Component {
  state = {
    customer: this.props.currentCustomer,
    messages: [],
  };

  componentDidMount() {
    this.setState({
      customer: this.props.currentCustomer,
      messages: this.props.currentCustomer.messages,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.currentCustomer.id !== this.props.currentCustomer.id) {
      this.setState({
        customer: this.props.currentCustomer,
        messages: this.props.currentCustomer.messages,
      });
    }
  }

  isOwnMessage = (sender) => {
    return sender === "employee" ? "message__self" : "";
  };

  displayMessages = (messages) =>
    messages.length > 0 &&
    messages.map((message) => (
      <Comment key={message.timeStamp}>
        <Comment.Content className={this.isOwnMessage(message.sender)}>
          <Comment.Author as="a">{message.sender}</Comment.Author>
          <Comment.Metadata>{message.timeStamp}</Comment.Metadata>
          <Comment.Text>{message.content}</Comment.Text>
        </Comment.Content>
      </Comment>
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
        <MessagesHeader currentCustomer={customer} />

        <Segment>
          <Comment.Group className="messages">
            {this.displayMessages(messages)}
          </Comment.Group>
        </Segment>

        <MessageForm customer={customer} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  customers: state.customerData.customers,
  currentCustomer: state.customerData.currentCustomer,
});

export default connect(mapStateToProps, {})(Messages);
