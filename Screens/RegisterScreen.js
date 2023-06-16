import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
} from "react-native";
import Images from "../images/Images";
import { firebase_auth, auth, app } from "../firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
const Register = ({ navigation }) => {
  const [userName, setUserName] = useState("av");
  const [pass, setPass] = useState("Asdf@123$");
  const [email, setEmail] = useState("mailtoarull@gmail.com");

  const handleRegister = () => {
    createUserWithEmailAndPassword(getAuth(), email, pass)
      .then(() => {
        Alert.alert("Signup done!");
      })
      .catch(console.warn);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.drone} style={styles.image}>
        <Text style={styles.title}>ZUPPA GCS</Text>

        <Text style={styles.inputtitle}>Email</Text>
        <TextInput
          value={email}
          onChangeText={(email) => setEmail(email)}
          placeholder={"email"}
          style={styles.emailinput}
        />

        <Text style={{ color: "blue" }}>{email}</Text>

        <Text style={styles.inputtitle}>UserName</Text>
        <TextInput
          value={userName}
          onChangeText={(userName) => setUserName(userName)}
          placeholder={"UserName"}
          style={styles.userinput}
        />

        <Text style={{ color: "blue" }}>{userName}</Text>

        <Text style={styles.inputtitle}>Password</Text>
        <TextInput
          value={pass}
          onChangeText={(pass) => setPass(pass)}
          placeholder={"Password"}
          style={styles.passinput}
        />

        <Text style={{ color: "blue" }}>{pass}</Text>

        <Button
          style={styles.button}
          onPress={handleRegister}
          title="REGISTER"
          color="green"
        />
      </ImageBackground>
    </View>
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
  emailinput: {
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
  inputtitle: {
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

export default Register;
