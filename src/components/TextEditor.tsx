import { useCallback, useEffect, useState } from "react";
import { ControllerRenderProps } from "react-hook-form";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import {
  FiArrowLeft,
  FiArrowRight,
  FiBold,
  FiItalic,
  FiLink,
  FiLink2,
  FiList,
} from "react-icons/fi";

interface TextEditorProps {
  field: ControllerRenderProps<any, any>;
  name: string;
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

const MenuBar = ({ editor }) => {
  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  if (!editor) {
    return null;
  }

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
      <button
        style={buttonStyle}
        type="button"
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive("paragraph") ? "is-active" : ""}
      >
        P
      </button>
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
      <button
        style={buttonStyle}
        onClick={setLink}
        className={editor.isActive("link") ? "is-active" : ""}
      >
        <FiLink color="#111518" />
      </button>
      <button
        style={buttonStyle}
        onClick={() => editor.chain().focus().unsetLink().run()}
        disabled={!editor.isActive("link")}
      >
        <FiLink2 color="#111518" />
      </button>
    </div>
  );
};

export default function TextEditor({ field, name }: TextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
    ],
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
