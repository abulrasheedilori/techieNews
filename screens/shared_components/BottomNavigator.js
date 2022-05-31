import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

//tab screen imports
import ProfileScreen from "../profile_screen/ProfileScreen";
import NewsStackScreen from "./NewsStackNavigator";

function BottomNavigator() {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: "#f4511e" },
        presentation: "modal",
      }}
      backBehaviour="history"
      shifting={true}
      labelled={true}
      activeColor="#FFFFFF"
      inactiveColor="#000000"
      barStyle={{ backgroundColor: "#f4511e", paddingBottom: 0 }}
    >
      <Tab.Screen
        name="Home"
        component={NewsStackScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigator;
