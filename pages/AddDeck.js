import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import { connect } from 'react-redux';
import * as actions from '../redux/actions/Decks';


class AddDeck extends React.Component {
  constructor(props) {
      super(props);
      this.state = {deckTitle: ""};
  }

  handleTextChange = (title) => {
    this.setState({deckTitle: title});
  }

  onPressAddDeck = () => {

    if (this.state.deckTitle.length > 0) {
        this.props.addNewDeck(this.state.deckTitle);
        this.setState({deckTitle: ""})
        console.log('HERE chp 2');
        this.props.navigation.navigate('Decks');
    }
  }

  render() {

    //console.log(this.props);

      return (
        <View style={styles.container}>
          <Text>What's the title of your new deck?</Text>
          <TextInput
            value={this.state.deckTitle}
            style={styles.input}
            onChangeText={this.handleTextChange}
          />
          <Button
            onPress={this.onPressAddDeck}
            title="Add Deck"
            color="#841584"
            accessibilityLabel="Add a new deck"
          />
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
    decks: state.decks,
  });
};

export default connect(mapStateToProps, actions)(AddDeck);
