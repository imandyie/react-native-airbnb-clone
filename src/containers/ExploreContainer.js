import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchBar from '../components/SearchBar';
import Categories from '../components/explore/Categories';
import colors from '../styles/colors';
import categoriesList from '../data/categories';

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
        <SearchBar />
        <ScrollView
          style={styles.scrollview}
          contentContainerStyle={styles.scrollViewContent}
        >
          <Text style={styles.heading}>Explore Airbnb</Text>
          <View style={styles.categories}>
            <Categories categories={categoriesList} />
          </View>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scrollview: {
    paddingTop: 80,
  },
  scrollViewContent: {
    paddingBottom: 80,
  },
  categories: {
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 20,
    paddingBottom: 20,
    color: colors.gray04,
  }
});