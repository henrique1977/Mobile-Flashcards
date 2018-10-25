import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native'
import { connect } from 'react-redux';
import * as actions from '../redux/actions/Quiz';
import Card from '../components/Card';
import QuizResult from '../components/QuizResult';
import Button from '../components/Button';
import { totalCards } from '../library/functions';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class Quiz extends React.Component {

  constructor(props) {
      super(props);
      this.deck = this.props.navigation.getParam('deck', null);
      this.startQuiz = this.props.navigation.getParam('startQuiz', null);
  }

  goBack = () => this.props.navigation.goBack();

  quizResult = () => {
    return (
      <QuizResult numCorrect={this.props.quiz.correctAnswers}
                  totalCards={this.cardsTotal()}
                  startQuiz={this.startQuiz}
                  goBack={this.goBack}
      />
    );
  }

  showCard = (card, cardSide, pressFunction) => {
    return (
      <Card card={card} cardSide={cardSide} onPress={pressFunction}
        markCorrect={this.props.markCorrect} markIncorrect={this.props.markIncorrect}
      />
    );
  }

  currentCard = () => this.props.quiz.cardIndex + 1;
  cardsTotal = () => totalCards(this.deck);
  isLastCard = () => (this.currentCard() > this.cardsTotal());

  render() {

    const {cardIndex, cardSide} = this.props.quiz;
    const questions = this.deck.questions;
    const card = questions[cardIndex];

    const pressFunction = (cardSide === 'question') ? this.props.showAnswer : this.props.showQuestion;

    // decide if this is the last card; If not, display card. If it is, display QuizResult
    const toDisplay = (this.isLastCard()) ? this.quizResult() : this.showCard(card, cardSide, pressFunction);
    const headerText = (this.isLastCard()) ? '' : (<Text style={styles.cardCounter}>{this.currentCard()} / {this.cardsTotal()}</Text>);

    return (
      <View style={styles.container}>
        <View style={styles.headerRow}>
          {headerText}
        </View>
        <View style={styles.mainContent}>
          { toDisplay }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    padding: 5
  },
  headerRow: {
    flex:3,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: width,
    paddingLeft: 10,
    paddingTop: 10,
  },
  cardCounter: {
    fontSize: 20,
  },
  mainContent: {
    flex:16,
    width: width,
  }
});

const mapStateToProps = state => {
  return ({
    decks: state.decksReducer,
    quiz: state.quizReducer
  });
};

export default connect(mapStateToProps, actions)(Quiz);
