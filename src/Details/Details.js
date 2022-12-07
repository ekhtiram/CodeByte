import React from 'react';
import {Text, View} from 'react-native';

export default function Details() {
  return (
    <>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text>image</Text>
        <Text>firstname</Text>
        <Text>lastname</Text>
        <Text>age</Text>
        <Text>address</Text>
        <Text>postal code</Text>
        <Text>state</Text>
      </View>
    </>
  );
}
