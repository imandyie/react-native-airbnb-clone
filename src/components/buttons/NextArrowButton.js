/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../../styles/colors';
import iPhoneSize from '../../helpers/utils';

const size = iPhoneSize();
const buttonSize = 60;
const buttonWrapperPadding = 0;

if (size === 'small') {
  buttonSize = 50;
  buttonWrapperPadding = 20;
}

export default class NextArrowButton extends Component {
  render() {
  	const { disabled, handleNextButton } = this.props;
  	const opacityStyle = disabled ? 0.2 : 0.6;
    return (
      <View style={styles.buttonWrapper}>
        <TouchableHighlight
          style={[{ opacity: opacityStyle }, styles.button]}
          onPress={handleNextButton}
          disabled={disabled}
        >
          <Icon
            name="angle-right"
            color={colors.green01}
            size={32}
            style={styles.icon}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

NextArrowButton.propTypes = {
  disabled: PropTypes.bool,
  handleNextButton: PropTypes.func,
};

const styles = StyleSheet.create({
  buttonWrapper: {
    alignItems: 'flex-end',
    right: 20,
    bottom: 20,
    paddingTop: buttonWrapperPadding,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    width: buttonSize,
    height: buttonSize,
    backgroundColor: colors.white,
  },
  icon: {
    marginRight: -2,
    marginTop: -2,
  },
});
