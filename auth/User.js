import { Alert } from "react-native";
import db from "../db/db";
import { createTable } from "../db/db";

class User {
  constructor(firstName, lastName, email, password, mobile) {
    (this.firstName = firstName),
      (this.lastName = lastName),
      (this.email = email),
      (this.password = password),
      (this.mobile = mobile);
  }

  async authenticateUserInput(user, navigation) {
    //performing a simple input check
    if (
      user.firstName.length <= 3 ||
      user.lastName.length <= 3 ||
      user.email.length <= 6 ||
      user.password.length < 6 ||
      user.mobile.length <= 5
    ) {
      Alert.alert("Warning!", "Please, all fields are required", [
        { text: "Try again", onPress: () => {} },
      ]);
    } else {
      try {
        createTable();
        db.transaction((txn) => {
          txn.executeSql(
            "INSERT INTO users (first_name, last_name, email, password, mobile) VALUES (?,?,?,?,?)",
            [
              user.firstName,
              user.lastName,
              user.email,
              user.password,
              user.mobile,
            ],
            (_, result) => {
              console.log("Results", result);
              if (result.rowsAffected > 0) {
                Alert.alert(
                  "Success",
                  "You are Registered Successfully!",
                  [
                    {
                      text: "Login",
                      onPress: () => {
                        navigation.navigate("Login");
                      },
                    },
                  ],
                  { cancelable: false }
                );
              } else {
                Alert.alert("Error!", "Registration Failed, Please try again");
              }
            },
            (_, error) => {
              console.log("Error", error);
            }
          );
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
}

export default User;
