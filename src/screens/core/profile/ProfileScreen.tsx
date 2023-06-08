import React, {useMemo, useState} from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import {CommonStyle} from '../../../assets/styles/commonStyle';
import {useAppSelector} from '../../../redux/hooks';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../models/navigationTypes';
import {ScreenHeader} from '../../../components/other/ScreenHeader';
import {
  Dimensions,
  FlatList,
  Image,
  SectionList,
  Text,
  View,
} from 'react-native';
import {getUserInfo} from '../../../utils/helper';
import {UserDataFromToken} from '../../../models/userModel';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {SinglePostType} from '../../../models/postModel';
import {COLORS} from '../../../utils/colors';

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

  const languageWiseUSerPosts = useMemo(() => {
    if (userPostsData) {
      let data: {title: string; data: SinglePostType[]}[] = [];
      Object.values(userPostsData).map(post => {
        if (data.length <= 0) {
          let a: {title: string; data: SinglePostType[]} = {
            title: '',
            data: [],
          };

          a['title'] = post.language;
          a['data'].push(post);

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
            data.push({title: post.language, data: [post]});
          }
        }
      });
      return data;
    }
  }, [userPostsData]);

  useMemo(async () => {
    let getData: [UserDataFromToken] = await getUserInfo();

    let getPostsData = allPosts[getData[0].email];

    setUserData(getData);
    setUserPostsData(getPostsData);
  }, []);

  return (
    <SafeAreaView style={CommonStyle(theme).commonContainer}>
      <ScreenHeader
        theme={theme}
        navigation={navigation}
        headerTitle={'Profile'}
        headerTitleAlign="center"
        backIcon={'chevron-left'}
        showBackButton={true}
      />

      <View style={CommonStyle(theme).commonContentView}>
        <View style={CommonStyle(theme).commonContent}>
          {languageWiseUSerPosts && (
            <SectionList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: '25%',
              }}
              sections={languageWiseUSerPosts}
              keyExtractor={(item, index) => item.id + index}
              ListHeaderComponent={
                <>
                  {/* User Profile Data Header part  */}
                  {userData && userData[0] && (
                    <View
                      style={{
                        flex: 1,
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

                  {/* Other sections */}
                  <View
                    style={{
                      flex: 1,
                      marginVertical: '5%',
                    }}>
                    <Text
                      style={{
                        marginBottom: '5%',
                        color: theme.text,
                        fontWeight: '400',
                        fontSize: 20,
                      }}>
                      My Posts
                    </Text>
                  </View>
                </>
              }
              renderSectionHeader={({section: {title, data}}) => (
                <View
                  key={title}
                  style={{
                    marginVertical: '2%',
                  }}>
                  <Text
                    style={{
                      color: theme.greenBlueHeading,
                      fontSize: 20,
                      marginBottom: 10,
                    }}>
                    {title}
                  </Text>

                  <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={data}
                    renderItem={({item, index}) => {
                      return (
                        <View
                          key={item.id}
                          style={{
                            backgroundColor: COLORS.grey,
                            width: Dimensions.get('window').width * 0.65,
                            height: Dimensions.get('window').height * 0.3,
                            marginRight:
                              index >= 0 &&
                              index < languageWiseUSerPosts.length - 1
                                ? 20
                                : 0,
                            borderWidth: 2,
                            borderRadius: 10,
                            borderColor: COLORS.grey,
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}
                          onTouchEnd={() => {
                            navigation.navigate('SeeCode', {
                              title: title,
                              data: item,
                            });
                          }}>
                          <Text
                            style={{
                              color: COLORS.black,
                              fontWeight: '400',
                              fontSize: 18,
                            }}>
                            {item.title}
                          </Text>
                        </View>
                      );
                    }}
                  />
                </View>
              )}
              renderItem={({item, index}) => {
                return <></>;
              }}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};
