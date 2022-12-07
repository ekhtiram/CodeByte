import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../redux/slice/userSlice';

export default function Home() {
  const navigation = useNavigation();

  const data = [
    {id: 1, name: 'dasjd', age: 13},
    {id: 2, name: 'dasjd', age: 13},
  ];
  const user = useSelector(state => state.users.users);
  console.log(user, 'dasjd');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const renderItem = props => {
    const item = props?.item;

    return (
      <>
        <TouchableOpacity
          onPress={() => navigation?.navigate('Details')}
          style={{
            backgroundColor: 'orange',
            borderRadius: 8,
            width: 150,
            height: 100,
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginBottom: 10,
            marginRight: 10,
          }}>
          {/*<Image*/}
          {/*  source={require('@expo/snack-static/react-native-logo.png')}*/}
          {/*/>*/}
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <Text>{item?.name}</Text>
            <Text>{item?.age}</Text>
          </View>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 10,
        }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{}}
          numColumns={2}
          data={data}
          renderItem={renderItem}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            borderRadius: 8,
            width: 100,
            height: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
