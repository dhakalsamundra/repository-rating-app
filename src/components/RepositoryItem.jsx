import React from 'react';
import { View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import Text from './Text';

const cardHeaderStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    marginTop: 5,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 5,
    marginTop: 5,
    marginLeft: 20
  },
  avatarContainer: {
    paddingRight: 15 ,
  },
  infoContainer: {
    flexGrow: 1,
    flexShrink:1,
    
  },
  Language: {
    paddingVertical: 15,
    width: 80,
    borderRadius:10,
    backgroundColor: '#0366d6'
   }
});

const CardHeader = ({item}) => {
  return (
    <View style={cardHeaderStyles.container}>
      <View style={cardHeaderStyles.avatarContainer}>
        <Image style={cardHeaderStyles.avatar} source={{uri:item.ownerAvatarUrl}} />
      </View>
      <View style={cardHeaderStyles.infoContainer}>
        <Text fontWeight="bold" fontSize="subheading">{item.fullName}</Text>
        <Text color="textSecondary">{item.description}</Text>
        <View style={cardHeaderStyles.Language}><Text fontSize="subheading">{item.language}</Text></View>
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
    justifyContent: 'flex-start',
  }
});

const CardFooter = ({item}) => {
  function convert(value)
{
    if(value>=1000000)
    {
        value=(value/1000000)+"M"
    }
    else if(value>=1000)
    {
        value=(value/1000)+"K";
    }
    return value;
}
  const fork = item.forksCount
  const rate = item.ratingAverage
  const review = item.reviewCount
  const star = item.stargazersCount

  const forksCount = convert(fork)
  const rateCount = convert(rate)
  const reviewCount = convert(review)
  const starCount = convert(star)

  return (
    <View style={cardFooterStyles.container}>
      <View style={cardFooterStyles.footer}>
        <Text>{forksCount}</Text><Text>Forks</Text>
      </View>
      <View style={cardFooterStyles.footer}>
        <Text>{rateCount}</Text><Text>Rate</Text>
      </View>
      <View style={cardFooterStyles.footer}>
        <Text>{reviewCount}</Text><Text>Review</Text>
      </View>
      <View style={cardFooterStyles.footer}>
       <Text>{starCount}</Text><Text>Stars</Text>
      </View>
    </View>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
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
