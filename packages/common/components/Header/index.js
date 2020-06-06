import React from 'react';
import {StatusBar, SafeAreaView, View, Text} from 'react-native';

import styles from './styles';

export default function Home({title}) {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </SafeAreaView>
    </>
  );
}
