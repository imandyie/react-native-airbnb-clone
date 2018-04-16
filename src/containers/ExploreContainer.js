import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class InboxContainer extends Component {
  static navigationOptions = {
    tabBarLabel: 'EXPLORE',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="ios-search"
        size={22}
        color={tintColor}
      />
    ),
  };

  render() {
    return (
      <View style={styles.wrapper}>
        <Text>Explore Container</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    padding: 50,
  }
});