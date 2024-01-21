import { StatusBar } from 'expo-status-bar';
import { FlatList, Pressable, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapView, {Marker} from 'react-native-maps';
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

const requestLocation = () => {
  setLoading(true);
  setLocation(null);
  setError(null);

  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 30000,
    rationale: {
      title: 'Location permission',
      message: 'The app needs the permission to request your location.',
      buttonPositive: 'Ok',
    },
  })
    .then(newLocation => {
      setLoading(false);
      setLocation(newLocation);
    })
    .catch(ex => {
      if (isLocationError(ex)) {
        const {code, message} = ex;
        console.warn(code, message);
        setError(code);
      } else {
        console.warn(ex);
      }
      setLoading(false);
      setLocation(null);
    });
};



function MapScreen() {
  let loc = requestLocation;
  return (
    <>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: loc.latitude,
          longitude: loc.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      <Pressable style={styles.circleButton}>
        <Text adjustsFontSizeToFit>+</Text>
      </Pressable>
    </>
  );
}

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-47f-bd96-145571e29d72',
    title: 'Fourth Item',
  },
  {
    id: '58694a0f-3da1-471fbd96-145571e29d72',
    title: 'Fifth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14551e29d72',
    title: 'Sixth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14557e29d72',
    title: 'Seventh Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96145571e29d72',
    title: 'Eighth Item',
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
        renderItem={({item}) => <View style={{marginVertical: 10, backgroundColor: 'gold', alignSelf: 'center', width: '90%', height: '45%', justifyContent: 'center', borderColor: 'black', borderWidth: 1}}><Text style={{textAlign: 'center'}}>{item.title}</Text></View>}
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

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigator/>
    </NavigationContainer>
  );
}