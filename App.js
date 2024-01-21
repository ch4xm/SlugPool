import { StatusBar } from 'expo-status-bar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FlatList, Pressable, StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapView, { Marker} from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
<<<<<<< HEAD
// import GetLocation from 'react-native-get-location'
import * as Location from 'expo-location';
import React, { useState, useEffect } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "slugpool-cruzhacks24.firebaseapp.com",
  projectId: "slugpool-cruzhacks24",
  storageBucket: "slugpool-cruzhacks24.appspot.com",
  messagingSenderId: "1057846058539",
  appId: "1:1057846058539:web:0c8ccc6e592fa1fe0fd46e"
};


=======
// import {Transitioning, Transition} from 'react-native-reanimated';
// import GetLocation from 'react-native-get-location';
// import React, {useRef} from 'react';
>>>>>>> bc02c94 (yep)

const Tab = createBottomTabNavigator();

function BottomNavigator() {

  return (
    <Tab.Navigator>
      <Tab.Screen name='Map' component={MapScreen} options={{ headerShown: false, tabBarLabel: "Home", tabBarIcon: ({ color, size }) => ( <Ionicons name="home" color={color} size={size} /> ), }}></Tab.Screen>
      <Tab.Screen name='Carpool' component={CarpoolScreen} options={{ tabBarLabel: "Active Carpools", tabBarIcon: ({ color, size }) => ( <Ionicons name="car" color={color} size={size} />), }}></Tab.Screen>
    </Tab.Navigator>
  )
}

const PermissionsRequesterScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const requestLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    console.log("location: " + location.coords.latitude + ", " + location.coords.longitude);
    navigation.navigate('home', { screen: 'Map', params: { latitude1: location.coords.latitude, longitude1: location.coords.longitude } });
  };

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View style={styles.container}>
      <Text>Permissions Requester</Text>
      <Text>Location: {text}</Text>
      <Pressable onPress={requestLocation} style={styles.button}>
        <Text>Request location</Text>
      </Pressable>
    </View>
  );
}

const requestLocation = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      console.log( "location: " + location.coords.latitude + ", " + location.coords.longitude );
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
    navigation.navigate('home', {latitude: location.coords.latitude, longitude: location.coords.longitude});
  }
};

