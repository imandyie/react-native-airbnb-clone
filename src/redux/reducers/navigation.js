/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import createReducer from '../helpers/createReducer';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../../navigators/AppNavigator';
import { StatusBar } from 'react-native';

const firstAction = AppNavigator.router.getActionForPathAndParams('LoggedOut');
const initialNavState = AppNavigator.router.getStateForAction(firstAction);

export const nav = (state = initialNavState, action) => {
   let nextState = AppNavigator.router.getStateForAction(action, state);

   if (action.routeName === 'TurnOnNotifications' || action.routeName === 'LoggedIn') {
     StatusBar.setBarStyle('dark-content', true);
   }

   return nextState || state;
};