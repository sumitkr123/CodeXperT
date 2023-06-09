import {Dimensions, ScrollView, Text, View} from 'react-native';
import {COLORS} from '../../utils/colors';
import {SinglePostType} from '../../models/postModel';

type PostCardProps = {
  item: SinglePostType;
  showLanguage?: boolean;
};

export const PostCard = ({item, showLanguage}: PostCardProps) => {
  return (
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
  );
};
