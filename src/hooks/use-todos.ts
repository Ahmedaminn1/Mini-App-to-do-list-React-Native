import { useState } from "react";
import type { Todo } from "@/types/todo";
import { INITIAL_TODOS } from "@/constants/initial-todos";

export function useTodos(initialData: Todo[] = INITIAL_TODOS) {
  const [todos, setTodos] = useState<Todo[]>(initialData);
  const [inputText, setInputText] = useState<string>("");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editCompleted, setEditCompleted] = useState<boolean>(false);

  const isEditing = editingId !== null;

  const startEdit = (id: number) => {
    const target = todos.find((item) => item.id === id);
    if (!target) return;

    setEditingId(id);
    setInputText(target.title);
    setEditCompleted(target.completed);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setInputText("");
    setEditCompleted(false);
  };

  const submitTask = () => {
    const trimmed = inputText.trim();
    if (!trimmed) return;

    if (isEditing) {
      setTodos((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? { ...item, title: trimmed, completed: editCompleted }
            : item
        )
      );
      setEditingId(null);
      setEditCompleted(false);
    } else {
      setTodos((prev) => [
        ...prev,
        { id: Date.now(), title: trimmed, completed: false },
      ]);
    }

    setInputText("");
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
    if (editingId === id) {
      cancelEdit();
    }
  };

  const toggleTodoComplete = (id: number) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const clearAllTodos = () => {
    setTodos([]);
    cancelEdit();
  };

  return {
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
  };
}
