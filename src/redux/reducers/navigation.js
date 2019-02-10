/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import { StatusBar } from 'react-native';
import createReducer from '../helpers/createReducer';
import * as types from '../actions/types';
import AppRouteConfigs from '../../navigators/AppRouteConfigs';

const firstAction = AppRouteConfigs.router.getActionForPathAndParams('LoggedOut');
const initialNavState = AppRouteConfigs.router.getStateForAction(firstAction);

const loggedInStatus = createReducer({}, {
  [types.SET_LOGGED_IN_STATE](state, action) {
    return action;
  },
});

const nav = (state = initialNavState, action) => {
  const nextState = AppRouteConfigs.router.getStateForAction(action, state);

  if (action.routeName === 'TurnOnNotifications' || action.routeName === 'LoggedIn') {
    StatusBar.setBarStyle('dark-content', true);
  }

  return nextState || state;
};

export {
  loggedInStatus,
  nav,
};
