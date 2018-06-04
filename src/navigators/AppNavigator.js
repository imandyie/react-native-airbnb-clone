/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */
 
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect} from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import {
  createNavigationPropConstructor,
  createNavigationReducer,
  initializeListeners,
} from 'react-navigation-redux-helpers';
import LoggedOut from '../screens/LoggedOut';
import LoggedIn from '../screens/LoggedIn';
import LogIn from '../screens/LogIn';
import ForgotPassword from '../screens/ForgotPassword';
import TurnOnNotifications from '../screens/TurnOnNotifications';

export const AppNavigator = createStackNavigator({
  LoggedOut: { screen: LoggedOut },
  LoggedIn: { screen: LoggedIn },
  LogIn: { screen: LogIn },
  ForgotPassword: { screen: ForgotPassword },
  TurnOnNotifications: { screen: TurnOnNotifications },
});

class AppWithNavigationState extends Component {

  componentDidMount() {
    initializeListeners('root', this.props.nav);
  }

  render() {
    const navigation = createNavigationPropConstructor('root')(
      this.props.dispatch,
      this.props.nav,
    );
    return <AppNavigator navigation={navigation} />;
  }

}


AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);