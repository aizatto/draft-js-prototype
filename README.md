Experiment at https://aizatto.github.io/draft-js-prototype/

- https://draftjs.org/
- https://www.draft-js-plugins.com/
- https://npmcompare.com/compare/draft-js-export-markdown,draftjs-md-converter,draftjs-to-markdown,markdown-draft-js
- https://www.npmjs.com/package/@types/draft-js
- https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/draft-js
- https://github.com/facebook/draft-js/find/master
- https://github.com/facebook/draft-js/blob/master/src/component/utils/KeyBindingUtil.js
- https://draftjs.org/docs/api-reference-rich-utils
- https://github.com/facebook/draft-js/blob/585af35c3a8c31fefb64bc884d4001faa96544d3/src/model/modifier/RichTextEditorUtil.js
- https://draftjs.org/docs/api-reference-content-block

# Mobile Support

> Draft.js is moving towards full mobile support, but does not officially support mobile browsers at this point. There are some known issues affecting Android and iOS - see issues tagged 'android' or 'ios' for the current status.

https://draftjs.org/docs/advanced-topics-issues-and-pitfalls.html#mobile-not-yet-supported

# Keyboard Shortcuts

https://support.google.com/docs/answer/179738?co=GENIE.Platform%3DDesktop&hl=en

Google Docs:

Mac:

- Header 1: Command + Option + 1
- Header 2: Command + Option + 2
- Header 3: Command + Option + 3
- Link: Command + K

# Issues

## draft-js-markdown-plugin@3.0.5 does not work with draft-js@0.11.4

- Original: draft-js-plugins-editor@3.0.0 and draft-js0.11.4
  - doesn't work
  - draft-jsplugins-editor is typed
  - Issue in `draft-js-markdown-plugin/lib/index.js`
  - Error:
    - setEditorState is not a function
    - at Object.handleBeforeInput (index.js:410)
- Test 1: draft-js-plugins-editor@2.1.1 and draft-js0.11.4
  - doesn't work
  - draft-js-plugins-editor isn't typed
  - Issue in `draft-js-markdown-plugin/lib/index.js`
  - Error:
    - setEditorState is not a function
    - at Object.handleBeforeInput (index.js:410)
- Test 2: draft-js-plugins-editor@3.0.0 and draft-js0.10.5
  - Issue in `draft-js-plugins-editor/lib/Editor/defaultKeyCommands.js`
  - Error:
    - Uncaught TypeError: Cannot read property 'setEditorState' of undefined
    - at Object.handleKeyCommand (defaultKeyCommands.js:12)
- Test 3: draft-js-plugins-editor@2.1.1 and draft-js0.10.5
  - works
  - draft-js-plugins-editor isn't typed
