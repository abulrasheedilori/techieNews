import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { styles, platform } from "../login_screen/LoginStyles";
import { TextStyles } from "../../assets/constants/TextStyles";
import { StatusBar } from "expo-status-bar";
import { Colors } from "react-native-paper";
import User from "../../auth/User";

const RegScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  const registerHandler = () => {
    //create a user object
    const newUser = new User(firstName, lastName, email, password, mobile);
    //authenticate our newUser
    //little auth is done here for demonstrative purpose 
    newUser.authenticateUserInput(newUser, navigation);
  };

  return (
    <ImageBackground
      style={platform.screen}
      source={require("../../assets/images/reg_gradientBg.png")}
    >
      <ScrollView style={{ width: "auto" }}>
        <StatusBar backgroundColor={Colors.amber900} />
        <Text style={styles.title}>Registration</Text>
        <Text style={{ ...styles.message, ...TextStyles.message }}>
          Please, enter your details here to register for an account
        </Text>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/brainstem_logo_black_white.png")}
          />
        </View>
        <View style={styles.loginCard}>
          <Text style={styles.title}>Welcome</Text>
          <View style={{ ...styles.row, ...styles.textInputCont }}>
            <Image
              style={styles.icon}
              source={require("../../assets/images/brainstem_logo_black_white.png")}
            />
            <TextInput
              style={styles.textInput}
              placeholder="First Name"
              placeholderTextColor={Colors.amber900}
              defaultValue={firstName}
              onChangeText={(newFirstName) => setFirstName(newFirstName)}
            />
          </View>
          <View style={{ ...styles.row, ...styles.textInputCont }}>
            <Image
              style={styles.icon}
              source={require("../../assets/images/brainstem_logo_black_white.png")}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Last Name"
              placeholderTextColor={Colors.amber900}
              defaultValue={lastName}
              onChangeText={(newLastName) => setLastName(newLastName)}
            />
          </View>

          <View style={{ ...styles.row, ...styles.textInputCont }}>
            <Image
              style={styles.icon}
              source={require("../../assets/images/brainstem_logo_black_white.png")}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor={Colors.amber900}
              defaultValue={email}
              onChangeText={(newEmail) => setEmail(newEmail)}
            />
          </View>
          <View style={{ ...styles.row, ...styles.textInputCont }}>
            <Image
              style={styles.icon}
              source={require("../../assets/images/brainstem_logo_black_white.png")}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor={Colors.amber900}
              defaultValue={password}
              onChangeText={(newPassword) => setPassword(newPassword)}
            />
          </View>
          <View style={{ ...styles.row, ...styles.textInputCont }}>
            <Image
              style={styles.icon}
              source={require("../../assets/images/brainstem_logo_black_white.png")}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Mobile Number"
              placeholderTextColor={Colors.amber900}
              defaultValue={mobile}
              onChangeText={(newMobile) => setMobile(newMobile)}
            />
          </View>

          <Text style={{ ...styles.message, fontWeight: "bold" }}>
            By clicking the Submit button, you consent to the term and condition
            for using this app.
          </Text>

          <Text style={{ ...styles.mesage, marginTop: 10 }}>
            Have you login? Don't worry! Just click the link below to login
          </Text>

          <TouchableOpacity
            style={{ marginTop: 10 }}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <Text style={{ ...styles.link }}> Click here to Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ width: "100%", marginBottom: 50 }}
            onPress={registerHandler}
          >
            <View style={styles.btn}>
              <Text style={styles.btnText}>Register</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default RegScreen;
