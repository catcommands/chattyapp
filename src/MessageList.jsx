import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
    render() {
        console.log(this.props.messages);
        let messages = this.props.messages.map((message) =>
          <Message key = {message.id} 
          uniqueID = {message.id}
          username = {message.username} 
          content = {message.content}/>)
        return (
            <main className="allmessages">
            {messages}
            </main>
        );
    }
}
export default MessageList;
//Add key prop to commit