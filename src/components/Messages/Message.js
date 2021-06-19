import React from "react";
import { Comment } from "semantic-ui-react";

const isOwnMessage = (sender) => {
  return sender === "employee" ? "message__self" : "";
};

const Message = ({ message }) => (
  <Comment>
    <Comment.Content className={isOwnMessage(message.sender)}>
      <Comment.Author as="a">{message.sender}</Comment.Author>
      <Comment.Metadata>{message.timeStamp}</Comment.Metadata>
      <Comment.Text>{message.content}</Comment.Text>
    </Comment.Content>
  </Comment>
);

export default Message;
