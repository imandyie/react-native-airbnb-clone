/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class HeartButton extends Component {
  constructor(props) {
  	super(props);
  	this.state = { addedToFavorite: false };

    this.addToFavorite = this.addToFavorite.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ addedToFavorite: nextProps.selected });
  }

  addToFavorite() {
    this.setState({
      addedToFavorite: !this.state.addedToFavorite,
    }, () => {
      this.props.onPress();
    });
  }

  render() {
  	const { addedToFavorite } = this.state;
  	const { color, selectedColor, onPress } = this.props;

    return (
      <TouchableOpacity
        onPress={this.addToFavorite}
      >
        <View>
          <Icon
            name={addedToFavorite ? 'heart' : 'heart-o'}
            color={addedToFavorite ? selectedColor : color}
            size={18}
          />

          <Icon
            name="heart-o"
            size={18}
            color={color}
            style={[
              { display: addedToFavorite ? 'flex' : 'none' },
              styles.selectedColor,
            ]}
          />
        </View>
      </TouchableOpacity>
    );
  }
}

HeartButton.propTypes = {
  color: PropTypes.string.isRequired,
  selectedColor: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  selectedColor: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
});
