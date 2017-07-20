import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showChat: true
        }
    }

    closeChat() {
        this.setState({
            showChat: false
        })
    }

    render() {
        const { showChat } = this.state;
        return (
            <div className="row">
               {showChat && 
               <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <div style={style}>
                        <div onClick={this.closeChat.bind(this)}>Close</div>
                        <div>Chat With Me (Đang phát triển)</div>
                    </div>
                </div>}
            </div>
        )
    }
}

const style = {
    width: '300px',
    height: '200px',
    position: 'fixed',
    bottom: 0,
    zIndex: 999,
    right: 10,
    border: 'solid',
    borderWidth: '1px',
    backgroundColor: 'white',
    cursor: 'pointer'
}

export default Chat;
