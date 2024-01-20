import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapView from 'react-native-maps';

const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Map' component={MapScreen}></Tab.Screen>
      <Tab.Screen name='Carpool' component={CarpoolScreen}></Tab.Screen>
      <Tab.Screen name="Settings" component={SettingsScreen}></Tab.Screen>
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigator/>
    </NavigationContainer>
  );
}

function MapScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MapView style={styles.map} />
    </View>
  );
}

function CarpoolScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
