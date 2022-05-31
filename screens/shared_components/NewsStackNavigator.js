import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Colors } from "react-native-paper";
import NewsScreen from "../news_screen/NewsScreen";
import NewsDetailsScreen from "../details_screen/NewsDetailsScreen";

const NewsStack = createNativeStackNavigator();

function NewsStackScreen() {
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen
        name="News"
        component={NewsScreen}
        options={{
          headerShown: false,
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#f4511e" },
          presentation: "card",
          title: "News",
        }}
      />
      <NewsStack.Screen
        name="Details"
        component={NewsDetailsScreen}
        options={{
          headerTintColor: "#fff",
          headerStyle: { backgroundColor: "#f4511e" },
          //   presentation: "modal",
          title: "Details",
        }}
      />
    </NewsStack.Navigator>
  );
}

export default NewsStackScreen;
