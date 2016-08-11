interface CursorPosition {
  lineNumber: number;
  column: number;
}

interface EditorState {
  cursorPosition: CursorPosition;
}

// This fix SystemJS Error
export { CursorPosition, EditorState };
