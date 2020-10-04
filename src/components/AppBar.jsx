import React from 'react';
import { Text,View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'brown',
    display:'flex'
  },
  flexItem: {
    backgroundColor: 'blue',
    flexGrow: 1

  }
  
});

const AppBar = () => {
  return <View style={styles.container}>
          <Text>Samundra..</Text>
          
       </View>;
};

export default AppBar;