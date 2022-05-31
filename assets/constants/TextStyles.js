import { StyleSheet } from "react-native";
import { Colors } from "react-native-paper";

export const TextStyles = StyleSheet.create({
  title: {
    // fontFamily: "helvetica",
    fontSize: 35,
    fontWeight: "bold",
    color: Colors.amber900,
  },

  message: {
    // fontFamily: "helvetica",
    fontSize: 15,
    fontWeight: "normal",
  },

  link: {
    // fontFamily: "helvetica",
    fontSize: 12,
    color: Colors.amber800,
    fontWeight: "normal",
  },

  btnText: {
    // fontFamily: "helvetica",
    fontSize: 18,
    color: Colors.black,
    fontWeight: "bold",
  },
});
