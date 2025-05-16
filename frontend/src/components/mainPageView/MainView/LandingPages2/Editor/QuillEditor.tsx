import React, { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import {Button} from "antd";
// import 'react-quill/dist/quill.snow.css';

interface QuillEditorProps {
    value: string | undefined | null;
    onChange: (content: string) => void;
}

const QuillEditor: React.FC<QuillEditorProps> = ({ value, onChange }) => {
    const [content, setContent] = useState<string>('');
    const quillRef = useRef<ReactQuill>(null);

    useEffect(() => {
        if (value !== content) {
            setContent(value || '');
        }
    }, [value]);

    const handleChange = (newContent: string) => {
        setContent(newContent);
        onChange(newContent);
    };

    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image', 'video'],
            ['clean']
        ],
    };

    const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'video'
    ];

    return (
        // <ReactQuill
        //     ref={quillRef}
        //     value={content}
        //     onChange={handleChange}
        //     modules={modules}
        //     formats={formats}
        //     style={{ height: '500px' }}
        // />
        <Button />
    );
};

export default QuillEditor;