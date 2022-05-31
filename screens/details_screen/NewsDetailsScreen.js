import React from "react";
import { StatusBar } from "expo-status-bar";
import AutoHeightWebView from "react-native-autoheight-webview";
import { Dimensions } from "react-native";
import {ImageBackground } from 'react-native'
// import { styles as newsDetailsStyles } from "./NewsDetailsStyles";
// import { TextStyles } from "../../assets/constants/TextStyles";


const NewsDetailsScreen = ({route}) => {
  {console.log("Logging route => ",  route.params.url)}
  return (
    <ImageBackground
      style={{ flex: 1}}
      source={require("../../assets/images/details_gradientBg.png")}
    >
      <StatusBar backgroundColor="#f4511e" />
      <AutoHeightWebView
        style={{ width: Dimensions.get("window").width, marginTop: 0 }}
        source={{ uri: route.params.url }}
        scalesPageToFit={true}
        viewportContent={"width=device-width, user-scalable=no"}
      />
    </ImageBackground>
  );
};

export default NewsDetailsScreen;
