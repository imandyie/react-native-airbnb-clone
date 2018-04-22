/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */
 
import { combineReducers } from 'redux';
import * as LoggedOut from './loggedOut';
import * as Navigation from './navigation';

export default combineReducers(Object.assign(
  LoggedOut,
  Navigation,
));