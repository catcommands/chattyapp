import React, {Component} from 'react';

class ChatBar extends Component {
    render() {
    
            //let newValue = evt.target.value;
            //this.props.addNewMessage
        //}
        return (
            <div>
        <footer className="chatbar">
            <input className="chatbar-username" 
            placeholder="Your Name (Optional)" 
            value={this.props.currentUser}
            onChange={this.props.addNewName}
            />
            <input className="chatbar-message" 
            placeholder="Type a message and hit ENTER"
            onKeyPress={this.props.addNewMessage}/>
        </footer>
        </div>
        );
      }
}
export default ChatBar;