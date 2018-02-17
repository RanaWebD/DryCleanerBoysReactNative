import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RootNavigation from './navigation/RootNavigation';

export default class App extends Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <RootNavigation />
        </View>
      </Provider>
    );
  }
}
