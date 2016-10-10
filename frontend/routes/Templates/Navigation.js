import React from 'react';
import { IndexLink, Link } from 'react-router';

import Videogame  from 'material-ui/svg-icons/hardware/videogame-asset';
import Email      from 'material-ui/svg-icons/communication/email';
import Security   from 'material-ui/svg-icons/hardware/security';
import NavMenu    from 'material-ui/svg-icons/navigation/menu';
import Archive    from 'material-ui/svg-icons/content/archive';
import Person     from 'material-ui/svg-icons/social/person';
import Cake       from 'material-ui/svg-icons/social/cake';
import IconButton from 'material-ui/IconButton';
import SubHeader  from 'material-ui/Subheader';
import MenuItem   from 'material-ui/MenuItem';
import Divider    from 'material-ui/Divider';
import Drawer     from 'material-ui/Drawer';

 class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  toggleDrawer = () => this.setState({open: !this.state.open});
  closeDrawer = (open) => this.setState({open});

  render() {
    const styleLink = {
      textDecoration: 'none',
      fontWeight: 'normal'
    }

    const styleNavHead = {
      backgroundColor: '#aea',
      marginBottom: '4px',
      textAlign: 'center',
      lineHeight: '96px',
      display: 'block'
    }

    const styleDivider = {
      marginTop: '4px',
      marginBottom: '4px'
    }

    const styleIconDisabled = {
      opacity: '0.6'
    }

    return (
      <div className='nav'>
        <IconButton onTouchTap={this.toggleDrawer}>
          <NavMenu />
        </IconButton>

        <Drawer
          open={this.state.open}
          width={350}
          docked={false}
          onRequestChange={this.closeDrawer} >

            <span style={styleNavHead}>Pavboxdev</span>

            <IndexLink to='/' style={styleLink} onTouchTap={this.toggleDrawer}>
              <MenuItem
                primaryText='Обо мне'
                leftIcon={<Person />}/></IndexLink>

              <MenuItem
                primaryText='Мои проекты'
                leftIcon={<Cake style={styleIconDisabled} />}
                disabled={true} />

            <Link to='/settings' style={styleLink} onTouchTap={this.toggleDrawer}>
              <MenuItem
                primaryText='Контакты'
                leftIcon={<Email />} /></Link>

            <Divider style={styleDivider}/>
            <SubHeader>Больше, чем проекты</SubHeader>

              <MenuItem
                primaryText='Библиотека компонентов'
                leftIcon={<Archive style={styleIconDisabled} />}
                disabled={true} />

              <MenuItem
                primaryText='Информационная безопасность'
                leftIcon={<Security style={styleIconDisabled} />}
                disabled={true} />

              <MenuItem
                primaryText='Разработка игр'
                leftIcon={<Videogame style={styleIconDisabled} />}
                disabled={true} />
        </Drawer>
      </div>
    );
  }
}

export default Navigation;
