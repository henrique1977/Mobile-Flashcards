import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from 'react-navigation';

const Decks = () => (
  <View style={styles.container}>
    <MaterialCommunityIcons name="cards" color="grey" size={100} />
    <Text>List of Decks</Text>
  </View>
);

const AddDeck = () => (
  <View style={styles.container}>
    <MaterialCommunityIcons name="note-plus" color="grey" size={100} />
    <Text>Add a new Deck</Text>
  </View>
);

const Tabs = createBottomTabNavigator({
  Decks: {
    screen: Decks,
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
  },
//}
// ,
// {
//   tabBarOptions: {
//   activeTintColor: '#e91e63',
//   labelStyle: {
//     fontSize: 14,
//   },
//   style: {
//     backgroundColor: 'grey',
//   },
// }
});

export default class App extends React.Component {
  render() {
    return (
        <Tabs />
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
