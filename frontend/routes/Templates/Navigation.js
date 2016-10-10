import React from 'react';
import { IndexLink, Link } from 'react-router';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavMenu  from 'material-ui/svg-icons/navigation/menu';
import Divider from 'material-ui/Divider';

 class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  toggleDrawer = () => this.setState({open: !this.state.open});
  closeDrawer = (open) => this.setState({open});

  render() {
    const styleLink = {
      textDecoration: 'none'
    }

    return (
      <div className='nav'>
        <IconButton onTouchTap={this.toggleDrawer}>
          <NavMenu />
        </IconButton>

        <Drawer
          open={this.state.open}
          openSecondary={true}
          width={300}
          docked={false}
          onRequestChange={this.closeDrawer} >
            <MenuItem>pavboxdev</MenuItem>
            <IndexLink to='/' style={styleLink} onTouchTap={this.toggleDrawer}>
              <MenuItem>Главная страница</MenuItem></IndexLink>
            <Link to='/settings' style={styleLink} onTouchTap={this.toggleDrawer}>
              <MenuItem>Настройки</MenuItem></Link>
        </Drawer>
      </div>
    );
  }
}

export default Navigation;
