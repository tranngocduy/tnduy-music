import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

import io from 'socket.io-client';

var socket = io();

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showChat: true,
            arrayChat: [],
        }
    }

    componentDidMount() {
        socket.on("Server-send-chat", (data) => {
            const arrData = this.state.arrayChat;
            arrData.push(data);
            this.setState({ arrayChat: arrData });
        })
    }

    closeChat() {
        this.setState({
            showChat: false,
            arrayText: []
        })
    }

    sendChat(event) {
        if (event.keyCode === 13) {
            const textChat = document.getElementById("textChat").value;
            socket.emit("Client-send-chat", textChat);
            document.getElementById("textChat").value = '';
        }
    }

    renderListChat() {
        const { arrayChat } = this.state;
        return arrayChat.map((el, index) =>{
            return(
                <div key={index}>
                    {el}
                </div>
            )
        })
    }

    render() {
        const { showChat, arrayChat } = this.state;
        return (
            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                {showChat && <div style={style}>
                    <Paper style={style} zDepth={4} rounded={false}>
                        <div
                            style={{
                                width: '100%',
                                height: '250px',
                                borderBottom: 'solid #000',
                                borderWidth: '1px'
                            }}>
                            <div style={{width: '95%', height: '240px', overflowY: 'scroll', margin: '5%'}}>
                                {arrayChat.length > 0 && this.renderListChat()}
                            </div>
                        </div>
                        <TextField
                            id="textChat"
                            hintText="Chat With Me"
                            fullWidth={true}
                            onKeyUp={this.sendChat.bind(this)}
                        />
                    </Paper>
                </div>}
            </div>
        )
    }
}

const style = {
    width: '300px',
    height: '300px',
    position: 'fixed',
    bottom: 0,
    zIndex: 999,
    right: 20
}

export default Chat;
