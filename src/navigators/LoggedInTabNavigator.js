import { TabNavigator } from 'react-navigation';
import ExploreContainer from '../containers/ExploreContainer';
import InboxContainer from '../containers/InboxContainer';
import ProfileContainer from '../containers/ProfileContainer';
import SavedContainer from '../containers/SavedContainer';
import TripsContainer from '../containers/TripsContainer';
import colors from '../styles/colors';

const LoggedInTabNavigator = TabNavigator({
  ExploreContainer: { screen: ExploreContainer },
  SavedContainer: { screen: SavedContainer },
  TripsContainer: { screen: TripsContainer }, 
  InboxContainer: { screen:  InboxContainer },
  ProfileContainer: { screen: ProfileContainer },
}, {
  tabBarOptions: {
  	labelStyle: {
  	  fontWeight: '600',
  	  marginBottom: 5,
  	},
    activeTintColor: colors.pink
  },
});

export default LoggedInTabNavigator;