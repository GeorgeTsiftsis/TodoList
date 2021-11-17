import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/HomeScreen";
import Login from "./src/Login";
import { Provider } from "react-redux";
import TodoList from "./src/TodoList";
import AppGesture from "./src/demoforgesturehandler/AppGesture";
import { NavigationContainer } from "@react-navigation/native";
import configureStore from "./src/store";

const store = configureStore();
const Stack = createStackNavigator();

const AppStack = () => (
  <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={Login}
          options={{
            title: "Log in",
            headerTintColor: "orange",
            headerStyle: {
              backgroundColor: "black",
            },
          }}
        />

        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "To Do List",
            headerTintColor: "orange",
            headerStyle: {
              backgroundColor: "black",
            },
          }}
        />

        <Stack.Screen
          name="TodoList"
          component={TodoList}
          options={{
            headerTintColor: "orange",
            headerStyle: {
              backgroundColor: "black",
            },
          }}
        />

        <Stack.Screen
          name="Demo"
          component={AppGesture}
          options={{
            title: "Log in",
            headerTintColor: "orange",
            headerStyle: {
              backgroundColor: "black",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default AppStack;
