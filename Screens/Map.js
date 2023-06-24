import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import * as Location from 'expo-location';
import {  StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      // Request permission to access the device's location
      let { status } = await Location.requestForegroundPermissionsAsync();
      
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
      // Get the device's current location
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let lati = 'Waiting..';
  let long='';
  if (errorMsg) {
    lati = errorMsg;
  } else if (location) {
    lati = location.coords.latitude;
    long= location.coords.longitude;
  }
  
  const [mapRegion, setmapRegion] = useState({
    latitude: 12.9630,
    longitude: 80.2646,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  return (
  
      <View style={styles.container}>
     <MapView
        style={{ alignSelf: 'stretch', height: '100%' }}
        region={mapRegion}>
      
        <Marker coordinate={mapRegion} title='Marker' pincolor="gold"/>
        <Marker coordinate={{latitude:lati,longitude:long}}
        image={require('../images/uav.png')}
        title='ZUPPA DRONE'/>  
      </MapView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
