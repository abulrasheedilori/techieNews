import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../login_screen/LoginStyles";
import { styles as profileStyles } from "./ProfileStyles";
import { Colors } from "react-native-paper";
import { useSelector, useDispatch } from "react-redux";
import { logOutUser } from "../../app_store/usersSlice";

const ProfileScreen = ({ navigation }) => {
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <ImageBackground
      style={{ flex: 1, marginTop: 50 }}
      source={require("../../assets/images/news_bg_gradient.png")}
    >
      <StatusBar backgroundColor="#f4511e" />

      <TouchableOpacity onPress={() => {}}>
        <Image
          style={profileStyles.image}
          source={require("../../assets/images/devPassport.jpeg")}
        />
        {/** Just for demonstration purpose */}
        <Text style={styles.message}>Tap the image to upload your picture</Text>
      </TouchableOpacity>

      <ScrollView style={{ flex: 1 }}>
        <View style={profileStyles.card}>
          <Text style={profileStyles.label}>Name:</Text>
          <Text style={profileStyles.text}>
            {users.firstName + " " + users.lastName}
          </Text>
        </View>

        <View style={profileStyles.card}>
          <Text style={profileStyles.label}>Mobile:</Text>
          <Text style={profileStyles.text}>{users.mobile}</Text>
        </View>

        <View style={profileStyles.card}>
          <Text style={profileStyles.label}>Email:</Text>
          <Text style={profileStyles.text}>{users.email}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            Alert.alert("LOGOUT WARNING", "Proceed to log out", [
              {
                text: "Confirm LogOut",
                onPress: () => {
                  dispatch(logOutUser({}));
                  navigation.navigate("Login");
                },
              },
              {
                text: "Cancel",
                onPress: () => {},
              },
            ]);
            // console.log("LOGOUT MESSAGE", "You are logged Out");
          }}
        >
          <Text
            style={{
              marginHorizontal: "35%",
              width: "30%",
              marginTop: 10,
              textTransform: "capitalize",
              textAlign: "center",
              paddingVertical: 10,
              backgroundColor: Colors.amber900,
              color: Colors.white,
              fontSize: 22,
              borderRadius: 10,
            }}
          >
            Log Out
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default ProfileScreen;
