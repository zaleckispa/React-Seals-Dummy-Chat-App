import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "20px",
    width: "200px",
    height: "200px"
  },
});

class ProfileCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          title="Fancy Chat Profile"
        />
        <Avatar className={classes.avatar}>FC</Avatar>
        <CardContent>
          <Typography variant="h6" align="center">
            Name
          </Typography>
          <Typography variant="h4" align="center">
            Fancy
          </Typography>
          <Divider />
          <Typography variant="h6" align="center">
            Last Name
          </Typography>
          <Typography variant="h4" align="center">
            Chat
          </Typography>
          <Divider />
          <Typography variant="h6" align="center">
            E-mail
          </Typography>
          <Typography variant="h4" align="center">
            fancy@chat.com
          </Typography>
          <Divider />
          <Typography variant="h6" align="center">
            Address
          </Typography>
          <Typography variant="h4" align="center">
            Fancy Chat 12, Fancy Chat
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

ProfileCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileCard);