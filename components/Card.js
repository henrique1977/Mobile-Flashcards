import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from '../components/Button';
import { QUESTION, ANSWER } from '../redux/actions/Quiz';

const Card = (props) => {

  const {card, cardSide, onPress, markCorrect, markIncorrect} = props;
  const text = (cardSide === QUESTION) ? card.question : card.answer;
  const buttonText = (cardSide === QUESTION) ?  'Answer' : 'Question';

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardView}>
        <Text style={styles.cardText}>{text}</Text>
      </View>
      <View style={styles.buttonView}>
          <Button onPress={onPress} buttonStyle={styles.button}>{buttonText}</Button>
      </View>
      <View style={styles.buttons}>
        <Button onPress={markCorrect} buttonStyle={styles.correctBtn}>Correct</Button>
        <Button onPress={markIncorrect} buttonStyle={styles.incorrectBtn}>Incorrect</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  cardView: {
    flex: 6,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 26,
  },
  buttonView: {
    flex:2,
  },
  button: {
    padding: 10,
    color: 'red',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#CCCCCC",
    fontWeight: 'bold',
    textAlign: 'center',
    overflow: 'hidden',
  },
  buttons: {
    flex:6,
    justifyContent: 'space-evenly',
  },
  correctBtn: {
    padding: 10,
    backgroundColor: 'green',
    color: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#CCCCCC",
    fontWeight: 'bold',
    textAlign: 'center',
    overflow: 'hidden',
    fontSize: 20,
  },
  incorrectBtn: {
    padding: 10,
    backgroundColor: 'red',
    color: '#FFFFFF',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#CCCCCC",
    fontWeight: 'bold',
    textAlign: 'center',
    overflow: 'hidden',
    fontSize: 20,
  }
});

export default Card;
