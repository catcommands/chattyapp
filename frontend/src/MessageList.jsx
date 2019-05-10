import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
    render() {
        console.log(this.props.messages);
        let messages = this.props.messages.map((message) => {
            if (message.type === 'newNotification') {
                return (
                <div key={message.id} className='notification'>
                    <span className='notification-content' content={message.content}>
                    {message.oldUser} changed user name to {message.newUser}</span>
                </div>
                )
            }
        return ( <Message key={message.id}
          username={message.username} 
          content={message.content}/>)
});
        return (
            <main className="messages">
            {messages}
            </main>
        );
    }
}
export default MessageList;