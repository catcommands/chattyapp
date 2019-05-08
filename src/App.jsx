import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';
//export default class TimerComponent extends Components {

//}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
  messages: [
    {
      id: 1,
      username: "Bob",
      content: "Has anyone seen my marbles?",
    },
    {
      id: 2,
      username: "Anonymous",
      content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
    }
  ]
    }
    this.socket = new WebSocket("ws://localhost:3001");
  }
  componentDidMount() {
    this.socket.onopen = () => {
      console.log('Client connected');
    };
    //const socket = new WebSocket("ws://localhost:3001");
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
  }
addNewName =(e) => {
  const newname=e.target.value
  this.setState({currentUser:{name:newname}})
}

  addNewMessage = (event) => {
    if(event.key === 'Enter') {
      let newMessage = {
        id: this.state.messages.length + 1,
        username: this.state.currentUser.name,
        content: event.target.value
    }
    const messages = this.state.messages.concat(newMessage)
    this.socket.send(JSON.stringify(newMessage));
    this.setState({messages: messages})
  }
}
  //render() {
    // more code here..
  //}
  render() {
    return (
      <div>
        <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
      </nav>
      <ChatBar currentUser={this.state.currentUser.name} 
      addNewMessage={this.addNewMessage}
      addNewName={this.addNewName}/>
      <MessageList messages={this.state.messages}/>
      </div>
    );
  }
}
export default App;
