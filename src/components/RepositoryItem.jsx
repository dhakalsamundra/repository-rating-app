import React from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import Text from './Text';

const cardHeaderStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
  },
  avatar: {
    width: 45,
    height: 45,
  },
  avatarContainer: {
    flexGrow: 0,
    paddingRight: 15,
  },
  infoContainer: {
    flexGrow: 1,
  },
  Language: {
    paddingVertical: 15,
    width: 80,
    borderRadius:10,
    backgroundColor: '#0366d6',
    borderWidth: 1,
    borderColor: 'black' 
   }
});

const CardHeader = ({item}) => {
  console.log('this is the cardHeader', item)
  return (
    <View style={cardHeaderStyles.container}>
      <View style={cardHeaderStyles.avatarContainer}>
        <Image style={cardHeaderStyles.avatar} source={{uri:item.ownerAvatarUrl}} />
      </View>
      <View style={cardHeaderStyles.infoContainer}>
        <Text fontWeight="bold" fontSize="subheading">{item.fullName}</Text>
        <Text color="textSecondary">{item.description}</Text>
        <View style={cardHeaderStyles.Language}><Text fontWeight="bold" fontSize="subheading">{item.language}</Text></View>
      </View>
    </View>
  );
};

const cardFooterStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  footer: {
    flexDirection: 'column',
    borderRadius:10,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'flex-start'
  }
});

const CardFooter = ({item}) => {
  return (
    <View style={cardFooterStyles.container}>
      <View style={cardFooterStyles.footer}>
        <Text>{item.forksCount}</Text><Text>Forks</Text>
      </View>
      <View style={cardFooterStyles.footer}>
        <Text>{item.ratingAverage}</Text><Text>Rate</Text>
      </View>
      <View style={cardFooterStyles.footer}>
        <Text>{item.reviewCount}</Text><Text>Review</Text>
      </View>
      <View style={cardFooterStyles.footer}>
       <Text>{item.stargazersCount}</Text><Text>Stars</Text>
      </View>
    </View>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    borderColor: 'red',
    justifyContent: 'space-evenly'
  },
});

const RepositoryItem = ({item}) => {
  return (
    <View style={cardStyles.container}>
      <CardHeader item = {item} />
      <CardFooter item = {item} />
    </View>
  );
};

export default RepositoryItem;
