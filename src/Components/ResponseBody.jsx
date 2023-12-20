import React, { useEffect, useMemo, useRef } from 'react';
import { Paper } from '@material-ui/core';
import { EditorView, keymap } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { basicSetup } from '@codemirror/basic-setup';
import { json } from '@codemirror/lang-json';

const ResponseBody = ({ responseBody }) => {

  
  const editorRef = useRef();

  const view = useMemo(() => {
    if (editorRef.current === null) return null;

    return new EditorView({
      state: EditorState.create({
        doc: responseBody,
        extensions: [basicSetup, keymap.of([]), json()],
        readOnly: true, // Make it strictly non-editable
      }),
      parent: editorRef.current,
    });
  }, [responseBody]);

  useEffect(() => {
    return () => {
      if (view) {
        view.destroy();
      }
    };
  }, [view]);

  return (
    <Paper elevation={3} style={{ marginTop: 20, overflow: 'auto', border: '3px solid rgba(128, 168, 168,1)' }}>
      <div ref={editorRef} style={{ height: '200px', width: '100%' }} readOnly></div>
    </Paper>
  );
};

export default ResponseBody;

