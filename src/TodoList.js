import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import {
  createTodoActionCreator,
  deleteTodoActionCreator,
  startEditActionCreator,
  changeColorTodoCreator,
} from "./actions/actions";
import React, { useState } from "react";

const TodoList = (props) => {
  const dispatch = useDispatch();

  const submitAction = (desc) => dispatch(createTodoActionCreator({ desc }));

  const deleteAction = (id) => dispatch(deleteTodoActionCreator({ id }));

  const startEditAction = (id) => dispatch(startEditActionCreator(id));

  const colourEditAction = (id) => dispatch(changeColorTodoCreator({ id }));

  const [input, setInput] = useState("");

  const [inputsec, setInputsec] = useState("");

  const todos = useSelector((state) => state.todos);
  console.log({ todos });

  return (
    <View style={styles.listContainer}>
      <View>
        <Text style={styles.title}>Add Your task </Text>
        <TextInput
          value={input}
          placeholder="E.g. Learn React-Native"
          style={styles.input}
          onChangeText={(desc) => setInput(desc)}
        />
        <TouchableOpacity
          style={{ marginBottom: 16 }}
          onPress={() => {
            submitAction(input);
            setInput("");
          }}
        >
          <Text style={styles.submitbutton}>Submit</Text>
        </TouchableOpacity>
        {todos.map((item, i) => (
          <ListItem
            key={i}
            containerStyle={{ backgroundColor: item.color }}
            bottomDivider
          >
            {!item.editing ? (
              <ListItem.Title style={{ fontSize: 16 }}>
                {i + 1} {item.desc}
              </ListItem.Title>
            ) : (
              <TextInput
                style={{ fontSize: 16 }}
                value={inputsec}
                placeholder="E.g. Learn React-Native"
                onChangeText={() => setInputsec()}
              />
            )}

            <Icon
              name="delete"
              size={36}
              onPress={() => deleteAction(item.id)}
            />
            <Icon
              name="edit"
              size={36}
              onPress={() => startEditAction(item.id)}
            />
            <Icon
              name="circle"
              size={36}
              onPress={() => colourEditAction(item.id)}
            />
            <TouchableOpacity
              onPress={() => deleteAction(item.id)}
              activeOpacity={0.6}
            ></TouchableOpacity>
          </ListItem>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: "black",
    padding: 16,
    width: "100%",
    flex: 1,
  },
  title: {
    backgroundColor: "black",
    color: "white",
    padding: 10,
  },
  submitbutton: {
    fontSize: 22,
    color: "#5fc9f8",
    padding: 10,
  },
  listText: {
    fontSize: 50,
  },
  input: {
    backgroundColor: "white",
    height: 40,
    padding: 10,
    borderRadius: 16,
  },

  container: {
    height: 80,
    width: "90%",
    backgroundColor: "white",
    justifyContent: "center",
    padding: 16,
  },
  deleteBox: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 80,
  },
});

export default TodoList;
