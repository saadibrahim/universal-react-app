import React from 'react';
import {SafeAreaView, FlatList, Text} from 'react-native';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import SingleUser from '../../components/SingleUser';

import styles from './styles';

export default function Home({users}) {
  return (
    <>
      <Header title="Users" />
      <SafeAreaView style={styles.wrapper}>{renderContent(users)}</SafeAreaView>
    </>
  );
}

function renderContent(users) {
  const {fetching, data, error} = users;

  if (fetching) {
    return <Loader />;
  }

  return (
    <>
      {error ? (
        <Text>{error}</Text>
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => {
            return <SingleUser user={item} />;
          }}
          keyExtractor={(item) => item.id + ''}
        />
      )}
    </>
  );
}
