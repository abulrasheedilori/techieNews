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
      width: "90%",
      height: "auto",
      marginHorizontal: "5%",
      marginVertical: 10,
      elevation: 1,
      shadowColor: Colors.amber900,
      borderRadius: 1,
      backgroundColor: Colors.transparent
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
