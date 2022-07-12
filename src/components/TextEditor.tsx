import { useEffect, useState } from "react";
import { ControllerRenderProps } from "react-hook-form";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  FiArrowLeft,
  FiArrowRight,
  FiBold,
  FiItalic,
  FiList,
} from "react-icons/fi";

interface TextEditorProps {
  field: ControllerRenderProps<any, any>;
  name: string;
}

const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const buttonStyle = {
    background: "#D1D1D1",
    width: 24,
    height: 24,
    borderRadius: 3,
  };

  const rowStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: 16,
    alignItems: "center",
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 16,
        alignItems: "center",
        padding: "8px 16px",
      }}
    >
      <button
        style={buttonStyle}
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <FiBold color="#111518" />
      </button>
      <button
        style={buttonStyle}
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <FiItalic color="#111518" />
      </button>
      {/* <button
        style={buttonStyle}
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
         
      </button> */}
      {/*  <button
        type="button"
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={editor.isActive("code") ? "is-active" : ""}
      >
        code
      </button> */}
      {/* <button
        type="button"
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
      >
        clear marks
      </button> */}
      {/* <button
        type="button"
        onClick={() => editor.chain().focus().clearNodes().run()}
      >
        clear nodes
      </button> */}
      <button
        style={buttonStyle}
        type="button"
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : ""}
      >
        P
      </button>
      {/*  <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        h1
      </button> */}
      {/* <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "is-active" : ""}
      >
        h2
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive("heading", { level: 3 }) ? "is-active" : ""}
      >
        h3
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive("heading", { level: 4 }) ? "is-active" : ""}
      >
        h4
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive("heading", { level: 5 }) ? "is-active" : ""}
      >
        h5
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive("heading", { level: 6 }) ? "is-active" : ""}
      >
        h6
      </button> */}
      <button
        style={buttonStyle}
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        <FiList color="#111518" />
      </button>
      <button
        style={buttonStyle}
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        <FiList color="#111518" />
      </button>
      {/* <button
        type="button"
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive("codeBlock") ? "is-active" : ""}
      >
        code block
      </button> */}
      {/* <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "is-active" : ""}
      >
        blockquote
      </button> */}
      {/* <button
        type="button"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
      >
        horizontal rule
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setHardBreak().run()}
      >
        hard break
      </button> */}
      <button
        style={buttonStyle}
        type="button"
        onClick={() => editor.chain().focus().undo().run()}
      >
        <FiArrowLeft color="#111518" />
      </button>
      <button
        style={buttonStyle}
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
      >
        <FiArrowRight color="#111518" />
      </button>
    </div>
  );
};

export default function TextEditor({ field, name }: TextEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: field.value,
  });

  useEffect(() => {
    if (editor) {
      field.onChange(editor.getHTML());
    }
  }, [editor?.state]);

  return (
    <>
      <MenuBar editor={editor} />
      <EditorContent
        required
        name={name}
        rows={5}
        editor={editor}
        value={field.value}
        style={{
          background: "#D1D1D1",
          padding: "1rem",
          borderRadius: 8,
          color: "#111518",
        }}
      />
    </>
  );
}
