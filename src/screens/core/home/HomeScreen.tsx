import React from 'react';

import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';

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
}: BottomTabScreenProps<RootBottomNavParamList, 'Home'>): React.JSX.Element => {
  const theme = useAppSelector(state => state.theme);

  const allPosts = useAppSelector(state => state.posts.allPosts);

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

  return (
    <SafeAreaView style={CommonStyle(theme).commonContainer}>
      <Text style={HomeStyle(theme).homeScreenText}>Home Screen</Text>
      <Button onPress={() => SeeUserInfo()} title="See" />
      <ScrollView showsVerticalScrollIndicator={false}>
        {Object.keys(allPosts).length > 0 &&
          Object.keys(allPosts).map((author: string) => {
            return (
              author && (
                <View key={author}>
                  <Text>{author}</Text>

                  {allPosts[author].map(
                    (newitem: SinglePostType, index: number) => {
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
                    },
                  )}
                </View>
              )
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
};
