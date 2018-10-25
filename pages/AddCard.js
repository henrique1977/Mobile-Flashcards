import React from 'react';
import { StyleSheet, View, Text, TextInput, Dimensions } from 'react-native'
import { connect } from 'react-redux';
import * as actions from '../redux/actions/Decks';
import Button from '../components/Button';

const screenWidth = Dimensions.get('window').width; //full width
const screenHeight = Dimensions.get('window').height; //full height

class AddCard extends React.Component {
  constructor(props) {
      super(props);
      this.state = {question: "", answer: ""};
  }

  componentDidMount = () => {
    const deck = this.props.navigation.getParam('deck', null);
    this.refresh = this.props.navigation.getParam('refresh', null);
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
    this.props.navigation.goBack();
  }

  getNewCardsCount = () => (this.deck.questions.length + 1);

  render() {

      return (
        <View style={styles.container}>
          <Text style={styles.title}>Add a card to your deck</Text>
          <TextInput
            multiline = {true}
            numberOfLines = {3}
            value={this.state.question}
            style={styles.input}
            onChangeText={this.handleTextQuestionChange}
            placeholder='Question'
          />
          <TextInput
            multiline = {true}
            numberOfLines = {3}
            value={this.state.answer}
            style={styles.input}
            onChangeText={this.handleTextAnswerChange}
            placeholder='Answer'
          />
          <Button buttonStyle={styles.buttonWhite} onPress={this.onPressAddCard}>Add Card</Button>
        </View>
  )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 30,
    padding: 12,
  },
  input: {
    width: screenWidth * 0.85,
    height: 80,
    padding: 8,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    margin: 10
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

const mapStateToProps = state => {
  return ({
    decks: state.decksReducer,
  });
};

export default connect(mapStateToProps, actions)(AddCard);
