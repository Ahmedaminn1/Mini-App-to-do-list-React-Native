# 📝 React Native To-Do App

A clean, responsive, and robust To-Do List application built with **React Native**, **Expo**, and **TypeScript**. Recently refactored using clean code architecture principles to ensure maintainability, testability, and high performance.

## ✨ Features

- **Add & Edit Tasks**: Easily add new tasks and modify existing ones.
- **Status Tracking**: Mark tasks as Pending or Completed with a single tap.
- **Clean UI/UX**: Minimalist interface optimized for both iOS and Android.
- **Clear All**: Convenient option to delete all tasks when you're caught up.
- **Modular Architecture**: 
  - `useTodos` custom hook for isolated state & business logic.
  - Component-driven UI (`TodoHeader`, `TodoForm`, `TodoItem`).
  - Extracted mock data and constants for clean orchestrator (`index.tsx`).

## 🛠️ Tech Stack

- **Framework**: [React Native](https://reactnative.dev/)
- **Toolchain**: [Expo](https://expo.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [Expo Router](https://docs.expo.dev/router/introduction/) (File-based routing)

## 🚀 Getting Started

### Prerequisites
Make sure you have Node.js installed, along with `npm` or `yarn`.

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/Ahmedaminn1/Mini-App-to-do-list-React-Native.git
   cd "Mini App to-do-list React Native/to-do-app"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npx expo start
   ```

4. **Open the App**:
   - Install the **Expo Go** app on your iOS or Android device.
   - Scan the QR code generated in your terminal or browser.
   - Alternatively, press `a` for Android Emulator or `i` for iOS Simulator.

## 📂 Project Structure

```text
src/
├── app/
│   └── index.tsx              # Main UI screen orchestrator
├── components/
│   └── todo/                  # Isolated presentation components
│       ├── todo-form.tsx      
│       ├── todo-header.tsx    
│       └── todo-item.tsx      
├── constants/
│   ├── initial-todos.ts       # Extracted static mock data
│   └── theme.ts               # Design tokens (colors, spacing, typography)
├── hooks/
│   └── use-todos.ts           # Centralized business logic & state
└── types/
    └── todo.ts                # TypeScript interfaces
```

## 📜 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
