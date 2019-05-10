import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.socket = new WebSocket("ws://localhost:3001");
    this.state = {
      currentUser: {name: "Jeff"}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [],
      users: 0
    };
  }
addNewMessage = (event) => {
  if(event.key === 'Enter') {

    let msg = {
      type: 'sendMessage',
      id: Math.random().toString(),
      // id: this.state.messages.length + 1,
      username: this.state.currentUser.name,
      content: event.target.value
  }
  //const messages = this.state.messages.concat(newMessage)
    this.sendMessagetoServer({message: msg});
    event.target.value = '';
    //console.log("blabla", msg);
    //this.setState({messages: messages})
  };
}

addNewName = (event) => {
  let oldUser = this.state.currentUser.name;
  if (event.key === 'Enter') {
    this.setState({ currentUser: { name: event.target.value}});
    let users = {
    id: Math.random().toString(),
    type: 'postNotification',
    newUser: event.target.value,
    oldUser: oldUser
    };
    this.sendMessagetoServer({message: users});

    //id: this.state.messages.length + 1,
    //username: this.state.currentUser.name,
     //content: `${this.state} changed their name to (name)`
}

  let oldName = this.state.currentUser.name;
  console.log("oldName", oldName);
}

sendMessagetoServer = (msg) => {
  this.socket.send(JSON.stringify(msg));
}

componentDidMount() {
    console.log('Client connected');
    this.socket.onopen = function (event) {
      console.log('Connected to server now');
    };

    this.socket.onmessage = (event) => {
    if (event.data == parseInt(event.data)) {
      return this.setState({ users: event.data});
    }
      //let newData=JSON.parse(event.data);
      //let newstate=this.state.

      //this.setState({messages: this.state.messages.concat(JSON.parse(event.data).message)})
      if (event.data == parseInt(event.data)) {
        this.setState({ users: event.data });
        console.log('evt.data', event.data);
      } else {
        this.setState({ messages: this.state.messages.concat(JSON.parse(event.data).message)});
      };

      // to change any state in react you always this.setState
      console.log("Current state", this.state.messages);
    };
  }



// addNewName =(event) => {

//   const newname=event.target.value
//   this.setState({currentUser:{name:newname}})
// }


  //render() {
    // more code here..
  //}
  render() {
    return (
      <div>
        <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <span>
        {this.state.users} users online
        </span>
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
