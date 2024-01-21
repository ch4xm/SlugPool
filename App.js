import { StatusBar } from 'expo-status-bar';
import { FlatList, Pressable, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapView, { Marker} from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import GetLocation from 'react-native-get-location' 

const Tab = createBottomTabNavigator();

function BottomNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Map' component={MapScreen} options={{ headerShown: false, tabBarLabel: "Home", tabBarIcon: ({ color, size }) => ( <Ionicons name="home" color={color} size={size} />), }}></Tab.Screen>
      <Tab.Screen name='Carpool' component={CarpoolScreen} options={{ tabBarLabel: "Active Carpools", tabBarIcon: ({ color, size }) => ( <Ionicons name="car" color={color} size={size} />), }}></Tab.Screen>
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
    <>
      <MapView style={styles.map} />
      <Pressable style={styles.circleButton}>
        <Text adjustsFontSizeToFit>+</Text>
      </Pressable>
    </>
  );
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '\t\tDriver Name:\n \n Starting From: \t \tComing From: \n\n Space Available: \t Price: ',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Driver Name: \n Starting From: \t Coming From: \n Space Available: \t Price: ',
  },
  {
    id: '58694a0f3da1-471f-bd96-145571e29d72',
    title: 'Driver Name: \n Starting From: \t Coming From: \n Space Available: \t Price: ',
  },
  {
    id: '58694a0f-3da1-47f-bd96-145571e29d72',
    title: 'Driver Name: \n Starting From: \t Coming From: \n Space Available: \t Price: ',
  },
  {
    id: '58694a0f-3da1-471fbd96-145571e29d72',
    title: 'Driver Name: \n Starting From: \t Coming From: \n Space Available: \t Price: ',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14551e29d72',
    title: 'Driver Name: \n Starting From: \t Coming From: \n Space Available: \t Price: ',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14557e29d72',
    title: 'Driver Name: \n Starting From: \t Coming From: \n Space Available: \t Price: ',
  },
  {
    id: '58694a0f-3da1-471f-bd96145571e29d72',
    title: 'Driver Name: \n Starting From: \t Coming From: \n Space Available: \t Price: ',
  },
];

function CarpoolScreen() {
  return (
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <SafeAreaView>
      <Text style={{textAlign: 'center'}}>Active Carpool Rides:</Text>
      <FlatList
        contentContainerStyle={{flexDirection: 'column', alignSelf: 'center', width: '75%', height: '80%'}}
        data={DATA}
        renderItem={({item}) => <View style={{marginVertical: 10, backgroundColor: 'lightpink', alignSelf: 'center', width: '100%', height: '50%', justifyContent: 'center', borderColor: 'black', borderRadius: 16, borderWidth: 2}}><Text style={{textAlign: 'left', fontWeight:'bold'}}>{item.title}</Text></View>}
        keyExtractor={item => item.id} 
      />
    </SafeAreaView>
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
  statusBar: {
    
  },
  map: {
    width: '100%',
    height: '100%',
  },
  circleButton: {
    borderRadius: 100,
    backgroundColor: 'white',
    width: 55,
    height: 55,
    color: 'white',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOpacity: '75%',
    shadowRadius: 2.5,
    shadowOffset: 20,
    position: 'absolute',
    justifyContent: 'center',
    right: '10%',
    bottom: '5%'
},
});
