import React, { Component } from 'react';
import './Profile.css';
import Drawer from '../../components/PermanentDrawerLeft';
import Card from '../../components/ProfileCard';

class Profile extends Component {
  render() {
    return (
      <div className="Main">
        <Drawer />
        <div className="Card">
          <Card />
        </div>
      </div>
    );
  }
}

export default Profile;