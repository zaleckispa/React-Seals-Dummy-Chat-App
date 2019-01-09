import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

class SendMessageForm extends React.Component {
  state = {
    firstName: "Fancy",
    lastName: "Chat",
    content: "",
    index: Math.random()
  };

  handleChange = content => event => {
    this.setState({
      [content]: event.target.value,
    });
    console.log(this.state);
  };

  messageHandler = () => {
    const data = {
      messages: [{
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        content: this.state.content,
        index: this.state.index
      }]
    };
    axios.put('https://api.jsonbin.io/b/5c366ae081fe89272a87b67e', data, {
      headers: {
        "Content-Type": "application/json",
        "secret-key": "$2a$10$FXYFECHiyjhLXtqdqe4oXeOzyWU05cU/F1DkkqpmnEz30up9K5Dju",
        "versioning": false
      }
    })
      .then(response => {
        console.log(response);
        this.forceUpdate();
      });

  }
  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-full-width"
          label="Fancy Chat"
          style={{ margin: 8 }}
          placeholder="Start Typing..."
          value={this.state.content}
          onChange={this.handleChange('content')}
          fullWidth
          margin="normal"

        />
        <Button
          variant="contained"
          color="primary"
          onClick={this.messageHandler}
        >
          Send
          </Button>
      </form>
    );
  }
}

SendMessageForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SendMessageForm);