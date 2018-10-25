import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AsyncStorage } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

/** Redux **/
import { Provider, connect } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import reducer from './redux/reducers/index';
import {decksMdl} from './redux/middleware/DecksMiddleware';
import {notificationsMdl} from './redux/middleware/NotificationsMiddleware';
import { appHasStarted } from './redux/actions/Control';

/** pages **/
import AddDeck from './pages/AddDeck';
import Decks from './pages/Decks';
import DeckDetail from './pages/DeckDetail';
import AddCard from './pages/AddCard';
import Quiz from './pages/Quiz';


const store = createStore(reducer, applyMiddleware(...decksMdl, ...notificationsMdl, logger));
store.dispatch(appHasStarted());

//AsyncStorage.setItem('DECKS_STORAGE_KEY', JSON.stringify({}));
//AsyncStorage.removeItem('DECKS_STORAGE_KEY');
//AsyncStorage.removeItem('NOTIFICATION_KEY');


const Stack = createStackNavigator({
  Decks: {
    screen: Decks,
    navigationOptions: {
      title: 'Decks'
    }
  },
  DeckDetail: {
    screen: DeckDetail,
    navigationOptions: {
      title: 'Deck'
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      title: 'Add a Card'
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      title: 'Quiz'
    }
  }
});

const Tabs = createBottomTabNavigator({
  Stack: {
    screen: Stack,
    navigationOptions: {
      tabBarLabel: "Decks",
      tabBarIcon: <MaterialCommunityIcons name="cards" color="grey" size={25} />
    }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: "Add Deck",
      tabBarIcon: <MaterialCommunityIcons name="note-plus" color="grey" size={25} />
    }
  }
});

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <Tabs />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
