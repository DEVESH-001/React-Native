import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>hello react native</Text>
      <View>
        <Text style={styles.dummyText}>hello react native 2</Text>
      </View>
      <Button title="Click me" />
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
});
