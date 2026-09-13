import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

interface TodoFormProps {
  inputText: string;
  setInputText: (text: string) => void;
  isEditing: boolean;
  editCompleted: boolean;
  setEditCompleted: (completed: boolean) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

export function TodoForm({
  inputText,
  setInputText,
  isEditing,
  editCompleted,
  setEditCompleted,
  onSubmit,
  onCancel,
}: TodoFormProps) {
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Enter a new task"
        value={inputText}
        onChangeText={setInputText}
      />

      {/* Status Control in Edit Mode */}
      {isEditing && (
        <View style={styles.statusControlRow}>
          <Text style={styles.statusLabel}>Status:</Text>
          <View style={styles.statusOptions}>
            <Pressable
              style={[
                styles.statusOption,
                !editCompleted && styles.statusOptionPendingActive,
              ]}
              onPress={() => setEditCompleted(false)}
            >
              <Text
                style={[
                  styles.statusOptionText,
                  !editCompleted && styles.statusOptionTextPending,
                ]}
              >
                Pending
              </Text>
            </Pressable>

            <Pressable
              style={[
                styles.statusOption,
                editCompleted && styles.statusOptionCompletedActive,
              ]}
              onPress={() => setEditCompleted(true)}
            >
              <Text
                style={[
                  styles.statusOptionText,
                  editCompleted && styles.statusOptionTextCompleted,
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
          onPress={onSubmit}
        >
          <Text style={styles.buttonText}>
            {isEditing ? "Update Task" : "Add Task"}
          </Text>
        </Pressable>

        {isEditing && (
          <Pressable
            style={[styles.button, styles.secondaryButton]}
            onPress={onCancel}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    padding: 14,
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
