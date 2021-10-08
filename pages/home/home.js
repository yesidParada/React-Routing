import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export const HomeScreenComponent = (props) => {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen 1</Text>
        <TouchableHighlight
          onPress={() => props.navigation.navigate('Profile')}
        >
          <Text>Profile</Text>
        </TouchableHighlight>
      </View>
    );
}
