import React from 'react';
import {Image, View, Text} from 'react-native';

import styles from './styles';

export default function Home({user}) {
  const {avatar, first_name, last_name} = user;

  return (
    <View style={styles.user}>
      <Image style={styles.avatar} source={{uri: avatar}} />
      <Text style={styles.name}>
        {first_name} {last_name}
      </Text>
    </View>
  );
}
