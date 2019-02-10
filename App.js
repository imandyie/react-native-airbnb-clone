/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import React, { Component } from 'react';
import { StatusBar, AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Root, configureStore} from './src/navigators/AppNavigator';
import { NETWORK_INTERFACE } from './src/config';

StatusBar.setBarStyle('light-content', true);

const client = new ApolloClient({
  link: new HttpLink({ uri: NETWORK_INTERFACE }),
  cache: new InMemoryCache()
})

class App extends Component {
  render() {
  	return (
      <Provider store={configureStore({})}>
        <ApolloProvider client={client}>
          <Root />
        </ApolloProvider>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('App', () => App);

export default App;