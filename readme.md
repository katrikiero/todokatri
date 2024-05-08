# Todo Katri is my first React Native App

´´´mermaid
graph LR
    A[1. versio inline style, ei tietokantaa] -->
    B[2. versio theme.js tyylitiedostolla]  -->
    C[3. versio tietokannalla] -->
    E[4. versio jakeluun]
´´´

├── App.js
├── app.json
├── assets
├── babel.config.js
├── node_modules
├── package-lock.json
├── package.json
├── readme.md
└── src


## TodoScreen.js

This file defines a React component TodoScreen which is a simple todo list application. It doesn´t have any database yet. It uses React Native for the UI and react-native-paper for some UI components.

### Imports

- React and react-native components for building the UI (Pressable, StyleSheet, Text, TextInput, View, FlatList).
- IconButton from react-native-paper for the edit and delete buttons.
- Fallback component which is displayed when there are no items in the todo list.

### State Variables

- nakit: The current text in the input field.
- nakkilista: The list of todo items.
- editedNakki: The todo item currently being edited.

### Functions

- handleAddNakit: Adds a new todo item to the list.
- handleDeleteNakit: Deletes a todo item from the list.
- handleEditNakit: Sets a todo item as the item currently being edited.
- handleUpdateNakit: Updates the todo item currently being edited.
- renderNakit: Renders a single todo item.

### Rendered Components

- TextInput for adding new todo items.
- Pressable that either adds a new todo item or updates the current todo item being edited, depending on whether there is a todo item being edited.
- FlatList that renders the todo items.
- Fallback component that displays the logo and text when there are no todo items.

### Styles

Currently the app is using inline styles and that´s why styles object is currently empty, but it can be used to define styles for the components.

### Exports

The TodoScreen component is the default export of this file.

## Fallback.js

This file defines a React component Fallback which is displayed when there are no items in the todo list.

### Imports

React and several components from react-native for building the UI.

### Component

Fallback, a functional component that returns a View containing an Image and a Text component. The Image displays a logo, and the Text displays a helpful message to the user.

### Rendered Components

- View: container component aligns its children in the center.
- Image: displays an image/logo that is located in the assets directory.
- Text: displays a message to the user.
