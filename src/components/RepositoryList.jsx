import { FlatList, View, StyleSheet } from 'react-native';
import React from 'react';
import useRepositories from '../hooks/useRepositories';

import RepositoryItem from './RepositoryItem';
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories } = useRepositories();
  console.log('I am samundra')
   // Get the nodes from the edges array
   const repositoryNodes = repositories
   ? repositories.edges.map(edge => edge.node)
   : [];
   console.log()



  return (
    (loading, error, data) => {
      if (loading) return <h4>Loading...</h4>;
      if (error) console.log(error);
      return data
    },
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem= {({item})=> (
        <RepositoryItem item = {item} />
      )} />
  );
};

export default RepositoryList;