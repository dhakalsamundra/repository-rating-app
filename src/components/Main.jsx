import React from 'react';
import {  StyleSheet, View, StatusBar } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './RepositoryList';
import SignIn from './SignIn'
import AppBar from './AppBar';
import PingIn from './PingIn';
import theme from '../theme';


const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8'
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content"/>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/signin" exact>
          <SignIn />
        </Route>
        <Redirect to="/" />
      </Switch>

    </View>
  );
};

export default Main;