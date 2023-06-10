import {Dimensions, Modal, ScrollView, Text, View} from 'react-native';
import {COLORS} from '../../utils/colors';
import {SinglePostType} from '../../models/postModel';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useMemo, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {addLikePost, removeLikePost} from '../../redux/ducks/posts_slice';
import {UserDataFromToken} from '../../models/userModel';
import {getUserInfo} from '../../utils/helper';

type PostCardProps = {
  item: SinglePostType;
  showLanguage?: boolean;
  author?: string;
};

export const PostCard = ({item, showLanguage, author}: PostCardProps) => {
  const [liked, setLiked] = useState<boolean>(item.likers.includes(author!));

  const theme = useAppSelector(state => state.theme);

  const [showLikeList, setShowLikeList] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  useMemo(async () => {
    let getData: [UserDataFromToken] = await getUserInfo();

    if (liked === true) {
      let newItem = {...item};

      let newItemLikers = [...item.likers];

      if (!newItemLikers.includes(getData[0].email)) {
        newItemLikers.push(getData[0].email);

        newItem.likes += 1;
        newItem.likers = newItemLikers;

        dispatch(addLikePost({payloadData: newItem, authorName: author!}));
        return;
      }
    }

    if (liked === false) {
      let newItem = {...item};

      let newItemLikers = [...item.likers];

      if (newItemLikers.includes(getData[0].email)) {
        newItem.likers = newItemLikers.filter(
          newInnerItem => newInnerItem !== getData[0].email,
        );
        newItem.likes -= 1;
        dispatch(removeLikePost({payloadData: newItem, authorName: author!}));
        return;
      }
    }
  }, [liked]);

  return (
    <>
      <View
        style={{
          backgroundColor: COLORS.grey,
          width: Dimensions.get('window').width * 0.65,
          height: Dimensions.get('window').height * 0.3,
          borderWidth: 1,
          marginTop: 8,
          borderRadius: 10,
          borderColor: COLORS.black,
          flexDirection: 'column',
        }}>
        <ScrollView
          nestedScrollEnabled={true}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={{
            padding: 20,
          }}>
          {showLanguage && (
            <Text
              style={{
                color: COLORS.black,
                fontSize: 17,
                fontWeight: '500',
                marginBottom: 15,
              }}>
              Language :- {item.language}
            </Text>
          )}
          <Text
            style={{
              color: COLORS.black,

              fontSize: 16,
              fontWeight: '500',
            }}>
            Title :- {item.title}
          </Text>

          <Text
            style={{
              color: COLORS.black,
              fontSize: 16,
              fontWeight: '500',
              marginTop: 15,
            }}>
            Code :- {'\n'}
          </Text>
          <Text
            style={{
              color: COLORS.black,
              fontSize: 15,
              fontWeight: '400',
            }}>
            {item.code}
          </Text>
        </ScrollView>
      </View>

      <Icons
        name={
          liked || item.likers.includes(author!) ? 'heart' : 'heart-outline'
        }
        size={25}
        color={
          liked || item.likers.includes(author!) ? COLORS.red : COLORS.black
        }
        onPress={() => {
          setLiked(liked === true ? false : true);
        }}
        style={{
          marginTop: '3%',
        }}
      />
      <Text style={{color: theme.text}}>{item.likes}</Text>
      <Text
        onPress={() => setShowLikeList(true)}
        style={{color: COLORS.blue, textDecorationLine: 'underline'}}>
        View All Likes
      </Text>

      <Modal
        animationType="slide"
        transparent
        visible={showLikeList}
        presentationStyle="overFullScreen"
        onDismiss={() => setShowLikeList(false)}>
        <ScrollView
          contentContainerStyle={{
            flex: 1,
            alignSelf: 'center',
            position: 'absolute',
            marginVertical: '30%',
            elevation: 5,
            height: Dimensions.get('window').height * 0.6,
            width: Dimensions.get('window').width * 0.8,
            backgroundColor: '#fff',
            borderRadius: 10,
            padding: 30,
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
            }}>
            <Icons
              name="close"
              size={25}
              color={COLORS.black}
              onPress={() => setShowLikeList(false)}
            />
            {item.likers.length >= 1 && (
              <>
                {Object.values(item.likers).map((item, index) => {
                  return (
                    <View
                      key={item + index}
                      style={{
                        flex: 1,
                        paddingLeft: 5,
                        height: 50,
                      }}>
                      <Text
                        style={{
                          width: '92%',
                          color: COLORS.black,
                        }}>
                        {item}
                      </Text>
                    </View>
                  );
                })}
              </>
            )}
          </View>
        </ScrollView>
      </Modal>
    </>
  );
};
