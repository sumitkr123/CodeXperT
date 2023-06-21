import React, {useMemo, useState} from 'react';

import {CommonStyle} from '../../../../assets/styles/commonStyle';
import {useAppSelector} from '../../../redux/hooks';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../models/navigationTypes';
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {getUserInfo} from '../../../utils/helper';
import {UserData} from '../../../models/userModel';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SinglePostType} from '../../../models/postModel';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PostCard, ScreenHeader} from '../../../components';

export const ProfileScreen = ({
  route,
  navigation,
}: NativeStackScreenProps<
  RootStackParamList,
  'Profile'
>): React.JSX.Element => {
  const theme = useAppSelector(state => state.theme);

  const allPosts = useAppSelector(state => state.posts.allPosts);

  const [userData, setUserData] = useState<[UserData]>();

  const [userPostsData, setUserPostsData] = useState<SinglePostType[]>([]);

  useMemo(async () => {
    let getData = route.params?.authorData
      ? [route.params.authorData]
      : await getUserInfo();

    let getPostsData = allPosts[getData[0].email];

    setUserData(getData);
    setUserPostsData(getPostsData);
  }, [allPosts]);

  const languageWiseUserPosts = useMemo(() => {
    if (userPostsData) {
      let data: {title: string; data: SinglePostType[]; horizontal: boolean}[] =
        [];
      Object.values(userPostsData).map(post => {
        if (data.length <= 0) {
          let a: {title: string; data: SinglePostType[]; horizontal: boolean} =
            {
              title: '',
              data: [],
              horizontal: false,
            };

          a['title'] = post.language;
          a['data'].push(post);
          a['horizontal'] = true;

          data.push(a);
        } else {
          let flag = 0;
          for (let i of data) {
            if (i.title === post.language) {
              i.data.push(post);
              flag = 1;
              break;
            }
          }
          if (flag !== 1) {
            data.push({title: post.language, data: [post], horizontal: true});
          }
        }
      });
      return data;
    }
  }, [userPostsData]);

  return (
    <SafeAreaView style={CommonStyle(theme).commonContainer}>
      <ScreenHeader
        theme={theme}
        navigation={navigation}
        headerTitle={'Profile'}
        headerTitleAlign="center"
        leftIcon={route.params?.isVisitorVisiting ? 'chevron-left' : 'cog'}
        showBackButton={true}
      />

      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}>
        <View style={CommonStyle(theme).commonContentView}>
          <View style={CommonStyle(theme).commonContent}>
            <View>
              {userData && userData[0] && (
                <View
                  style={{
                    flexDirection: 'row',
                    marginVertical: '2%',
                    alignItems: 'center',
                  }}>
                  <Image
                    source={require('../../../../assets/images/profile_bg.png')}
                    style={{
                      height: 140,
                      width: 120,
                    }}
                  />

                  <View
                    style={{
                      flexDirection: 'column',
                      marginLeft: 15,
                    }}>
                    <Text
                      style={{
                        color: theme.text,
                        fontWeight: '500',
                        fontSize: 23,
                      }}>
                      {userData[0]?.name}
                    </Text>
                    <Text
                      style={{
                        color: theme.text,
                        fontWeight: '400',
                        fontSize: 18,
                      }}>
                      {userData[0]?.email}
                    </Text>
                  </View>

                  {route.params?.isVisitorVisiting ? null : (
                    <Icons
                      name="pencil"
                      size={25}
                      color={theme.blackWhiteIconColor}
                      style={{
                        position: 'absolute',
                        right: 0,
                        textDecorationStyle: 'solid',
                        textDecorationColor: theme.text,
                        textDecorationLine: 'underline',
                      }}
                    />
                  )}
                </View>
              )}

              {languageWiseUserPosts && (
                <View>
                  <View
                    style={{
                      flex: 1,
                      marginTop: '5%',
                      marginBottom: '2%',
                    }}>
                    <Text
                      style={{
                        color: theme.text,
                        fontWeight: '400',
                        fontSize: 20,
                      }}>
                      My Posts
                    </Text>
                  </View>

                  {languageWiseUserPosts?.map(newitem => {
                    return (
                      <View
                        key={newitem.title}
                        style={{
                          marginTop: '8%',
                        }}>
                        <Text
                          style={{
                            color: theme.greenBlueHeading,
                            fontSize: 20,
                            marginBottom: 10,
                          }}>
                          {newitem.title}
                        </Text>

                        <FlatList
                          scrollEnabled={newitem.horizontal ? true : false}
                          horizontal={newitem.horizontal}
                          // pagingEnabled={true}
                          nestedScrollEnabled={true}
                          showsHorizontalScrollIndicator={false}
                          data={newitem.data}
                          renderItem={({item}) => {
                            return (
                              <View
                                style={{
                                  width: Dimensions.get('window').width * 0.9,
                                }}>
                                <PostCard
                                  item={item}
                                  author={userData?.[0].email}
                                />
                              </View>
                            );
                          }}
                          ItemSeparatorComponent={() => {
                            return (
                              <View
                                style={{
                                  width: 30,
                                }}
                              />
                            );
                          }}
                        />
                      </View>
                    );
                  })}
                </View>
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
