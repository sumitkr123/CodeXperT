import {Image, Text, View} from 'react-native';
import {SinglePostType} from '../../models/postModel';
import {PostCard} from './PostCards';
import {User} from '../../models/userModel';
import {Theme} from '../../models/themeTypes';

type HomePostProps = {
  author: string;
  authorData: (author: string) => User | undefined;
  theme: Theme;
  newitem: SinglePostType;
};

export const HomePost = ({
  author,
  authorData,
  theme,
  newitem,
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
        }}>
        <Image
          source={require('../../assets/images/profile_bg.png')}
          style={{
            height: 50,
            width: 50,
          }}
        />
        {authorData(author) && authorData(author)?.name && (
          <Text
            style={{
              color: theme.text,
              fontWeight: '600',
              marginLeft: 5,
            }}>
            {authorData(author)?.name}
          </Text>
        )}
      </View>

      <PostCard item={newitem} showLanguage={true} />
    </View>
  );
};
