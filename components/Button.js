import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Button = ({children, onPress, buttonStyle}) => {

  const style = (buttonStyle) ? buttonStyle : styles.button;

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <Text style={style}>{children}</Text>
        </TouchableOpacity>
      </View>
  );

}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    color: 'white',
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#CCCCCC",
    fontWeight: 'bold',
    textAlign: 'center',
    overflow: 'hidden',
  }
});

export default Button;
