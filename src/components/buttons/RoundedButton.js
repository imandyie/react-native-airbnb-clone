/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */
 
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import colors from '../../styles/colors';

export default class RoundedButton extends Component {
  render() {
  	const {
      loading,
      disabled,
      text,
      textColor, 
      background,
      icon,
      handleOnPress,
      textSize,
      textWeight,
      iconPosition,
      textAlign,
      borderColor
    } = this.props;
  	const backgroundColor = background || 'transparent';
  	const color = textColor || colors.black;
    const fontSize = textSize || 16;
    const fontWeight = textWeight || '600';
    const alignPosition = textAlign || 'center';
    const iconLocation = iconPosition || 'left';
    const border = borderColor || colors.white;
    const opacityStyle = disabled || loading ? 0.5 : 1;
    const textOpacity = loading ? 0 : 1;

    return (
      <TouchableOpacity
        style={[{opacity: opacityStyle, backgroundColor, borderColor: border},styles.wrapper]}
        onPress={handleOnPress}
        activeOpacity={0.7}
        disabled={disabled || loading}
      >
        <View style={styles.buttonTextWrapper}>
          {iconLocation === 'left' && !loading ? icon : null}
          {loading ?
            <View style={styles.loaderContainer}>
              <Image
                style={styles.loaderImage}
                source={require('../../img/whiteLoader.gif')}
              />
            </View>
          : null }
          <Text style={[{opacity: textOpacity, color, fontSize, fontWeight, textAlign: alignPosition}, styles.buttonText]}>{text}</Text>
          {iconLocation === 'right' && !loading ? icon : null}
        </View>
      </TouchableOpacity>
    );
  }
}

RoundedButton.propTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  textSize: PropTypes.string,
  textWeight: PropTypes.string,
  textAlign: PropTypes.string,
  background: PropTypes.string,
  borderColor: PropTypes.string,
  icon: PropTypes.object,
  iconPosition: PropTypes.string,
  handleOnPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 40,
    borderWidth: 1,
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
  	width: '100%',
  },
  loaderContainer: {
    width: 90,
    height: 90,
    borderRadius: 15,
    position: 'absolute',
    left: '50%',
    top: '50%',
    marginLeft: -45,
    marginTop: -45,
  },
  loaderImage: {
    width: 40,
    height: 40,
    borderRadius: 15,
    position: 'absolute',
    left: '50%',
    marginLeft: -20,
    top: '50%',
    marginTop: -20,
  }
});