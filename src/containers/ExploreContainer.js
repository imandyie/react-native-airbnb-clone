/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */
 
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
import Listings from '../components/explore/Listings';
import colors from '../styles/colors';
import categoriesList from '../data/categories';
import listings from '../data/listings';

export default class InboxContainer extends Component {
  static navigationOptions = {
    header: null,
    tabBarLabel: 'EXPLORE',
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name="ios-search"
        size={22}
        color={tintColor}
      />
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      favouriteListings: [],
    };
    this.handleAddToFav = this.handleAddToFav.bind(this);
    this.renderListings = this.renderListings.bind(this);
    this.onCreateListClose = this.onCreateListClose.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  handleAddToFav(listing) {
    const { navigate } = this.props.navigation;
    let { favouriteListings } = this.state;

    var index = favouriteListings.indexOf(listing.id);
    if (index > -1) {
      favouriteListings = favouriteListings.filter(item => item !== listing.id);
      this.setState({favouriteListings});
    } else {
      navigate('CreateList', {listing, onCreateListClose: this.onCreateListClose});
    }
  }

  onCreateListClose(listingId, listCreated) {
    let { favouriteListings } = this.state;
    if (listCreated) {
      favouriteListings.push(listingId);
    } else {
      favouriteListings = favouriteListings.filter(item => item !== listingId);
    }
    this.setState({favouriteListings});
  }

  renderListings() {
    return listings.map((listing, index) => {
      return (
        <View
          key={`listing-${index}`}
        >
          <Listings
            key={`listing-item-${index}`}
            title={listing.title}
            boldTitle={listing.boldTitle}
            listings={listing.listings}
            showAddToFav={listing.showAddToFav}
            handleAddToFav={this.handleAddToFav}
            favouriteListings={this.state.favouriteListings}
          />
        </View>
      );
    });
  }

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
          {this.renderListings()}
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
    paddingTop: 100,
  },
  scrollViewContent: {
    paddingBottom: 80,
  },
  categories: {
    marginBottom: 40,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    paddingLeft: 20,
    paddingBottom: 20,
    color: colors.gray04,
  }
});