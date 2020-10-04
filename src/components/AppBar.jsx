import React from 'react';
import { Text,View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import theme from '.././theme'

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: Constants.statusBarHeight,
//     backgroundColor: 'brown',
//     display:'flex'
//   },
//   flexItem: {
//     backgroundColor: 'blue',
//     flexGrow: 1

//   }
  
// });

const AppBar = () => {
  return <View style={theme.appColor}>
      <TouchableWithoutFeedback>
          <Text>Samundra..</Text>
          
       </TouchableWithoutFeedback>
       </View>;
};

export default AppBar;