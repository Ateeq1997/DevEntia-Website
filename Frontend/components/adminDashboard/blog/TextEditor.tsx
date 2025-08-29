'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import { TextStyle } from '@tiptap/extension-text-style';
import { Color } from '@tiptap/extension-color';
import TextAlign from '@tiptap/extension-text-align';
import Heading from '@tiptap/extension-heading';
import Placeholder from '@tiptap/extension-placeholder';
import TiptapLink from '@tiptap/extension-link';   // ✅ renamed
import { Link as LinkIcon, Link2Off } from "lucide-react";

import { useEffect, useState } from 'react';
import {
  Bold,
  Italic,
  Underline as UnderlineIcon,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Palette,
} from 'lucide-react';

const TextEditor = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) => {
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [url, setUrl] = useState("");
  const [showInput, setShowInput] = useState(false);

  const applyLink = () => {
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
      setUrl("");
      setShowInput(false);
    }
  };
  const colors = [
    '#000000', '#FF0000', '#FF8000', '#FFFF00', '#00FF00', '#00FFFF',
    '#0000FF', '#808080', '#FFC0CB', '#FFD700', '#90EE90', '#87CEEB',
    '#E6E6FA', '#8A2BE2', '#DC143C', '#FF1493', '#FF4500', '#DAA520',
    '#006400', '#008080', '#4682B4', '#5F9EA0', '#FFFFFF', '#696969',
    '#2F4F4F'
  ];

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Color,
      Heading.configure({ levels: [1, 2, 3] }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Placeholder.configure({
        placeholder: 'Add Blog Description',
      }),
      TiptapLink.configure({
        openOnClick: false,
        autolink: true,
        HTMLAttributes: {
          class: 'text-[#29838C] underline cursor-pointer',
        },
      }),
      
      
    ],
    content: value || null,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    // ✅ Add this to fix the SSR hydration warning:
    immediatelyRender: false,
  });
  

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || null); // FIX: null for placeholder
    }
  }, [value, editor]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showColorPicker &&
        !(event.target as Element).closest('.color-picker-container')
      ) {
        setShowColorPicker(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, [showColorPicker]);

  if (!editor) return <div>Loading editor...</div>;

  const ToolbarButton = ({
    onClick,
    isActive = false,
    children,
    title,
  }: {
    onClick: () => void;
    isActive?: boolean;
    children: React.ReactNode;
    title: string;
  }) => (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className={`p-2 rounded hover:bg-gray-200 transition-colors ${
        isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-700'
      }`}
      title={title}
    >
      {children}
    </button>
  );

  return (
    <div className="space-y-3 rounded bg-white shadow-sm border border-gray-400">
      {/* Toolbar */}
      <div className="flex flex-wrap gap-1 p-2">
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive('bold')}
          title="Bold"
        >
          <Bold size={16} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive('italic')}
          title="Italic"
        >
          <Italic size={16} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          isActive={editor.isActive('underline')}
          title="Underline"
        >
          <UnderlineIcon size={16} />
        </ToolbarButton>

        <div className="w-px bg-gray-300 mx-1"></div>

        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive('bulletList')}
          title="Bullet List"
        >
          <List size={16} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive('orderedList')}
          title="Numbered List"
        >
          <ListOrdered size={16} />
        </ToolbarButton>

        <div className="w-px bg-gray-300 mx-1"></div>

        <ToolbarButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          isActive={editor.isActive('heading', { level: 1 })}
          title="Heading 1"
        >
          <span className="flex flex-row items-center gap-1">
            <Heading1 size={16} />
            <span className="text-[11px]">Outline</span>
          </span>
        </ToolbarButton>

        <ToolbarButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          isActive={editor.isActive('heading', { level: 2 })}
          title="Heading 2"
        >
          <Heading2 size={16} />
        </ToolbarButton>

        <ToolbarButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          isActive={editor.isActive('heading', { level: 3 })}
          title="Heading 3"
        >
          <Heading3 size={16} />
        </ToolbarButton>

        <div className="w-px bg-gray-300 mx-1"></div>

        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          isActive={editor.isActive({ textAlign: 'left' })}
          title="Align Left"
        >
          <AlignLeft size={16} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          isActive={editor.isActive({ textAlign: 'center' })}
          title="Align Center"
        >
          <AlignCenter size={16} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          isActive={editor.isActive({ textAlign: 'right' })}
          title="Align Right"
        >
          <AlignRight size={16} />
        </ToolbarButton>

        <div className="w-px bg-gray-300 mx-1"></div>

        <div className="relative color-picker-container">
          <ToolbarButton
            onClick={() => setShowColorPicker(!showColorPicker)}
            title="Text Color"
          >
            <Palette size={16} />
          </ToolbarButton>
      {/* Add Link */}
      <ToolbarButton
        onClick={() => setShowInput((prev) => !prev)}
        isActive={editor.isActive("link")}
        title="Add Link"
      >
        <LinkIcon className="w-4 h-4" />
      </ToolbarButton>

      {/* Remove Link */}
      <ToolbarButton
        onClick={() => editor.chain().focus().unsetLink().run()}
        title="Remove Link"
      >
        <Link2Off className="w-4 h-4" />
      </ToolbarButton>

      {/* Inline Input for link */}
      {showInput && (
        <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-lg">
          <input
            type="url"
            placeholder="https://example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="px-2 py-1 text-sm border rounded-lg focus:outline-none"
          />
          <button
            onClick={applyLink}
            className="px-2 py-1 text-xs bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Add
          </button>
        </div>
      )}

          {showColorPicker && (
            <div className="absolute top-full left-0 mt-1 p-3 bg-white border rounded-lg shadow-lg z-10 min-w-[200px]">
              <div className="grid grid-cols-5 gap-2">
                {colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    className="w-8 h-8 rounded border-2 border-gray-200 hover:border-gray-400 transition-colors"
                    style={{ backgroundColor: color }}
                    onMouseDown={(e) => {
                      // Prevent the mousedown from removing the selection
                      e.preventDefault();
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      // Don't use focus() here - it will clear the selection
                      editor.chain().setColor(color).run();
                      setShowColorPicker(false);
                    }}
                    title={`Set color to ${color}`}
                  />
                ))}
              </div>
              <div className="mt-2 pt-2 border-t">
                <button
                  type="button"
                  className="text-sm text-gray-600 hover:text-gray-800 px-2 py-1 rounded hover:bg-gray-100"
                  onMouseDown={(e) => {
                    // Prevent the mousedown from removing the selection
                    e.preventDefault();
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    // Don't use focus() here - it will clear the selection
                    editor.chain().unsetColor().run();
                    setShowColorPicker(false);
                  }}
                >
                  Remove Color
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Editor Content */}
      <div className="p-4 min-h-[200px] bg-white text-black outline-none h-[500px] overflow-y-auto">
        <EditorContent editor={editor} />
      </div>

      <style jsx global>{`
        .ProseMirror {
          outline: none;
          min-height: 150px;
        }
        .ProseMirror p.is-empty::before {
          content: attr(data-placeholder);
          float: left;
          color: #aaa;
          pointer-events: none;
          height: 0;
        }
        
        /* Show placeholder when editor is completely empty and not focused */
        .ProseMirror.ProseMirror-focused p.is-empty::before {
          display: none;
        }
        
        /* Hide placeholder when there's any content */
        .ProseMirror p:not(.is-empty) ~ p.is-empty::before,
        .ProseMirror:not(:has(p.is-empty:only-child)) p.is-empty::before {
          display: none;
        }
        
        /* Heading Styles - Visual differences for H1, H2, H3 */
        .ProseMirror h1 {
          font-size: 30px;
          font-weight: 400;
          color: #1a1a1a;
        }
        
        .ProseMirror h2 {
          font-size: 24px;
          font-weight: 400;
          line-height: 1.3;
          margin: 1.25rem 0 0.75rem 0;
          color: #2a2a2a;
        }
        
        .ProseMirror h3 {
          font-size: 20px;
          font-weight: 400;
          line-height: 1.4;
          margin: 1rem 0 0.5rem 0;
          color: #3a3a3a;
        }
        
        /* Ensure headings don't inherit other text styles inappropriately */
        .ProseMirror h1,
        .ProseMirror h2,
        .ProseMirror h3 {
          font-family: inherit;
        }
        
        /* Regular paragraph styling for comparison */
        .ProseMirror p {
          font-size: 16px;
          line-height: 1.6;
          margin: 0.5rem 0;
        }
        
        /* List styling for proper bullets and numbers */
        .ProseMirror ul {
          list-style-type: disc;
          margin-left: 1.5rem;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          padding-left: 0;
        }
        
        .ProseMirror ol {
          list-style-type: decimal;
          margin-left: 1.5rem;
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          padding-left: 0;
        }
        
        .ProseMirror ul ul {
          list-style-type: circle;
          margin-top: 0;
          margin-bottom: 0;
        }
        
        .ProseMirror ul ul ul {
          list-style-type: square;
        }
        
        .ProseMirror ol ol {
          list-style-type: lower-alpha;
          margin-top: 0;
          margin-bottom: 0;
        }
        
        .ProseMirror ol ol ol {
          list-style-type: lower-roman;
        }
        
        .ProseMirror li {
          margin: 0.25rem 0;
          display: list-item;
        }
        
        .ProseMirror li p {
          margin: 0;
        }
        
        /* Ensure list items display properly */
        .ProseMirror ul li,
        .ProseMirror ol li {
          display: list-item;
          margin-left: 0;
          padding-left: 0;
        }
      `}</style>
    </div>
  );
};

export default TextEditor;