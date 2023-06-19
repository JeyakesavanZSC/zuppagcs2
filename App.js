import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { useState } from "react";
import { AppRegistry } from "react-native";

//import { firebase } from './config';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./Screens/LoginScreen";
import Register from "./Screens/RegisterScreen";
import Map from "./Screens/Map";
const Stack = createStackNavigator();

import { Text, View, NativeBaseProvider } from "native-base";


export default function App() {
  /*

  const [initialization,setInitialization] =useState(true);

  function onAuthStateChanged(user){
  setUserName(user);
  if(initializing)
  setInitialization(false);
  }

  useEffect(()=>{
    const subscriber=firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  },[])

  if(initializing)
  setInitialization(false);

  if(!user)
  {

  }

*/
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

// Color Switch Component
// function ToggleDarkMode() {
//   const { colorMode, toggleColorMode } = useColorMode();
//   return (
//     <HStack space={2} alignItems="center">
//       <Text>Dark</Text>
//       <Switch
//         isChecked={colorMode === "light"}
//         onToggle={toggleColorMode}
//         aria-label={
//           colorMode === "light" ? "switch to dark mode" : "switch to light mode"
//         }
//       />
//       <Text>Light</Text>
//     </HStack>
//   );
// }