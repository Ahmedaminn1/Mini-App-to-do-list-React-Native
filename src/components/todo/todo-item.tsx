import { View, Text, Pressable, StyleSheet } from "react-native";
import type { Todo } from "@/types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export function TodoItem({ todo, onToggle, onEdit, onDelete }: TodoItemProps) {
  return (
    <View style={styles.todoItem}>
      <Text style={styles.todoTitle}>{todo.title}</Text>
      
      <Pressable onPress={onToggle}>
        <View
          style={[
            styles.badge,
            todo.completed ? styles.badgeCompleted : styles.badgePending,
          ]}
        >
          <Text
            style={[
              styles.badgeText,
              todo.completed
                ? styles.badgeTextCompleted
                : styles.badgeTextPending,
            ]}
          >
            {todo.completed ? "Completed" : "Pending"}
          </Text>
        </View>
      </Pressable>
      
      <View style={styles.toDoActionButtons}>
        <Pressable onPress={onEdit}>
          <Text style={styles.todoEditButton}>Edit</Text>
        </Pressable>
        <Pressable onPress={onDelete}>
          <Text style={styles.todoDeleteButton}>Delete</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
