import React, { Component } from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import './Layout.scss';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <AppBar
            title="React from Scratch"
            onLeftIconButtonTouchTap={this.handleToggle}
          />
        </MuiThemeProvider>
        <MuiThemeProvider>
          <Drawer open={this.state.open}>
            <MenuItem onClick={this.handleClose}>
              <Link className="drawer-nav-item" to="/">Home</Link>
            </MenuItem>
            <MenuItem onClick={this.handleClose}>
              <Link className="drawer-nav-item" to="/setup">Setup</Link>
            </MenuItem>
          </Drawer>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Layout;
