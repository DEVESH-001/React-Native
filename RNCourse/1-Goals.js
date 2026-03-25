import { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Text,
  FlatList,
} from "react-native";

export default function Goals() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
    console.log(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() }, // FlatList needs a unique key for each item, so we can use the text as the key or generate a random key
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View>

      {/* The FlatList component is used to render a scrollable list of items. */}
      {/* The 'data' prop is used to specify the data to be rendered in the list. */}
      {/* The 'renderItem' prop is used to specify how each item in the list should be rendered. */}
      {/* The 'alwaysBounceVertical' prop is used to disable the bounce effect when the user scrolls beyond the content boundaries. */}
      {/* The 'keyExtractor' prop is used to extract the unique key for each item in the list. */}
      <FlatList
        data={courseGoals}
        renderItem={(itemData) => {
          return (
            <View style={styles.goalItem}>
              {/* The text of each item is rendered using the 'Text' component. */}
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
          );
        }}
        alwaysBounceVertical={false} // Disable bounce effect when reaching top or bottom of the list
        keyExtractor={(item, index) => {
          return item.key; // Extract the unique key for each item
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 80,
    paddingHorizontal: 30,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    padding: 8,
  },
  goalText: {
    color: "#FFFFFF",
  },
});
