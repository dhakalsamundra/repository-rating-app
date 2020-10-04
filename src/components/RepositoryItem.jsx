import React from 'react';
import Constants from 'expo-constants';
import {StyleSheet, View } from 'react-native';
import Text from './Text';


const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const RepositoryItem = ({item}) => {
  console.log(item);
  return (
    <View style={styles.container}>
      <Text fontWeight="bold" fontSize="subheading">Full name: {item.fullName}</Text>
      <Text>Description:{item.description}</Text>
      <Text>Language:{item.language}</Text>
      <Text>Forks:{item.forksCount}</Text>
      <Text>Stars:{item.stargazersCount}</Text>
      <Text>Rating:{item.ratingAverage}</Text>
      <Text>Review:{item.reviewCount}</Text>
      
    </View>
  );
};

export default RepositoryItem;