import React from 'react';
import { Link } from "react-router-native";
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
const styles = StyleSheet.create({
    container: {
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#24292e',
      display: "flex",
      flexDirection: "row"
    },
    textItem: {
        color: '#ffffff',
        margin: 20
    }
  });
  
  const AppBar = () => {
    return (
              <View style={styles.container}>
                <ScrollView horizontal={true}>
                  <Link to="/">
                    <Text style={styles.textItem}>Repositories</Text>
                  </Link>
                  <Link to="/signin">
                    <Text style={styles.textItem}>Sign In</Text>
                  </Link>
                </ScrollView>
              </View>
            );
  };
  
  export default AppBar;