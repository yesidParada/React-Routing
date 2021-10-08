import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

function HomeScreen(props) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <TouchableHighlight
          onPress={() => props.navigation.navigate('Profile')}
        >
          <Text>Profile</Text>
        </TouchableHighlight>
      </View>
    );
  }

export default HomeScreen;
