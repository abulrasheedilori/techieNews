import React from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { styles } from "../../login_screen/LoginStyles";
import { Colors } from "react-native-paper";

const Loading = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" style={styles.loading} />
      <Text
        style={{
          color: Colors.amber900,
          padding: 5,
          fontSize: 22,
          backgroundColor: Colors.black,
        }}
      >
        Loading ...
      </Text>
    </View>
  );
};

export default Loading;
