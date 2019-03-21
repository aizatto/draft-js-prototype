import React, { useState, useRef, useEffect, useImperativeHandle } from "react";
import {
  ContentState,
  Editor as DraftJSEditor,
  EditorState,
  getDefaultKeyBinding,
  KeyBindingUtil,
  RichUtils
} from "draft-js";

const { isOptionKeyCommand } = KeyBindingUtil;
// `usesMacOSHeuristics` is apparently not released in the current version of
// draft-js

type SyntheticKeyboardEvent = React.KeyboardEvent<{}>;

/* eslint-disable no-unused-vars */
enum DraftHandleValue {
  HANDLED = "handled",
  NOT_HANDLED = "not-handled"
}

enum DraftHandleCommand {
  HEADER_ONE = "header-one",
  HEADER_TWO = "header-two",
  HEADER_THREE = "header-three"
}

enum KeyCode {
  DIGIT_0 = 48,
  DIGIT_1 = 49,
  DIGIT_2 = 50,
  DIGIT_3 = 51,
  DIGIT_9 = 57,
  A = 65,
  Z = 90
}
/* eslint-enable -no-unused-vars */

/**
 * DraftJS doesn't register the two at the same time
 */
function isOptionAndCommandKey(e: SyntheticKeyboardEvent): boolean {
  return isOptionKeyCommand(e) && e.metaKey;
}

const Editor = React.forwardRef((_, parentRef) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const ref = useRef<DraftJSEditor>(null);
  const once = useRef(false);
  useEffect(() => {
    if (ref && ref.current && once.current === false) {
      ref.current.focus();
      once.current = true;
    }
  });

  useImperativeHandle(
    parentRef,
    () => ({
      content: () => {
        return editorState.getCurrentContent();
      },
      setContent: (contentState: ContentState) => {
        const newEditorState = EditorState.createWithContent(contentState);

        setEditorState(newEditorState);
      }
    }),
    [editorState]
  );

  const onChange = (newEditorState: EditorState): void => {
    setEditorState(newEditorState);
  };

  const keyBindingFn = (e: SyntheticKeyboardEvent): string | null => {
    if (isOptionAndCommandKey(e)) {
      switch (e.keyCode) {
        case KeyCode.DIGIT_1:
          return DraftHandleCommand.HEADER_ONE;

        case KeyCode.DIGIT_2:
          return DraftHandleCommand.HEADER_TWO;

        case KeyCode.DIGIT_3:
          return DraftHandleCommand.HEADER_THREE;

        default:
          return getDefaultKeyBinding(e);
      }
    }

    return getDefaultKeyBinding(e);
  };

  const handleKeyCommand = (command: DraftHandleCommand): DraftHandleValue => {
    switch (command) {
      case DraftHandleCommand.HEADER_ONE:
      case DraftHandleCommand.HEADER_TWO:
      case DraftHandleCommand.HEADER_THREE:
        setEditorState(RichUtils.toggleBlockType(editorState, command));
        return DraftHandleValue.HANDLED;

      default:
        return DraftHandleValue.NOT_HANDLED;
    }
  };

  return (
    <DraftJSEditor
      ref={ref}
      editorState={editorState}
      onChange={onChange}
      handleKeyCommand={handleKeyCommand}
      keyBindingFn={keyBindingFn}
    />
  );
});
export default Editor;
