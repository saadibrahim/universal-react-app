import React from 'react';
import {View, ActivityIndicator} from 'react-native';

import styles from './styles';

export default function Home({title}) {
  return (
    <View style={styles.wrapper}>
      <ActivityIndicator size="large" color="#182955" />
    </View>
  );
}
