import createReducer from '../helpers/createReducer';
import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../../navigators/AppNavigator';

// First we'll temporarly set the Logged In container as default for easy testing.
const firstAction = AppNavigator.router.getActionForPathAndParams('LoggedIn');
const initialNavState = AppNavigator.router.getStateForAction(firstAction);

export const nav = (state = initialNavState, action) => {
   let nextState = AppNavigator.router.getStateForAction(action, state);
   return nextState || state;
};