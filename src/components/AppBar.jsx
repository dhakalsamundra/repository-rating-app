import React from 'react';
import { View,Text, TouchableWithoutFeedback,StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // borderWidth: 2,
    // borderColor: 'red',
  },
  link: {
    color: 'white',
    // borderWidth: 2,
    // borderColor: 'red',
  }
});

const AppBar = () => {
  return (
  <View style={styles.container}>
    <View style={styles.link}><TouchableWithoutFeedback>
    <Link to="/"><Text>Repositories</Text></Link></TouchableWithoutFeedback>
    </View>
    <View style={styles.link}>
    <TouchableWithoutFeedback>
    <Link to="/signin"><Text>Sign in</Text></Link>
    </TouchableWithoutFeedback></View>
  </View>
  );
};

export default AppBar;