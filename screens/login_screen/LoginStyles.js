import { StyleSheet, Platform } from "react-native";
import { Colors } from "react-native-paper";
import { TextStyles } from "../../assets/constants/TextStyles";

export const platform = StyleSheet.create({
  screen:
    Platform.OS == "ios"
      ? {
          marginTop: 70,
          width: "100%",
          height: "100%",
        }
      : {
          marginTop: 50,
          width: "100%",
          height: "100%",
        },
});

export const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  loading: {
    width: 50, height: 150,
    tintColor: Colors.amber900,
    justifyContent: "center",
    alignItems: "center"
  },

  title: {
    textAlign: "center",
    padding: 5,
    ...TextStyles.title,
  },

  message: {
    textAlign: "center",
  },

  logoContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginTop: 50,
  },

  loginCard: {
    width: "96%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "2%",
    marginVertical: 20,
    borderRadius: 10,
    elevation: 1,
    backgroundColor: Colors.white,
  },

  icon: {
    width: "20%",
    height: 40,
    borderWidth: 2,
  },

  textInputCont: {
    width: "90%",
    height: 50,
    borderRadius: 10,
    marginTop: 10,
    marginVertical: 10,
    marginHorizontal: "5%",
    marginVertical: 10,
    borderWidth: 2,
    borderColor: Colors.amber900,
    padding: 5,
    backgroundColor: Colors.white
  },

  textInput: {
    width: "80%",
    height: 50,
    borderTopEndRadius: 10,
    borderBottomStartRadius: 10,
  },
  
  link:{
      color: Colors.amberA700,
      fontSize: 18,
      fontWeight: "bold",

  },

  btn: {
    width: "90%",
    height: 50,
    marginVertical: 20,
    marginHorizontal: "5%",
    borderRadius: 10,
    backgroundColor: Colors.amber900,
  },

  btnText: {
    ...TextStyles.btnText,
    textAlign: "center",
    padding: 10,
    color: "white",
  },
});
