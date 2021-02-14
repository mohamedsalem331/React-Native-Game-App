import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../components/Button'


const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
      <Image source={require('../assets/success.png')} style={styles.Image} resizeMode="cover"/>
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <Text>Number was: {props.userNumber}</Text>
      <Button onPress={props.onRestart} >NEW GAME</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  Image: {
      width: '80%',
      height: 400
  }
});

export default GameOverScreen;
