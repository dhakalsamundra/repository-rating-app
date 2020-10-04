import React from 'react';
import { Text,View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import theme from '.././theme'


const AppBar = () => {
  return <View style={theme.appColor}>
      <TouchableWithoutFeedback>
          <Text>Repositories</Text>          
       </TouchableWithoutFeedback>
       </View>;
};

export default AppBar;