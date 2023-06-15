import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Map = () => {

 
  const [mapRegion, setmapRegion] = useState({
    latitude: 12.96244,
    longitude: 80.26270,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  
  
  return (
    <View style={styles.container}>
      <MapView
        style={{ alignSelf: 'stretch', height: '100%' }}


        region={mapRegion}
      >
        <Marker coordinate={mapRegion} title='Marker' pincolor="gold"/>
      </MapView>
    </View>
  );
};
export default Map;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
