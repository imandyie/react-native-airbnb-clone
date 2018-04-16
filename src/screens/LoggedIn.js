import React, { Component } from 'react';
import { transparentHeaderStyle } from '../styles/navigation';
import LoggedInTabNavigator from '../navigators/LoggedInTabNavigator';

export default class LoggedIn extends Component {
  static navigationOptions = () => ({
    headerLeft: null,
    headerStyle: transparentHeaderStyle,
    gesturesEnabled: false,
  });

  render() {
  	return (
  	  <LoggedInTabNavigator />
  	);
  }
}