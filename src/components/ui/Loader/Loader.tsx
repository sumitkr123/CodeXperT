import React from 'react';
import {ActivityIndicator, Dimensions, Text, View} from 'react-native';

export const Loader = (): React.JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 10,
          borderWidth: 2,
          borderColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          elevation: 5,
          height: Dimensions.get('window').height * 0.1,
          width: Dimensions.get('window').width * 0.8,
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 18,
            fontWeight: '500',
          }}>
          Loading...
        </Text>
        <ActivityIndicator size={30} color={'purple'} />
      </View>
    </View>
  );
};
