import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { useState } from "react";
import { AppRegistry } from "react-native";
import {} from "./firebase";


import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Screens/LoginScreen";
import Register from "./Screens/RegisterScreen";
import Map from "./Screens/Map";
const Stack = createStackNavigator();

import { Text, View, NativeBaseProvider } from "native-base";
import { useAuthentication } from "./utils/hooks/useAuthentication";

export default function App() {
 
  const { user } = useAuthentication();
  useEffect(() => {
    console.log("auth_user", user);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false }}
      >
        {!user ? (
          <Stack.Group>
            <Stack.Screen name="LoginScreen" component={Login} />
            <Stack.Screen name="RegisterScreen" component={Register} />
          </Stack.Group>
        ) : (
          <Stack.Screen name="Map" component={Map} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
