/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import { StyleSheet } from 'react-native';
import iPhoneSize from '../../helpers/utils';
import colors from '../../styles/colors';

let headingTextSize = 30;
if (iPhoneSize() === 'small') {
  headingTextSize = 26;
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flex: 1,
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1,
  },
  forgotPasswordHeading: {
    fontSize: headingTextSize,
    color: colors.white,
    fontWeight: '300',
  },
  forgotPasswordSubheading: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 60,
  },
  notificationWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default styles;
