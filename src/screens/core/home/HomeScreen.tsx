import React from 'react';

import {Alert, Button, SafeAreaView, Text, View} from 'react-native';

import {CommonStyle} from '../../../assets/styles/commonStyle';

import {useAppSelector} from '../../../redux/hooks';
import {RootBottomNavParamList} from '../../../models/navigationTypes';
import {HomeStyle} from '../../../assets/styles/screens/homeScreenStyle';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {useFocusEffect} from '@react-navigation/native';
import {BackHandler} from 'react-native';
import {tAppName} from '../../../utils/text_strings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SinglePostType} from '../../../models/postModel';

const SeeUserInfo = () => {
  AsyncStorage.getItem('auth_token').then(value => {
    console.log(value);
  });
};

export const HomeScreen = ({
  route,
  navigation,
}: BottomTabScreenProps<RootBottomNavParamList>): React.JSX.Element => {
  const theme = useAppSelector(state => state.theme);

  let allPosts = useAppSelector(state => {
    let a: {[key: string]: any} = {};
    for (let key in state.posts) {
      if (key !== '_persist') {
        a[key] = state.posts[key];
      }
    }
    return a;
  });

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert(tAppName, 'Do you really want to exit the app..?', [
          {
            text: 'YES',
            onPress: () => {
              BackHandler.exitApp();
            },
          },
          {text: 'NO', onPress: () => null},
        ]);
        // Return true to stop default back navigaton
        // Return false to keep default back navigaton
        return true;
      };

      // Add Event Listener for hardwareBackPress
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () => {
        // Once the Screen gets blur Remove Event Listener
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
      };
    }, []),
  );

  console.log(allPosts);

  return (
    <SafeAreaView style={CommonStyle(theme).commonContainer}>
      <Text style={HomeStyle(theme).homeScreenText}>Home Screen</Text>
      <Button onPress={() => SeeUserInfo()} title="See" />
      {Object.values(allPosts).length > 0 &&
        Object.values(allPosts).map((item: SinglePostType[]) => {
          return (
            item &&
            item.map((newitem: SinglePostType, index: number) => {
              return (
                <View
                  key={index}
                  style={{
                    flexDirection: 'column',
                    marginVertical: 20,
                  }}>
                  <Text>{newitem.language}</Text>
                  <Text>{newitem.title}</Text>
                  <Text>{newitem.code}</Text>
                  <Text>{newitem.createdDate}</Text>
                </View>
              );
            })
          );
        })}
    </SafeAreaView>
  );
};
