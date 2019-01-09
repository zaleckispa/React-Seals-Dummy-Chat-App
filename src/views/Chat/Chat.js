import React, { Component } from 'react';
import axios from 'axios';
import Drawer from '../../components/PermanentDrawerLeft';
import './Chat.css';
import SendMessage from '../../components/SendMessageForm';
import Message from '../../components/Message';

class Chat extends Component {
    state = {
        messages: []
    }

    componentDidMount() {
        axios.get('https://api.jsonbin.io/b/<BIN_ID>', {
            headers: {
                "Content-Type": "application/json",
                "secret-key": "SECRET_KEY",
                "versioning": false
            }
        })
            .then(response => {
                this.setState({ messages: response.data.messages });
                //console.log(response);
            });
    }

    // componentDidUpdate() {
    //     axios.get('https://api.jsonbin.io/b/<BIN_ID>', {
    //         headers: {
    //             "Content-Type": "application/json",
    //             "secret-key": "SECRET_KEY",
    //             "versioning": false
    //         }
    //     })
    //         .then(response => {
    //             this.setState({ messages: response.data.messages });
    //         });
    // }

    render() {
        const messages = this.state.messages.map(message => {
            return <Message key={message.index} firstName={message.firstName} lastName={message.lastName} content={message.content} />;
        });

        return (
            <div className="app">
                <Drawer />
                <div className="ChatBox">
                    {messages}
                    <div className="sendMessageForm">
                        <SendMessage />
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;