function MapScreen({ route }) {
  const insets = useSafeAreaInsets();
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState({
    latitude: 37.7749, // default values
    longitude: -122.4194,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    var intervalCount = 0;
    const maxIterations = 5;

    const fetchLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        let fetchedLocation = await Location.getCurrentPositionAsync();
        setLocation(fetchedLocation.coords);
        setRegion({
          latitude: fetchedLocation.coords.latitude,
          longitude: fetchedLocation.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      }

      intervalCount += 1;
      if (intervalCount >= maxIterations) {
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(fetchLocation, 500); // Fetch location every 2.5 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const onRegionChange = (region) => {
    console. log ( region )
  }

  return (
    <View>
      <MapView
        style={{width: '100%', height: '100%'}}
        mapPadding={{ top: insets.top, right: 0, bottom: 0, left: 0 }}
        initialRegion={region}
        region={ this.region }
        // kmlSrc={PROVIDER_GOOGLE}
        provider="google"
        showsMyLocationButton={true}
        showsUserLocation={true}
        onRegionChange={onRegionChange}
      />
      <Pressable style={{...styles.circleButton, right: '5%', bottom: '50%'}}>
        <Ionicons name="settings-sharp" size={30}/>
      </Pressable>
      <Pressable style={{...styles.circleButton, right: '5%', bottom: '40%'}}>
        <Ionicons name="add-outline" size={30}/>
      </Pressable>
    </View>
  );
}


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: '\tDriver Name: \n \tStarting From: \n \tComing From: \n \tSpace Available: \n \tPrice: ',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: '\tDriver Name: \n \tStarting From: \n \tComing From: \n \tSpace Available: \n \tPrice: ',
  },
  {
    id: '58694a0f3da1-471f-bd96-145571e29d72',
    title: '\tDriver Name: \n \tStarting From: \n \tComing From: \n \tSpace Available: \n \tPrice: ',
  },
  {
    id: '58694a0f-3da1-47f-bd96-145571e29d72',
    title: '\tDriver Name: \n \tStarting From: \n \tComing From: \n \tSpace Available: \n \tPrice: ',
  },
  {
    id: '58694a0f-3da1-471fbd96-145571e29d72',
    title: '\tDriver Name: \n \tStarting From: \n \tComing From: \n \tSpace Available: \n \tPrice: ',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14551e29d72',
    title: '\tDriver Name: \n \tStarting From: \n \tComing From: \n \tSpace Available: \n \tPrice: ',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14557e29d72',
    title: '\tDriver Name: \n \tStarting From: \n \tComing From: \n \tSpace Available: \n \tPrice: ',
  },
  {
    id: '58694a0f-3da1-471f-bd96145571e29d72',
    title: '\tDriver Name: \n \tStarting From: \n \tComing From: \n \tSpace Available: \n \tPrice: ',
  },
  {
    id: '586d94a0f-3da1-471f-bd96145571e29d72',
    title: '\tDriver Name: \n \tStarting From: \n \tComing From: \n \tSpace Available: \n \tPrice: ',
  },
  {
<<<<<<< HEAD
    id: '58694a0f-3da1-471f-bdd96145571e29d72',
    title: 'Driver Name: \n\n Starting From: \t Coming From: \n Space Available: \t Price: ',
=======
    id: '58694a0f-3da1-471f-bd96145571e29d72',
    title: '\tDriver Name: \n \tStarting From: \n \tComing From: \n \tSpace Available: \n \tPrice: ',
>>>>>>> bc02c94 (yep)
  },
  {
    id: '58694aa0f-3da1-471f-bd96145571e29d72',
    title: '\tDriver Name: \n \tStarting From: \n \tComing From: \n \tSpace Available: \n \tPrice: ',
  },
];

function CarpoolScreen() {
  const insets = useSafeAreaInsets();
  
  return (
    <View style={{ paddingTop: insets.top, justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text style={{textAlign: 'center', fontWeight: 'bold'}}> Active Carpool Rides:</Text>
      <FlatList
        contentContainerStyle={styles.flatList}
        data={DATA}
        renderItem={({item}) => <View style={
          { borderRadius: 20,
            marginVertical: 5, 
            backgroundColor: 'lightpink', 
            width: 350, 
            height: 100, 
            alignItems: 'left', 
            justifyContent: 'center' }
<<<<<<< HEAD
          } >
            
          <Text style={{textAlign: 'center'}}>{item.title}</Text>
          
          </View>}
        
=======
          } ><Text style={{textAlign: 'left', fontWeight:'bold'}}>{item.title}</Text></View>}
>>>>>>> bc02c94 (yep)
          keyExtractor={item => item.id}
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
    shadowOpacity: '90%',
    shadowRadius: 3,
    shadowOffset: 20,
    position: 'absolute',
    justifyContent: 'center',
  },
  flatList: {
    marginVertical: 0,
    marginBottom: 10,
    alignContent: 'center',
    width: '75%', 
  }
});


export default function App() {
  const Stack = createStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PermissionsRequester"
          component={PermissionsRequesterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="home" component={BottomNavigator} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

  // onRegionChange(region) {
  //   this.setState({ region })
  // }


  // let location = await Location.getCurrentPositionAsync();
    // console.log(location);
    // const { latitude1, longitude1 } = route.params || { latitude1: 0, longitude1: 0 }; // Default values if params are undefined
    // let loc = requestLocation;
    // const { latitude1, longitude1 } = route.params || { latitude1: 0, longitude1: 0 }; // Default values if params are undefined
    // let loc = requestLocation;

