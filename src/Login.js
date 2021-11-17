import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import DatePicker from "@react-native-community/datetimepicker";

const Login = ({ navigation }) => {
  const [date, setDate] = useState(new Date());

  const [display, setDisplay] = useState(false);

  const [text, setText] = useState("");

  // I Did not use the state here. It is just a demo to store the value of username in case of we would display it somewhere

  const addName = (text) => {
    setText(text);
    setDisplay(true);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    console.log(setDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.lilcont}>
        <View>
          <Text style={styles.title}>First-name </Text>
          <TextInput
            value={text}
            style={styles.inputs}
            placeholder="First-name"
            onChangeText={addName}
          />
        </View>
        <View>
          <Text style={styles.title}>Last-name </Text>
          <TextInput style={styles.inputs} placeholder="Last-name" />
        </View>
      </View>
      {display && <Text style={styles.welcomeMessage}> Hello {text} </Text>}
      <Text style={styles.text}> Date of Birth</Text>
      <View style={styles.date}>
        <DatePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="spinner"
          onChange={onChange}
        />
      </View>
      {/* <Text style={styles.title}>{JSON.stringify(date)}</Text>   //----> Try to deconstruct the date which concludes hour */}
      <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
        <Text style={styles.loginbutton}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    flex: 1,
    justifyContent: "flex-start",
  },

  welcomeMessage: {
    color: "white",
  },

  lilcont: {
    flexDirection: "row",
    paddingBottom: 50,
  },
  title: {
    color: "white",
    fontSize: 20,
    paddingLeft: 13,
    alignSelf: "flex-start",
    marginTop: 20,
    marginBottom: 5,
  },

  inputs: {
    backgroundColor: "white",
    height: 40,
    alignItems: "center",
    width: 170,
    padding: 10,
    borderRadius: 16,
    padding: 4,
    marginLeft: 13,
  },
  text: {
    color: "white",
    fontSize: 20,
    paddingLeft: 13,
    alignSelf: "flex-start",
    marginTop: 20,
    marginBottom: 15,
  },
  date: {
    backgroundColor: "white",
    borderRadius: 16,
    width: "90%",
    alignSelf: "center",
  },
  loginbutton: {
    paddingTop: 20,
    color: "#adbce6",
    fontSize: 30,
    alignSelf: "center",
  },
});

export default Login;
