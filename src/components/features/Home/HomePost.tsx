import {Image, Text, View} from 'react-native';
import {SinglePostType} from '../../../models/postModel';
import {PostCard} from '../../ui/PostCard/PostCards';
import {User} from '../../../models/userModel';
import {Theme} from '../../../models/themeTypes';
import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {
  RootBottomNavParamList,
  RootStackParamList,
} from '../../../models/navigationTypes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type HomePostProps = {
  author: string;
  authorData: () => User | undefined;
  theme: Theme;
  newitem: SinglePostType;
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<
      RootBottomNavParamList,
      keyof RootBottomNavParamList,
      undefined
    >,
    NativeStackNavigationProp<
      RootStackParamList,
      keyof RootStackParamList,
      undefined
    >
  >;
};

export const HomePost = ({
  author,
  authorData,
  theme,
  newitem,
  navigation,
}: HomePostProps) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        marginVertical: 15,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onTouchEnd={() => {
          navigation.navigate('Profile', {
            isVisitorVisiting: true,
            authorData: authorData(),
          });
        }}>
        <Image
          source={require('../../../../assets/images/profile_bg.png')}
          style={{
            height: 50,
            width: 50,
          }}
        />
        {authorData() && (
          <Text
            style={{
              color: theme.text,
              fontWeight: '600',
              marginLeft: 5,
            }}>
            {authorData()?.name}
          </Text>
        )}
      </View>

      <PostCard item={newitem} showLanguage={true} author={author} />
    </View>
  );
};
