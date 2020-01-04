import React, { useRef, useState } from "react";
import { Container, Button } from "reactstrap";
import { ContentState } from "draft-js";
import Editor from "./Editor";

// These are not typescript compatible yet
/* eslint-disable @typescript-eslint/no-var-requires */
const { stateToMarkdown } = require("draft-js-export-markdown");
const { stateFromMarkdown } = require("draft-js-import-markdown");

interface EditorRef {
  content: () => ContentState;
  setContent: (content: ContentState) => void;
}

function App(): JSX.Element {
  const [markdown, setMarkdown] = useState("");
  const editorRef = useRef<EditorRef>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onClick = (): void => {
    if (!editorRef || !editorRef.current) {
      return;
    }

    const newMarkdown = stateToMarkdown(editorRef.current.content());
    setMarkdown(newMarkdown);

    if (textareaRef && textareaRef.current) {
      textareaRef.current.value = newMarkdown;
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    if (!editorRef || !editorRef.current) {
      return;
    }

    const newMarkdown = e.target.value;
    setMarkdown(newMarkdown);
    const content = stateFromMarkdown(newMarkdown);
    editorRef.current.setContent(content);
  };

  return (
    <div className="App">
      <Container className="pt-3">
        Hello World
        <div style={{ border: "1px solid #000" }}>
          <Editor ref={editorRef} />
        </div>
        <Button onClick={onClick}>To Markdown</Button>
        <div>
          <textarea
            ref={textareaRef}
            defaultValue={markdown}
            onChange={onChange}
          />
        </div>
      </Container>
    </div>
  );
}

export default App;
