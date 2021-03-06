import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

const Demo = (props) => {
  const leftSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });
    return (
      <TouchableOpacity onPress={props.handleDelete} activeOpacity={0.6}>
        <View style={styles.deleteBox}>
          <Animated.Text style={{ transform: [{ scale: scale }] }}>
            Delete
          </Animated.Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <Swipeable renderLeftActions={leftSwipe}>
      <View style={styles.container}>
        <Text>My name is {props.data.name}.</Text>
      </View>
    </Swipeable>
  );
};

export default Demo;

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: "100%",
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
