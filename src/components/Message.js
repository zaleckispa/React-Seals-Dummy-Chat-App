import React from 'react'

class Message extends React.Component {
    render() {
        return (
            <div style={styles.message}>
                <div style={styles.messageUsername}>{this.props.firstName} {this.props.lastName}</div>
                <div style={styles.messageText}>{this.props.content}</div>
            </div>
        )
    }
}

const styles = ({
    message: {
        margin: "15px"
    },
    messageUsername: {
        fontSize: "11px",
        color: "black",
        opacity: "0.9",
        marginBottom: "6px"
    },
    messageText: {
        background: "blue",
        color: "white",
        display: "inline",
        padding: "4px 8px",
        borderRadius: "8px"
    }
});


export default Message;