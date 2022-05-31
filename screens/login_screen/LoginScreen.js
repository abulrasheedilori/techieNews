import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { styles, platform } from "./LoginStyles";
import { TextStyles } from "../../assets/constants/TextStyles";
import { StatusBar } from "expo-status-bar";
import { Colors } from "react-native-paper";
import db from "../../db/db";
import { useDispatch } from "react-redux";
import { setUser } from "../../app_store/usersSlice";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  //handle login button
  const loginHandler = () => {
    authenticateLogin(email, password);
  };

  //Authenticate user's input [just a simple scope for demonstration]
  const authenticateLogin = (email, password) => {
    if (email.length <= 6 || password.length < 6) {
      Alert.alert(
        "Empty or Invalid credentials!",
        "Please, carefully input your credentials or register for a new one. ",
        [{ text: "Retry", onPress: () => {} }]
      );
    } else {
      getData(email, password);
    }
  };

  //getting data from the db
  const getData = (email, password) => {
    try {
      db.transaction((txn) => {
        txn.executeSql(
          "SELECT * FROM users WHERE email = ? AND password = ?",
          [email, password],
          (txn, { rows: { _array } }) => {
            if (_array.length >= 1) {
              dispatch(
                setUser({
                  firstName: _array[0].first_name,
                  lastName: _array[0].last_name,
                  email: _array[0].email,
                  mobile: _array[0].mobile,
                })
              );
              navigation.navigate("BottomNavigator");
            } else {
              Alert.alert("Incorrect Password", "Please, check and try again");
            }
          },
          (txn, error) => {
            console.log("UserDb", error);
            Alert.alert(
              "Warning!",
              "No record found for your credential. Please, register a new account",
              [{ text: "Retry", onPress: () => {} }]
            );
          }
        );
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageBackground
      style={platform.screen}
      source={require("../../assets/images/login_gradientBg.png")}
    >
      <ScrollView style={{ width: "auto" }}>
        <StatusBar backgroundColor={Colors.amber900} />
        <Text style={styles.title}>Tech News Login</Text>
        <Text style={{ ...styles.message, ...TextStyles.message }}>
          Please, enter your login details here
        </Text>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/brainstem_logo_black_white.png")}
          />
        </View>
        <View style={styles.loginCard}>
          <Text style={styles.title}>Welcome back!</Text>
          <View style={{ ...styles.row, ...styles.textInputCont }}>
            <Image
              style={styles.icon}
              source={require("../../assets/images/brainstem_logo_black_white.png")}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Input email here"
              placeholderTextColor={Colors.amber900}
              defaultValue={email}
              onChangeText={(newText) => setEmail(newText)}
            />
          </View>
          <View style={{ ...styles.row, ...styles.textInputCont }}>
            <Image
              style={styles.icon}
              source={require("../../assets/images/brainstem_logo_black_white.png")}
            />
            <TextInput
              style={styles.textInput}
              placeholder="input password here"
              placeholderTextColor={Colors.amber900}
              defaultValue={password}
              onChangeText={(newPassword) => setPassword(newPassword)}
              secureTextEntry
            />
          </View>

          <Text style={styles.message}>Not registered? Don't worry!</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Registration");
            }}
          >
            <Text style={styles.link}>click here to register</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ width: "100%" }} onPress={loginHandler}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default LoginScreen;
