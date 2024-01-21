import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapView, { Marker} from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
// import GetLocation from 'react-native-get-location'

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
  // let loc = requestLocation;
  return (
    <View>
      <MapView
        style={{width: '100%', height: '100%'}}
        // initialRegion={{
          // latitude: loc.latitude,
          // longitude: loc.longitude,
          // latitudeDelta: 0.0922,
          // longitudeDelta: 0.0421,
        // }}
      />
      <Pressable style={styles.circleButton}>
        <Text adjustsFontSizeToFit>+</Text>
      </Pressable>
    </View>
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
  {
    id: '586d94a0f-3da1-471f-bd96145571e29d72',
    title: 'Ninth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96145571e29d72',
    title: 'Tenth Item',
  },
  {
    id: '58694aa0f-3da1-471f-bd96145571e29d72',
    title: 'Eleventh Item',
  },
];

function CarpoolScreen() {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={{ paddingTop: insets.top, justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text style={{textAlign: 'center'}}>Active Carpool Rides:</Text>
      <FlatList
        contentContainerStyle={styles.flatList}
        data={DATA}
<<<<<<< HEAD
        renderItem={({item}) => <View style={{marginVertical: 10, backgroundColor: 'lightpink', alignSelf: 'center', width: '100%', height: '50%', justifyContent: 'center', borderColor: 'black', borderRadius: 16, borderWidth: 2}}><Text style={{textAlign: 'left', fontWeight:'bold'}}>{item.title}</Text></View>}
        keyExtractor={item => item.id} 
=======
        renderItem={({item}) => <View style={
          { borderRadius: 5,
            marginVertical: 5, 
            backgroundColor: 'gold', 
            width: 350, 
            height: 75, 
            alignItems: 'center', 
            justifyContent: 'center' }
          } ><Text style={{textAlign: 'center'}}>{item.title}</Text></View>}
          keyExtractor={item => item.id}
>>>>>>> 860c6ab25dc16b16eaea4a9bce6141ff83faf49b
      />
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
  flatList: {
    marginVertical: 0,
    marginBottom: 10,
    alignContent: 'center',
    width: '75%', 
  }
});


export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigator/>
    </NavigationContainer>
  );
}