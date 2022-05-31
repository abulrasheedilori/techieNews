//Using SQLITE DB to cache user data for login implementation
import * as SQLite from "expo-sqlite";

export default db = SQLite.openDatabase("users");


