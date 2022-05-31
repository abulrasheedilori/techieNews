import React, { useState, useEffect } from "react";
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
import { styles, platform } from "../login_screen/LoginStyles";
// import { styles as RegStyle } from "./RegStyles";
import { TextStyles } from "../../assets/constants/TextStyles";
import { StatusBar } from "expo-status-bar";
import { Colors } from "react-native-paper";
import db from "../../db/db";

const RegScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");

  useEffect(() => {
    createTable();
  }, []);

  const registerHandler = () => {
    setData(firstName, lastName, email, password, mobile);
  };

  //create new table if it does not exit
  const createTable = () => {
    db.transaction((txn) => {
      // Create the table and define the properties of the columns
      txn.executeSql(
        "CREATE TABLE IF NOT EXISTS users(user_id INTEGER PRIMARY KEY AUTOINCREMENT, first_name VARCHAR(30), last_name VARCHAR(30), email VARCHAR(30), password VARCHAR(30), mobile VARCHAR(30))"
      );
    });
  };

  //authenticate and set data to the db
  const setData = async (firstName, lastName, email, password, mobile) => {
    if (
      firstName.length <= 3 ||
      lastName.length <= 3 ||
      email.length <= 6 ||
      password.length < 6 ||
      mobile.length <= 5
    ) {
      Alert.alert("Warning!", "Please, all fields are required", [
        { text: "Try again", onPress: () => {} },
      ]);
    } else {
      try {
        db.transaction((txn) => {
          txn.executeSql(
            "INSERT INTO users (first_name, last_name, email, password, mobile) VALUES (?,?,?,?,?)",
            [firstName, lastName, email, password, mobile],
            (txn, result) => {
              console.log("Results", result);
              if (result.rowsAffected > 0) {
                Alert.alert(
                  "Success",
                  "You are Registered Successfully!",
                  [
                    {
                      text: "Go to Login",
                      onPress: () => navigation.navigate("Login"),
                    },
                  ],
                  { cancelable: false }
                );
              } else {
                Alert.alert("Error!", "Registration Failed, Please try again");
              }
            },
            (txn, error) => {
              console.log("Error", error);
            }
          );
        });
      } catch (error) {
        console.log(error);
      }
    }
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
