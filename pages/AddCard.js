import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { connect } from 'react-redux';
import * as actions from '../redux/actions/Decks';
import Button from '../components/Button';


class AddCard extends React.Component {
  constructor(props) {
      super(props);
      console.log('Add card const called');
      this.state = {question: "", answer: ""};
  }

  componentDidMount = () => {
    console.log('component did mount! ');
    const deck = this.props.navigation.getParam('deck', null);
    this.refresh = this.props.navigation.getParam('refresh', null);
    console.log(this.refresh);
    this.deck = this.props.decks[deck.title];
  }

  handleTextQuestionChange = (question) => {
    this.setState({question: question});
  }

  handleTextAnswerChange = (answer) => {
    this.setState({answer: answer});
  }

  onPressAddCard = () => {
    this.props.addCardToDeck(this.deck.title, this.state);
    this.refresh(this.getNewCardsCount());
    this.props.navigation.goBack();
    //this.props.navigation.replace('DeckDetail', {deck: this.deck});
  }

  getNewCardsCount = () => {
    console.log('GC');
    console.log(this.deck.questions.length);
    return this.deck.questions.length + 1;
  }

  render() {

      return (
        <View style={styles.container}>
          <Text>Add a card to your deck:</Text>
          <TextInput
            value={this.state.question}
            style={styles.input}
            onChangeText={this.handleTextQuestionChange}
          />
          <TextInput
            value={this.state.answer}
            style={styles.input}
            onChangeText={this.handleTextAnswerChange}
          />
          <Button onPress={this.onPressAddCard}>Add Card</Button>
        </View>
  )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200,
    height: 50,
    padding: 8,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    margin: 10
  }
});

const mapStateToProps = state => {
  return ({
    decks: state.decksReducer,
  });
};

export default connect(mapStateToProps, actions)(AddCard);
