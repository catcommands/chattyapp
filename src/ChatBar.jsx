import React, {Component} from 'react';

class ChatBar extends Component {
    render() {
        //const changeUser = evt => {
            //let newValue = evt.target.value;
            //this.props.addNewMessage
        //}
        return (
            <div>
        <footer className="chatbar">
            <input className="chatbar-username" 
            placeholder="Your Name (Optional)" 
            defaultValue={this.props.currentUser} />
            <input className="chatbar-message" 
            placeholder="Type a message and hit ENTER"
            onKeyPress={this.props.addNewMessage}/>
        </footer>
        </div>
        );
      }
}
export default ChatBar;