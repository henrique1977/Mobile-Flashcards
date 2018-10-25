import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from '../components/Button';
import { round2Dec } from '../library/functions';

const QuizResult = ({numCorrect, totalCards, startQuiz, goBack}) => {

  console.log('Q RESYLT');
  console.log(startQuiz);

  const calcScorePercentage = (numCorrect, totalCards) => {
    if (numCorrect === 0) {
      return 0;
    }
    return (numCorrect / totalCards) * 100;
  }

  console.log('welcome to Quiz Result component');
  const scorePercentage = round2Dec(calcScorePercentage(numCorrect, totalCards));

  const scoreText = `You've got ${numCorrect} out of ${totalCards} correct, or ${scorePercentage}%.`;

  return (
    <View style={styles.quizContainer}>
      <Text>Thank you for completing this quiz. Please find your results below: </Text>
      <Text>{scoreText}</Text>
      <View style={styles.buttons}>
        <Button onPress={() => {startQuiz()}} >Restart Quiz</Button>
        <Button onPress={() => {goBack()}} >Back to Deck</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
    justifyContent: 'space-between',
    borderWidth: 1,
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

export default QuizResult;
