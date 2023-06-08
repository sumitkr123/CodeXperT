import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../models/navigationTypes';
import {Text} from 'react-native-paper';
import {View} from 'react-native';
import {SinglePostType} from '../../../models/postModel';
import {CommonStyle} from '../../../assets/styles/commonStyle';
import {SafeAreaView} from 'react-native-safe-area-context';

export const SeeCode = ({
  route,
}: NativeStackScreenProps<
  RootStackParamList,
  'SeeCode'
>): React.JSX.Element => {
  const props: Readonly<{title: string; data: SinglePostType} | undefined> =
    route.params;

  return (
    <SafeAreaView style={CommonStyle().commonContainer}>
      <View style={CommonStyle().commonContentView}>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <Text>{props?.data.language}</Text>
          <Text>{props?.data.title}</Text>
          <Text>{props?.data.code}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
