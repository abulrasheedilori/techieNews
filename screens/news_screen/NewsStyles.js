import { StyleSheet } from "react-native";
import { Colors } from "react-native-paper";
import { TextStyles } from "../../assets/constants/TextStyles";

export const styles = StyleSheet.create({
  card: {
    width: "94%",
    height: "auto",
    marginHorizontal: "3%",
    marginVertical: 5,
    borderWidth: 3,
    backgroundColor: Colors.amber900,
    borderRadius: 10,
    borderColor: Colors.amber500,
    elevation: 1,
  },

  image: {
    width: "98%",
    height: 200,
    marginTop: 3,
    borderRadius: 10,
    marginHorizontal: "1%",
  },

  newsTitle: {
    ...TextStyles.title,
    fontSize: 22,
    padding: 10,
    textAlign: "center",
    color: Colors.white,
  },
});
