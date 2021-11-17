import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import TodoList from "./TodoList";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.todolistbutton}
        onPress={() => navigation.navigate("TodoList")}
      >
        <Text style={styles.gotolist}>Go to List</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.todolistbutton}
        onPress={() => navigation.navigate("Demo")}
      >
        <Text style={styles.gotolist}>Demo</Text>
      </TouchableOpacity>
      <TodoList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    alignItems: "center",
    justifyContent: "center",
  },
  todolistbutton: {
    marginVertical: 16,
  },

  gotolist: {
    fontSize: 22,
    color: "white",
  },
});

export default HomeScreen;
