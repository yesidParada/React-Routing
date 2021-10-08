import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

function ProfileScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Profile Screen</Text>
        <TouchableHighlight
          onPress={() => props.navigation.navigate('Home')}
        >
          <Text>Home</Text>
        </TouchableHighlight>
      </View>
    );
  }

export default ProfileScreen;
