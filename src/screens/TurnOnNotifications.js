/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationActions } from 'react-navigation';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import colors from '../styles/colors';
import transparentHeaderStyle from '../styles/navigation';
import styles from './styles/TurnOnNotifications';

const navigateToTabsAction = NavigationActions.navigate({
  routeName: 'LoggedIn',
});

export default class TurnOnNotifications extends Component {
  static navigationOptions = () => ({
    headerLeft: null,
    headerStyle: transparentHeaderStyle,
    headerTransparent: true,
    gesturesEnabled: false,
  });

  constructor(props) {
    super(props);

    this.state = {
      pressNotifyBtn: false,
      pressSkipBtn: false,
    };

    this.handleNotifyBtnHideUnderlay = this.handleNotifyBtnHideUnderlay.bind(this);
    this.handleNotifyBtnShowUnderlay = this.handleNotifyBtnShowUnderlay.bind(this);
    this.handleSkipBtnHideUnderlay = this.handleSkipBtnHideUnderlay.bind(this);
    this.handleSkipBtnShowUnderlay = this.handleSkipBtnShowUnderlay.bind(this);
  }

  handleNotifyBtnHideUnderlay() {
    this.setState({ pressNotifyBtn: false });
  }

  handleNotifyBtnShowUnderlay() {
    this.setState({ pressNotifyBtn: true });
  }

  handleSkipBtnHideUnderlay() {
    this.setState({ pressSkipBtn: false });
  }

  handleSkipBtnShowUnderlay() {
    this.setState({ pressSkipBtn: true });
  }

  render() {
    const { pressNotifyBtn, pressSkipBtn } = this.state;
    const { navigation } = this.props;
    const notifyBtnColor = pressNotifyBtn ? colors.green02 : colors.green01;
    return (
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <Icon
            name="comments-o"
            size={46}
            style={styles.icon}
          />
          <Text style={styles.title}>
            Turn on notifications?
          </Text>
          <Text style={styles.description}>
            We can let you know when someone messages you,
            or notify you about other important account activity.
          </Text>
          <TouchableHighlight
            style={[
              { backgroundColor: notifyBtnColor },
              styles.notifyButton,
            ]}
            onPress={() => navigation.dispatch(navigateToTabsAction)}
            onShowUnderlay={this.handleNotifyBtnShowUnderlay}
            onHideUnderlay={this.handleNotifyBtnHideUnderlay}
            underlayColor={colors.green02}
          >
            <Text style={[{ color: colors.white }, styles.buttonText]}>
  Yes, notify me
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={[{ backgroundColor: pressSkipBtn ? colors.gray01 : 'transparent' }, styles.skipButton]}
            onPress={() => navigation.dispatch(navigateToTabsAction)}
            onShowUnderlay={this.handleSkipBtnShowUnderlay}
            onHideUnderlay={this.handleSkipBtnHideUnderlay}
            underlayColor={colors.gray01}
          >
            <Text style={[{ color: colors.green01 }, styles.buttonText]}>
  Skip
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

TurnOnNotifications.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }).isRequired,
};
