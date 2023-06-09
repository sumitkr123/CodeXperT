import React, {useMemo, useState} from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import {CommonStyle} from '../../../assets/styles/commonStyle';
import {useAppSelector} from '../../../redux/hooks';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../models/navigationTypes';
import {ScreenHeader} from '../../../components/other/ScreenHeader';
import {
  FlatList,
  Image,
  ScrollView,
  SectionList,
  Text,
  View,
} from 'react-native';
import {getUserInfo} from '../../../utils/helper';
import {UserDataFromToken} from '../../../models/userModel';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {SinglePostType} from '../../../models/postModel';
import {PostCard} from '../../../components/other/PostCards';

export const ProfileScreen = ({
  route,
  navigation,
}: NativeStackScreenProps<
  RootStackParamList,
  'Profile'
>): React.JSX.Element => {
  const theme = useAppSelector(state => state.theme);

  const allPosts = useAppSelector(state => state.posts.allPosts);

  const [userData, setUserData] = useState<[UserDataFromToken]>();

  const [userPostsData, setUserPostsData] = useState<SinglePostType[]>([]);

  useMemo(async () => {
    let getData: [UserDataFromToken] = await getUserInfo();

    let getPostsData = allPosts[getData[0].email];

    setUserData(getData);
    setUserPostsData(getPostsData);
  }, []);

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
        leftIcon={'settings'}
        showBackButton={true}
      />

      <View style={CommonStyle(theme).commonContentView}>
        <View style={CommonStyle(theme).commonContent}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* User Profile Data Header part  */}
            {userData && userData[0] && (
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: '2%',
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../../assets/images/profile_bg.png')}
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

                <Icons
                  name="edit"
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
              </View>
            )}

            {/* Users posts created */}
            {languageWiseUserPosts && (
              <SectionList
                scrollEnabled={false}
                nestedScrollEnabled={true}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                  paddingBottom: '25%',
                }}
                sections={languageWiseUserPosts}
                keyExtractor={(item, index) => item.id + index}
                ListHeaderComponent={
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
                }
                renderSectionHeader={({section: {title, data, horizontal}}) => (
                  <View
                    key={title}
                    style={{
                      marginTop: '8%',
                    }}>
                    <Text
                      style={{
                        color: theme.greenBlueHeading,
                        fontSize: 20,
                        marginBottom: 10,
                      }}>
                      {title}
                    </Text>

                    {horizontal ? (
                      <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={data}
                        renderItem={({item}) => {
                          return <PostCard item={item} />;
                        }}
                      />
                    ) : null}
                  </View>
                )}
                renderItem={({item, section}) => {
                  if (section.horizontal) {
                    return null;
                  }
                  return <PostCard item={item} />;
                }}
              />
            )}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
