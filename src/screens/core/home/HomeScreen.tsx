import React from 'react';

import {Alert, ScrollView, Text, View} from 'react-native';

import {CommonStyle} from '../../../../assets/styles/commonStyle';

import {useAppSelector} from '../../../redux/hooks';
import {
  RootBottomNavParamList,
  RootStackParamList,
} from '../../../models/navigationTypes';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps, useFocusEffect} from '@react-navigation/native';
import {BackHandler} from 'react-native';
import {tAppName} from '../../../utils/text_strings';
import {SinglePostType} from '../../../models/postModel';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Platform} from 'react-native';
import {HomePost, ScreenHeader} from '../../../components';

export const HomeScreen = ({
  navigation,
}: CompositeScreenProps<
  BottomTabScreenProps<RootBottomNavParamList, 'Home'>,
  NativeStackScreenProps<RootStackParamList, 'BottomNavBar'>
>): React.JSX.Element => {
  const theme = useAppSelector(state => state.theme);

  const users = useAppSelector(state => state.users.allUsers);

  const allPosts = useAppSelector(state => state.posts.allPosts);

  Platform.OS === 'ios'
    ? null
    : useFocusEffect(
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
      <ScreenHeader
        theme={theme}
        headerTitle={'Home'}
        // headerRight={[
        //   {
        //     icon: 'home',
        //     onPress: () => {},
        //   },
        //   {
        //     icon: 'home',
        //     onPress: () => {},
        //   },
        // ]}
      />
      {Object.keys(allPosts).length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: '25%',
          }}>
          <View style={CommonStyle(theme).commonContentView}>
            <View style={CommonStyle(theme).commonContent}>
              {Object.keys(allPosts).map((author: string) => {
                return (
                  author && (
                    <View key={author}>
                      {allPosts[author].map(
                        (newitem: SinglePostType, index: number) => {
                          return (
                            <HomePost
                              key={index}
                              theme={theme}
                              author={author}
                              authorData={() => {
                                return Object.values(users).find(
                                  users => users.email === author,
                                );
                              }}
                              newitem={newitem}
                              navigation={navigation}
                            />
                          );
                        },
                      )}
                    </View>
                  )
                );
              })}
            </View>
          </View>
        </ScrollView>
      ) : (
        <View style={CommonStyle(theme).commonContentView}>
          <View style={CommonStyle(theme).commonContent}>
            <Text
              style={{
                color: theme.text,
                fontSize: 20,
              }}>
              Be the first one to create The Code Snippet..!
            </Text>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
