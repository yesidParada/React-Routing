import * as React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';

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

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;