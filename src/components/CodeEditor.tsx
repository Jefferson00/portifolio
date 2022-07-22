import CodeEditorr from "@uiw/react-textarea-code-editor";
import { useState } from "react";

import styles from "../styles/cursor.module.css";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import { ControllerRenderProps } from "react-hook-form";

interface CodeEditorProps {
  field: ControllerRenderProps<any, any>;
  name: string;
}

export default function CodeEditor({ field, name }: CodeEditorProps) {
  const [valueState, setValueState] = useState(`<h1>Teste</h1>`);
  return (
    <div className={styles.wrapper}>
      <AceEditor
        placeholder="Placeholder Text"
        mode="html"
        theme="monokai"
        name={name}
        onChange={field.onChange}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={field.value}
        width={"100%"}
        height={"200px"}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </div>
  );
}
