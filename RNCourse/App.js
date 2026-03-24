import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>hello react native</Text>
    //   <View>
    //     <Text style={styles.dummyText}>hello react native 2</Text>
    //   </View>
    //   <Button title="Click me" />
    // </View>
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Enter your name" />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: "red",
    padding: 10,
  },
  appContainer: {
    padding: 50,
    marginTop: 100,
    borderWidth: 1,
    borderColor: "black",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    width: "80%",
    marginRight: 8,
  },
});
