import React from 'react';
import { StyleSheet, View, Text, StatusBar} from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/Decks';
import { startQuiz } from '../redux/actions/Quiz';

import { getCardCountExpression, selectDeckByTitle, totalCards } from '../library/functions';
import Button from '../components/Button';

class DeckDetail extends React.Component {

  constructor(props) {
      super(props);

      console.log('Constr called');
      this.deckTitle = this.props.navigation.getParam('deckTitle', null);
  }

  // componentDidMount = () => {
  //   console.log('COMPONENT Did mount on deck detail');
  //   const deck = this.props.navigation.getParam('deck', null);
  // }

  handleOnNavigateBack = (numOfCards) => {
    console.log('REFRESHH');

    console.log('Refresh was called!');
    //this.props.refresh();
    // this.setState({
    //   numOfCards: numOfCards
    // })
  }


  startQuiz = (deck) => {
    console.log('start quiz was pressed.');
    this.props.startQuiz();
    this.props.navigation.navigate('Quiz', {deck: deck, startQuiz: this.startQuiz});
  };

  render() {

    console.log('RENDER CALLED DECK *#*#*##! ');
    console.log(this.state);
    console.log(this.props);

    const deck = selectDeckByTitle(this.deckTitle, this.props.decks);
    console.log(deck);


    return(
      <View style={styles.container}>
        <Text style={styles.title}>{deck.title}</Text>
        <Text style={styles.numCards}>{getCardCountExpression(totalCards(deck))}</Text>
        <Button onPress={() => {
            this.props.navigation.navigate('AddCard', {deck: deck, refresh: this.handleOnNavigateBack});
          }}
        >Add Card</Button>
        <Button style={styles.button} onPress={() => this.startQuiz(deck)} >Start Quiz</Button>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30
  },
  button: {
    width: 200,
    height: 50,
    padding: 8,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    margin: 10
  },
  list: {
    height: 30
  },
  title: {
    fontSize: 24
  },
  numCards: {
    fontSize: 16,
    color: "#333333"
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
