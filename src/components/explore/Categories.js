/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableHighlight,
  Image,
  View,
  Text,
} from 'react-native';
import colors from '../../styles/colors';
import iPhoneSize from '../../helpers/utils';

const size = iPhoneSize();
let cardSize = 100;
let cardMargin = 8;

if (size === 'small') {
  cardSize = 90;
  cardMargin = 4;
} else if (size === 'large') {
  cardSize = 115;
}

export default class Categories extends Component {
  get Categories() {
    const { categories } = this.props;
    return categories.map((category, index) => (
      <TouchableHighlight
        style={styles.card}
        key={`category-item-${index}`}
      >
        <Image
          source={category.photo}
          style={styles.image}
        />
      </TouchableHighlight>
    ));
  }

  render() {
  	return (
    <ScrollView
      contentContainerStyle={styles.wrapper}
      horizontal
      showHorizontalScrollIndicator={false}
    >
      {this.Categories}
    </ScrollView>
  	);
  }
}

const styles = StyleSheet.create({
  wrapper: {
  	flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: cardSize,
    height: cardSize,
    marginRight: cardMargin,
    marginLeft: cardMargin,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
});
