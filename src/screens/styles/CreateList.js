/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  content: {
    paddingTop: 50,
  },
  closeButton: {
    position: 'absolute',
    left: 20,
    zIndex: 9999,
  },
  headerStyle: {
    backgroundColor: colors.white,
    borderBottomWidth: 0,
  },
  heading: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.lightBlack,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 15,
  },
  privacyOptions: {
    marginTop: 40,
  },
  privacyHeading: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.lightBlack,
    marginBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  privacyOptionItem: {
    flex: 1,
    padding: 20,
  },
  privacyOptionTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.lightBlack,
  },
  privacyOptionDescription: {
    fontSize: 14,
    fontWeight: '200',
    color: colors.lightBlack,
    marginTop: 10,
    paddingRight: 90,
  },
  privacyRadioInput: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  inputWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray06,
    height: 1,
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  createButton: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    width: 110,
  },
  buttonIcon: {
    position: 'absolute',
    right: 0,
    top: '50%',
    marginTop: -16,
  },
});

export default styles;
