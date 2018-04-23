/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import {
  AppRegistry,
  StatusBar
} from 'react-native';
import App from './App';

StatusBar.setBarStyle('light-content', true);
AppRegistry.registerComponent('AirbnbClone', () => App);
