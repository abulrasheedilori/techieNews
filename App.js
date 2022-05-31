import { Provider } from "react-redux";
import { store } from "./app_store/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


import LoginScreen from "./screens/login_screen/LoginScreen";
import RegScreen from "./screens/registration_screen/RegScreen";
import BottomNavigator from "./screens/shared_components/BottomNavigator";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              headerStyle: { backgroundColor: "#f4511e" },
              headerTintColor: "#fff",
              headerTitleStyle: { fontWeight: "bold" },
              //   presentation: "modal",
              title: "Login",
            }}
          />
          <Stack.Screen
            name="Registration"
            component={RegScreen}
            options={{
              headerTintColor: "#fff",
              headerStyle: { backgroundColor: "#f4511e", alignText: "center" },
              //   presentation: "modal",
              title: "Registration",
            }}
          />
          <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;


