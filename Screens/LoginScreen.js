import React, { useState } from "react";
import { useNavigation } from "@react-navigation/core";

import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import Images from "../images/Images";


const Login = () => {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground source={Images.drone} style={styles.image}>
          <Text style={styles.title}>ZUPPA GCS</Text>

          <Text style={styles.username}>UserName</Text>
          <TextInput
            value={userName}
            onChangeText={(userName) => setUserName(userName)}
            placeholder={"UserName"}
            style={styles.userinput}
          />

          <Text style={{ color: "blue" }}>{userName}</Text>

          <Text style={styles.pass}>pass</Text>
          <TextInput
            value={pass}
            onChangeText={(pass) => setPass(pass)}
            placeholder={"pass"}
            style={styles.passinput}
          />

          <Text style={{ color: "blue" }}>{pass}</Text>

          <Button
            style={styles.button}

            onPress={() => navigation.navigate("Map")}
          
            title="LOGIN"
            color="green"
          />

          <Button
            style={styles.button}
            onPress={() => navigation.navigate("RegisterScreen")}
            title="REGISTER"
            color="blue"
          />
        </ImageBackground>
      </View>
      <Text>{user?.email}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
  },
  login: {
    borderWidth: 1,
    width: 300,
    height: 500,

    marginHorizontal: "auto",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
  userinput: {
    borderWidth: 1,
    width: 250,
    height: 44,
    padding: 10,
    marginHorizontal: "auto",

    backgroundColor: "#e8e8e8",
  },
  passinput: {
    borderWidth: 1,
    width: 250,
    height: 44,
    padding: 10,
    marginHorizontal: "auto",

    backgroundColor: "#e8e8e8",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },

  title: {
    paddingTop: 0,
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
    marginTop: 10,
    marginBottom: 200,
  },
  username: {
    textAlignVertical: "top",
    paddingTop: 0,
    paddingBottom: 0,
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
  pass: {
    textAlignVertical: "top",
    paddingTop: 0,
    paddingBottom: 0,
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
});

export default Login;