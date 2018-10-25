import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { getCardCountExpression } from '../library/functions';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full height

const DeckListItem = ({deck, navigation}) => {

  const handleTap = (tap) => {
    console.log(`Deck ${deck.title} was pressed`);
    navigation.navigate('DeckDetail', {deckTitle: deck.title});
  }

  return (

      <TouchableWithoutFeedback onPress={handleTap}>
        <View style={styles.container}>
            <Text>{deck.title}</Text>
            <Text>{getCardCountExpression(deck.questions.length)}</Text>
          </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width*.95,
    alignSelf: "stretch",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 4,
    borderWidth: 1,
    borderColor: "#EEEEEE",
    borderRadius: 5,
    height: 60,
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: '#CCCCCC',
    shadowOffset: { height: 0, width: 0 },
    marginTop: 10


  },
  input: {
    width: 200,
    height: 50,
    padding: 8,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    margin: 10
  },
  list: {
    height: 30
  }
});

export default DeckListItem;
