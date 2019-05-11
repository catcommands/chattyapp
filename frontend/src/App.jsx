import React, { Component } from "react";
import ChatBar from "./ChatBar.jsx";
import MessageList from "./MessageList.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket("ws://localhost:3001");
    this.state = {
      currentUser: { name: "Jeff" },
      messages: [],
      users: 0
    };
  }
  addNewMessage = event => {
    if (event.key === "Enter") {
      let msg = {
        type: "sendMessage",
        id: Math.random().toString(),
        username: this.state.currentUser.name,
        content: event.target.value
      };

      //Server is listening to App
      this.sendMessagetoServer({ message: msg });
      event.target.value = "";
    }
  };

  // Users can change name, & this action creates a unique id everytime inside the server
  addNewName = event => {
    let oldUser = this.state.currentUser.name;
    if (event.key === "Enter") {
      this.setState({ currentUser: { name: event.target.value } });
      let users = {
        id: Math.random().toString(),
        type: "postNotification",
        newUser: event.target.value,
        oldUser: oldUser
      };
      this.sendMessagetoServer({ message: users });
    }

    let oldName = this.state.currentUser.name;
    console.log("oldName", oldName);
  };

  //Server is listening to App
  sendMessagetoServer = msg => {
    this.socket.send(JSON.stringify(msg));
  };

  //Function componentDidMount
  componentDidMount() {
    console.log("Client connected");
    this.socket.onopen = function(event) {
      console.log("Connected to server now");
    };

    this.socket.onmessage = event => {
      if (event.data == parseInt(event.data)) {
        return this.setState({ users: event.data });
      }
      if (event.data == parseInt(event.data)) {
        this.setState({ users: event.data });
        console.log("event.data", event.data);
      } else {
        this.setState({
          messages: this.state.messages.concat(JSON.parse(event.data).message)
        });
      }

      console.log("Current state", this.state.messages);
    };
  }

  // Render to frontend page
  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">
            Chatty
          </a>
          <span>{this.state.users} users online</span>
        </nav>
        <ChatBar
          currentUser={this.state.currentUser.name}
          addNewMessage={this.addNewMessage}
          addNewName={this.addNewName}
        />
        <MessageList messages={this.state.messages} />
      </div>
    );
  }
}
export default App;
