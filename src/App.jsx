import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket("ws://localhost:3001");
    this.state = {
      currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
    }
  }


  componentDidMount() {
    console.log('Client connected');

    this.socket.onopen = function (event) {
      console.log('Connected to server now');
    };

    this.socket.onmessage = (event) => {

      this.setState({messages: this.state.messages.concat(JSON.parse(event.data).message)})
      // to change any state in react you always this.setState
      console.log("Current state", this.state.messages);
    };
  }
addNewName =(event) => {
  const newname=event.target.value
  this.setState({currentUser:{name:newname}})
}

sendMessagetoServer = (msg) => {
  this.socket.send(JSON.stringify(msg));
}
  addNewMessage = (event) => {
    if(event.key === 'Enter') {

      let msg = {
        type: 'sendMessage',
        id: this.state.messages.length + 1,
        username: this.state.currentUser.name,
        content: event.target.value
    }
  //const messages = this.state.messages.concat(newMessage)
    this.sendMessagetoServer({message: msg});
    console.log("blabla", msg);
    //this.setState({messages: messages})
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
