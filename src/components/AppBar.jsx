import React from 'react';
import { Text,View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import theme from '.././theme'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';


import RepositoryList from './RepositoryList';
import SignIn from './SignIn'

const Tab = createMaterialTopTabNavigator();


const AppBar = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Repositories" component={RepositoryList} />
      <Tab.Screen name="Sign in" component={SignIn} />
    </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppBar;