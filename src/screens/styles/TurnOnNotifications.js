/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    marginTop: 80,
    paddingLeft: 20,
    paddingRight: 20,
  },
  icon: {
    color: colors.green01,
    marginBottom: 15,
  },
  title: {
    fontSize: 28,
    color: colors.black,
    fontWeight: '600',
  },
  description: {
    fontSize: 16,
    paddingRight: 30,
    marginTop: 15,
    lineHeight: 22,
  },
  notifyButton: {
    width: 160,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 3,
    marginTop: 40,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    alignSelf: 'center',
  },
  skipButton: {
    borderColor: colors.green01,
    width: 100,
    borderWidth: 2,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 3,
    marginTop: 15,
  },
});

export default styles;
