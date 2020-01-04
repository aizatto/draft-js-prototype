import React, { useRef, useState } from "react";
import { Container, Button } from "reactstrap";

import Editor from "draft-js-plugins-editor";
// @ts-ignore
import createMarkdownPlugin from "draft-js-markdown-plugin";
import { EditorState } from "draft-js";

// These are not typescript compatible yet
/* eslint-disable @typescript-eslint/no-var-requires */
const { stateToMarkdown } = require("draft-js-export-markdown");
const { stateFromMarkdown } = require("draft-js-import-markdown");

// so it doesn't get called all the time
const emptyEditorState = EditorState.createEmpty();
const plugins = [createMarkdownPlugin()];

function AppEditor(): JSX.Element {
  const [editorState, setEditorState] = useState(emptyEditorState);
  const [markdown, setMarkdown] = useState("");

  return (
    <div>
      <div style={{ border: "1px solid #000" }}>
        <Editor
          editorState={editorState}
          onChange={editorState => {
            // console.log(editorState.getCurrentContent());
            setEditorState(editorState);
            const newMarkdown = stateToMarkdown(
              editorState.getCurrentContent()
            );
            setMarkdown(newMarkdown);
          }}
          plugins={plugins}
        />
      </div>
      <textarea value={markdown} />
    </div>
  );
}

export default AppEditor;
