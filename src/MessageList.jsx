import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
    render() {
        console.log(this.props.messages);
        let messages = this.props.messages.map((message, id) => {
            if (message.type === 'newNotification') {
                return (
                <div key={id} className='notification'>
                    <span className='notification-content' content={message.content}>
                    {message.oldUser} changed their name to {message.newUser}</span>
                </div>
                )
            }
        return ( <Message key={message.id}
          username={message.username} 
          content={message.content}
/>)
});

        return (
            <main className="messages">
            {messages}
            </main>
        );
    }
}
export default MessageList;
//Add key prop to commit