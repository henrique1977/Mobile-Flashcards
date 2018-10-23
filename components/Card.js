import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from '../components/Button';
import { QUESTION, ANSWER } from '../redux/actions/Quiz';

const Card = (props) => {

  const {card, cardSide, onPress} = props;
  const text = (cardSide === QUESTION) ? card.question : card.answer;
  const buttonText = (cardSide === QUESTION) ?  'Answer' : 'Question';

  return (
    <View>
        <Text>{text}</Text>
        <Button onPress={onPress} buttonStyle={styles.button}>{buttonText}</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    color: 'red',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#CCCCCC",
    fontWeight: 'bold',
    textAlign: 'center',
    overflow: 'hidden',
  }
});

export default Card;
