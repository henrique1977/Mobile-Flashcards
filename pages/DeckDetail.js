import React from 'react';
import { StyleSheet, View, Text, StatusBar, Animated, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/Decks';
import { startQuiz } from '../redux/actions/Quiz';

import { getCardCountExpression, selectDeckByTitle, totalCards } from '../library/functions';
import Button from '../components/Button';

const screenWidth = Dimensions.get('window').width; //full width
const screenHeight = Dimensions.get('window').height; //full height

class DeckDetail extends React.Component {

  constructor(props) {
      super(props);
      this.deckTitle = this.props.navigation.getParam('deckTitle', null);
      this.state = {
        opacity: new Animated.Value(0)
      };
  }

  componentDidMount = () => {
    const {opacity} = this.state;

    Animated.timing(opacity, {
      toValue: 1,
      duration: 1200
    }).start();

  }

  startQuiz = (deck) => {
    this.props.startQuiz();
    this.props.navigation.navigate('Quiz', {deck: deck, startQuiz: this.startQuiz});
  };

  render() {

    const deck = selectDeckByTitle(this.deckTitle, this.props.decks);
    const {opacity} = this.state;

    return(
      <Animated.View style={[styles.container, {opacity}]}>
        <View style={styles.content}>
          <Text style={styles.title}>{deck.title}</Text>
          <Text style={styles.numCards}>{getCardCountExpression(totalCards(deck))}</Text>
        </View>
        <View style={styles.buttons}>
          <Button onPress={() => {
              this.props.navigation.navigate('AddCard', {deck: deck, refresh: this.handleOnNavigateBack});
            }}
            buttonStyle={styles.buttonWhite}
          >Add Card</Button>
          <Button buttonStyle={styles.button} onPress={() => this.startQuiz(deck)} >Start Quiz</Button>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 30,
  },
  content: {
    flex: 7,
    alignItems: 'center',
  },
  buttons: {
    flex: 4,
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
  },
  title: {
    fontSize: 36,
  },
  numCards: {
    paddingTop: 20,
    fontSize: 16,
    color: "#333333",
  }
});

const mapStateToProps = state => {
  return ({
    decks: state.decksReducer,
    control: state.controlReducer
  });
};

const mapDispatchToProps = {
  ...actions,
  startQuiz,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail);


// const mapStateToProps = state => {
//   return ({
//     decks: state.decksReducer.decks,
//     control: state.controlReducer
//   });
// };


//export default connect(mapStateToProps, {...actions, refresh})(DeckDetail);
//export default connect(mapStateToProps, actions)(DeckDetail);
