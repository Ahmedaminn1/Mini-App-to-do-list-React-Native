import { View, ScrollView, Text, Pressable, StyleSheet } from "react-native";
import { useTodos } from "@/hooks/use-todos";
import { TodoHeader } from "@/components/todo/todo-header";
import { TodoForm } from "@/components/todo/todo-form";
import { TodoItem } from "@/components/todo/todo-item";

export default function ToDoListScreen() {
  const {
    todos,
    inputText,
    setInputText,
    isEditing,
    editCompleted,
    setEditCompleted,
    startEdit,
    cancelEdit,
    submitTask,
    deleteTodo,
    toggleTodoComplete,
    clearAllTodos,
  } = useTodos();

  return (
    <View style={styles.screen}>
      <TodoHeader />
      
      <TodoForm
        inputText={inputText}
        setInputText={setInputText}
        isEditing={isEditing}
        editCompleted={editCompleted}
        setEditCompleted={setEditCompleted}
        onSubmit={submitTask}
        onCancel={cancelEdit}
      />

      {/* Delete All Button & Count Row */}
      <View style={styles.headerRow}>
        <Text style={styles.countTasks}>Tasks ({todos.length})</Text>
        <Pressable
          onPress={clearAllTodos}
          disabled={todos.length === 0}
        >
          <Text
            style={[
              styles.deleteButtonText,
              todos.length === 0 && styles.deleteButtonDisabled,
            ]}
          >
            Delete All
          </Text>
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {todos.length === 0 ? (
          <Text style={styles.empty}>All Caught up!</Text>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={() => toggleTodoComplete(todo.id)}
              onEdit={() => startEdit(todo.id)}
              onDelete={() => deleteTodo(todo.id)}
            />
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
  empty: {
    color: "gray",
    textAlign: "center",
    fontSize: 16,
    paddingTop: 24,
  },
});
