import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import type { Todo } from "@/types/todo";
import { useState } from "react";

const initialToDoList: Todo[] = [
  {
    id: 1,
    title: "Buy groceries and produce",
    completed: false,
  },
  {
    id: 2,
    title: "Morning walk with the dog",
    completed: true,
  },
  {
    id: 3,
    title: "Finish project presentation",
    completed: false,
  },
  {
    id: 4,
    title: "Call mom for her birthday",
    completed: true,
  },
  {
    id: 5,
    title: "Read 20 pages of a book",
    completed: false,
  },
  {
    id: 6,
    title: "Reply to urgent client emails",
    completed: true,
  },
  {
    id: 7,
    title: "Weekly team sprint meeting",
    completed: false,
  },
  {
    id: 8,
    title: "Schedule dentist appointment",
    completed: false,
  },
  {
    id: 9,
    title: "Pay electricity & internet bills",
    completed: true,
  },
  {
    id: 10,
    title: "Gym workout - upper body",
    completed: false,
  },
  {
    id: 11,
    title: "Review pull requests on GitHub",
    completed: true,
  },
  {
    id: 12,
    title: "Prepare healthy meal prep",
    completed: false,
  },
  {
    id: 13,
    title: "Water the indoor plants",
    completed: true,
  },
  {
    id: 14,
    title: "Back up laptop to cloud storage",
    completed: false,
  },
  {
    id: 15,
    title: "Pick up package from post office",
    completed: false,
  },
  {
    id: 16,
    title: "Clean and organize desk setup",
    completed: true,
  },
  {
    id: 17,
    title: "Practice React Native animations",
    completed: false,
  },
  {
    id: 18,
    title: "Book train tickets for the weekend",
    completed: false,
  },
  {
    id: 19,
    title: "Evening meditation & stretching",
    completed: true,
  },
  {
    id: 20,
    title: "Plan weekly goals and budget",
    completed: false,
  },
];
export default function toDoListScreen() {
  const [toDoList, setToDoList] = useState<Todo[]>(initialToDoList);
  const [toDoText, setToDoText] = useState<string>("");
  const [newToDo, setNewToDo] = useState<string>("");
  const [editingToDoId, setEditingToDoId] = useState<number | null>(null);
  const [toDoCompleted, setToDoCompleted] = useState<boolean>(false);
  const isEditing = editingToDoId !== null;

  const handleEditPress = (id: number) => {
    const todo = toDoList.find((toDo) => toDo.id === id);
    if (todo) {
      setEditingToDoId(id);
      setToDoText(todo.title);
      setToDoCompleted(todo.completed);
    }
  };
  const handleDeletePress = (id: number) => {
    setToDoList((prevList) => prevList.filter((toDo) => toDo.id !== id));
  };
  const handleToggleComplete = (id: number) => {
    setToDoList((prevList) =>
      prevList.map((toDo) =>
        toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo,
      ),
    );
  };
  const handleUpdatePress = () => {
    if (!toDoText.trim()) return;
    setToDoList((prevList) =>
      prevList.map((toDo) =>
        toDo.id === editingToDoId
          ? { ...toDo, title: toDoText.trim(), completed: toDoCompleted }
          : toDo,
      ),
    );
    setEditingToDoId(null);
    setToDoText("");
    setToDoCompleted(false);
  };
  const handleCancelPress = () => {
    setEditingToDoId(null);
    setToDoText("");
    setToDoCompleted(false);
  };
  const handleAddPress = () => {
    if (!toDoText.trim()) return;
    setToDoList((prevList) => [
      ...prevList,
      { id: Date.now(), title: toDoText.trim(), completed: false },
    ]);
    setToDoText("");
  };

  return (
    <View style={styles.screen}>
      {/* Header */}
      <View>
        <Text style={styles.title}>To-Do List</Text>
        <Text style={styles.appDescription}>
          A simple to-do list application - Let's get organized !
        </Text>
        <Text style={styles.description}>Add your Tasks Below:</Text>
      </View>
      {/* Form */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Enter a new task"
          value={toDoText}
          onChangeText={setToDoText}
        />

        {/* Status Control in Edit Mode */}
        {isEditing && (
          <View style={styles.statusControlRow}>
            <Text style={styles.statusLabel}>Status:</Text>
            <View style={styles.statusOptions}>
              <Pressable
                style={[
                  styles.statusOption,
                  !toDoCompleted && styles.statusOptionPendingActive,
                ]}
                onPress={() => setToDoCompleted(false)}
              >
                <Text
                  style={[
                    styles.statusOptionText,
                    !toDoCompleted && styles.statusOptionTextPending,
                  ]}
                >
                  Pending
                </Text>
              </Pressable>

              <Pressable
                style={[
                  styles.statusOption,
                  toDoCompleted && styles.statusOptionCompletedActive,
                ]}
                onPress={() => setToDoCompleted(true)}
              >
                <Text
                  style={[
                    styles.statusOptionText,
                    toDoCompleted && styles.statusOptionTextCompleted,
                  ]}
                >
                  Completed
                </Text>
              </Pressable>
            </View>
          </View>
        )}

        {/* Action buttons */}
        <View style={styles.actionRow}>
          <Pressable
            style={[styles.button, styles.primaryButton]}
            onPress={isEditing ? handleUpdatePress : handleAddPress}
          >
            <Text style={styles.buttonText}>
              {isEditing ? "Update Task" : "Add Task"}
            </Text>
          </Pressable>

          {isEditing && (
            <Pressable
              style={[styles.button, styles.secondaryButton]}
              onPress={handleCancelPress}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </Pressable>
          )}
        </View>
      </View>

      {/* Delete All Button */}
      <View style={styles.headerRow}>
        <Text style={styles.countTasks}>Tasks ({toDoList.length})</Text>
        <Pressable
          onPress={() => setToDoList([])}
          disabled={toDoList.length === 0}
        >
          <Text
            style={[
              styles.deleteButtonText,
              toDoList.length === 0 && styles.deleteButtonDisabled,
            ]}
          >
            Delete All
          </Text>
        </Pressable>
      </View>

      {/* List of ToDos */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {toDoList.length === 0 ? (
          <Text style={styles.empty}>All Caught up!</Text>
        ) : (
          toDoList.map((toDo) => (
            <View key={toDo.id} style={styles.todoItem}>
              <Text style={styles.todoTitle}>{toDo.title}</Text>
              <Pressable onPress={() => handleToggleComplete(toDo.id)}>
                <View
                  style={[
                    styles.badge,
                    toDo.completed ? styles.badgeCompleted : styles.badgePending,
                  ]}
                >
                  <Text
                    style={[
                      styles.badgeText,
                      toDo.completed
                        ? styles.badgeTextCompleted
                        : styles.badgeTextPending,
                    ]}
                  >
                    {toDo.completed ? "Completed" : "Pending"}
                  </Text>
                </View>
              </Pressable>
              <View style={styles.toDoActionButtons}>
                {/* Edit Button */}
                <Pressable onPress={() => handleEditPress(toDo.id)}>
                  <Text style={styles.todoEditButton}>Edit</Text>
                </Pressable>
                {/* Delete Button */}
                <Pressable
                  onPress={() => {
                    handleDeletePress(toDo.id);
                  }}
                >
                  <Text style={styles.todoDeleteButton}>Delete</Text>
                </Pressable>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    gap: 16,
    padding: 16,
    paddingTop: 48,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  appDescription: {
    fontSize: 16,
    color: "#5e5e5eff",
    marginTop: 4,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  countTasks: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 12,
  },
  description: {
    fontSize: 16,
    color: "gray",
    marginTop: 4,
  },
  button: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  primaryButton: {
    backgroundColor: "#2693f5",
  },
  secondaryButton: {
    backgroundColor: "#f5222d",
  },
  deleteButtonText: {
    color: "#f5222d",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    marginTop: 12,
  },
  deleteButtonDisabled: {
    opacity: 0.4,
  },
  form: {
    backgroundColor: "#ffffff",
    borderColor: "#e1e6ef",
    borderRadius: 8,
    borderWidth: 1,
    gap: 12,
    padding: 14,
  },
  actionRow: {
    flexDirection: "row",
    gap: 12,
  },
  empty: {
    color: "gray",
    textAlign: "center",
    fontSize: 16,
    paddingTop: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 14,
  },
  todoItem: {
    backgroundColor: "#f9fbff",
    borderColor: "#e1e6ef",
    borderRadius: 8,
    borderWidth: 1,
    marginTop: 12,
    padding: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  todoTitle: {
    flex: 1,
    fontSize: 16,
    color: "#333",
    marginRight: 12,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeCompleted: {
    backgroundColor: "#e8f8ed",
    borderColor: "#bbf7d0",
  },
  badgePending: {
    backgroundColor: "#fef9c3",
    borderColor: "#fde68a",
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
  },
  badgeTextCompleted: {
    color: "#15803d",
  },
  badgeTextPending: {
    color: "#b45309",
  },
  toDoActionButtons: {
    flexDirection: "row",
    gap: 12,
    marginLeft: 10,
    alignItems: "center",
    paddingVertical: 12,
  },
  todoEditButton: {
    color: "#2693f5",
    fontWeight: "bold",
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#2693f5",
    borderRadius: 4,
    padding: 4,
  },
  todoDeleteButton: {
    color: "#f5222d",
    fontWeight: "bold",
    fontSize: 14,
    borderWidth: 1,
    borderColor: "#f5222d",
    borderRadius: 4,
    padding: 4,
  },
  statusControlRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 4,
  },
  statusLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
  },
  statusOptions: {
    flexDirection: "row",
    gap: 8,
  },
  statusOption: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#e1e6ef",
    backgroundColor: "#ffffff",
  },
  statusOptionPendingActive: {
    backgroundColor: "#fef9c3",
    borderColor: "#fde68a",
  },
  statusOptionCompletedActive: {
    backgroundColor: "#e8f8ed",
    borderColor: "#bbf7d0",
  },
  statusOptionText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#888",
  },
  statusOptionTextPending: {
    color: "#b45309",
  },
  statusOptionTextCompleted: {
    color: "#15803d",
  },
});
