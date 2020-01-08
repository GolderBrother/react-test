import React from "react";
import MessageList from "./MessageList";
import MessageForm from "./MessageForm";
export default class MessageApp extends React.Component {
  state = {
    messages: []
  };
  addMessage = (content: string) => {
    const newMessage = {
      id: String(Date.now()),
      content
    };
    this.setState({
      messages: [...this.state.messages, newMessage]
    });
  };
  render() {
    return (
      <div className="container" style={{ marginTop: '50px' }}>
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h1 style={{ textAlign: "center" }}>golderBrother的留言板</h1>
            </div>
            <div className="panel-body">
              <MessageList messages={this.state.messages} />
            </div>
            <div className="panel-footer">
              <MessageForm addMessage={this.addMessage} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
