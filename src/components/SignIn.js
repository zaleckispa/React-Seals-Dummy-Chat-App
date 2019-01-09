import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { Link } from 'react-router-dom';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});


class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleChange = (email, password) => event => {
    this.setState({
      [email]: event.target.value,
      [password]: event.target.value,
    });
    console.log(this.state);
  };

  render() {
    const { classes } = this.props;
    const MyLink = props => <Link to="/chat" {...props} />
    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input required id="email" name="email" autoComplete="email" autoFocus value={this.state.email} onChange={this.handleChange('email')} />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input required name="password" type="password" id="password" autoComplete="current-password" value={this.state.password} onChange={this.handleChange('password')} />
            </FormControl>
            {this.state.email.trim() === "" || this.state.password.trim() === "" ?
              <Button
                disabled
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                component={MyLink}
              >
                Sign in
          </Button> :
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                component={MyLink}
              >
                Sign in
          </Button>}
          </form>
        </Paper>
      </main>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);