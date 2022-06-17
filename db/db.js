//Using SQLITE DB to cache user data for login implementation
import * as SQLite from "expo-sqlite";

export default db = SQLite.openDatabase("users");

//create table if it doesnt exist
export const createTable = () => {
    db.transaction((txn) => {
      // Create the table and define the properties of the columns
      txn.executeSql(
        "CREATE TABLE IF NOT EXISTS users(user_id INTEGER PRIMARY KEY AUTOINCREMENT, first_name VARCHAR(30), last_name VARCHAR(30), email VARCHAR(30), password VARCHAR(30), mobile VARCHAR(30))"
      );
    });
  }
