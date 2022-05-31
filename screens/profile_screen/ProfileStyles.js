import { StyleSheet } from "react-native";
import { Colors } from "react-native-paper";
import { TextStyles } from "../../assets/constants/TextStyles";

export const styles = StyleSheet.create({
  image: {
    width: "50%",
    height: 200,
    marginTop: 50,
    borderRadius: 100,
    marginHorizontal: "25%",
  },

  card: {
      flexDirection: "row",
      justifyContent: "flex-start",
      width: "96%",
      height: "auto",
      marginHorizontal: "2%",
      marginVertical: 10,
      elevation: 5,
      borderRadius: 5,
      backgroundColor: Colors.amber300
  },

  label: {
    ...TextStyles.title,
    fontSize: 18,
    padding: 10,
    textAlignVertical: "center",
    color: Colors.amber900,
  },
  text: {
    ...TextStyles.message,
    fontSize: 22,
    padding: 10,
    fontWeight: "bold",
    textAlignVertical: "center",
  },
});
