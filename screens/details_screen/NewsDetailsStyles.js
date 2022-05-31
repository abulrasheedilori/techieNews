import { StyleSheet } from "react-native";
import { Colors } from "react-native-paper";
import { TextStyles } from "../../assets/constants/TextStyles";

export const styles = StyleSheet.create({
  image: {
    width: "94%",
    height: 300,
    marginTop: 3,
    borderRadius: 10,
    marginHorizontal: "3%",
  },

  title: {
    ...TextStyles.title,
    fontSize: 28,
    padding: 10,
    textAlign: "center",
    textAlignVertical: "center",
    textDecorationLine: "underline",
    color: Colors.amber900,
  },
  message: {
    ...TextStyles.message,
    padding: 20,
    fontWeight: "bold",
  },
});
