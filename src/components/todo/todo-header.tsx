import { View, Text, StyleSheet } from "react-native";

export function TodoHeader() {
  return (
    <View>
      <Text style={styles.title}>To-Do List</Text>
      <Text style={styles.appDescription}>
        A simple to-do list application - Let's get organized !
      </Text>
      <Text style={styles.description}>Add your Tasks Below:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  appDescription: {
    fontSize: 16,
    color: "#5e5e5eff",
    marginTop: 4,
  },
  description: {
    fontSize: 16,
    color: "gray",
    marginTop: 4,
  },
});
