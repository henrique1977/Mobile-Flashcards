import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Button from '../components/Button';
import { round2Dec } from '../library/functions';

const QuizResult = ({numCorrect, totalCards, startQuiz, goBack}) => {

  const calcScorePercentage = (numCorrect, totalCards) => {
    if (numCorrect === 0) {
      return 0;
    }
    return (numCorrect / totalCards) * 100;
  }

  const scorePercentage = round2Dec(calcScorePercentage(numCorrect, totalCards));
  const scoreText = `You've got ${numCorrect} out of ${totalCards} correct, or ${scorePercentage}%.`;

  return (
    <View style={styles.quizContainer}>
      <View style={styles.resultsView}>
        <Text style={styles.title}>Result</Text>
        <Text style={styles.subTitle}>Thank you for completing this quiz. Please find your results below: </Text>
        <Text style={styles.score}>{scoreText}</Text>
      </View>
      <View style={styles.buttons}>
        <Button buttonStyle={styles.buttonWhite} onPress={() => {startQuiz()}} >Restart Quiz</Button>
        <Button buttonStyle={styles.button} onPress={() => {goBack()}} >Back to Deck</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  quizContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  title: {
    fontSize: 36,
  },
  subTitle: {
    fontSize: 20,
    paddingTop: 20,
  },
  score: {
    fontSize: 20,
    paddingTop: 30,
  },
  resultsView: {
    flex: 6,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 26,
  },
  buttons: {
    flex:3,
    justifyContent: 'space-evenly',
  },
  button: {
    padding: 10,
    color: 'black',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#CCCCCC",
    textAlign: 'center',
    overflow: 'hidden',
    fontSize: 28,
  },
  buttonWhite: {
    padding: 10,
    color: 'white',
    backgroundColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#CCCCCC",
    textAlign: 'center',
    overflow: 'hidden',
    fontSize: 28,
  }
});

export default QuizResult;
