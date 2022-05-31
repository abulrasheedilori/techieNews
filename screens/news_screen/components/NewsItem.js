import React from "react";
import { View, Text } from "react-native";
import { styles as NewsStyles } from ".././NewsStyles";

const NewsItem = (props) => {
  return (
    <View style={NewsStyles.card}>
      <Text style={NewsStyles.newsTitle}>
        {props.item.title}
      </Text>
    </View>
  );
};

export default NewsItem;
