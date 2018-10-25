import React from 'react';
import { StyleSheet, View, Text, FlatList, StatusBar } from 'react-native'
import { connect } from 'react-redux';
import * as actions from '../redux/actions/Decks';
import DeckListItem from '../components/DeckListItem';
import { objToArray } from '../library/functions';

class Decks extends React.Component {

  renderItem = (param) => {
    const key = param.item;
    const decks = this.props.decks;

    return (
   <DeckListItem
     deck={decks[key]}
     navigation={this.props.navigation}
   />
 )};

 keyExtractor = (item, index) => item;

 render() {

      return (
        <View style={styles.container}>
          <StatusBar
           backgroundColor="blue"
           barStyle="light-content"
         />
          <Text>List of Decks</Text>
          <FlatList
            data={Object.keys(this.props.decks)}
            renderItem={this.renderItem}
            style={styles.list}
            keyExtractor={this.keyExtractor}
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
    paddingTop: 30
  },
  input: {
    width: 200,
    height: 50,
    padding: 8,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    margin: 10
  },
  list: {
    height: 30
  }
});

const mapStateToProps = state => {
  return ({
    decks: state.decksReducer,
  });
};

export default connect(mapStateToProps, actions)(Decks);
