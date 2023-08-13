import {Input, InputRef, Space, Tag, Tooltip} from "antd";
import React, {useEffect, useRef, useState} from "react";
import {PlusOutlined} from "@ant-design/icons";

interface TagsGroupWithAddRemove {
    tagsData: string[]
    onChange?: (e: string[]) => void
}

export const TagsGroupWithAddRemove = ({tagsData, onChange}: TagsGroupWithAddRemove) => {
    const [tags, setTags] = useState(tagsData);
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [editInputIndex, setEditInputIndex] = useState(-1);
    const [editInputValue, setEditInputValue] = useState('');
    const inputRef = useRef<InputRef>(null);
    const editInputRef = useRef<InputRef>(null);

    useEffect(() => {
        if (inputVisible) {
            inputRef.current?.focus();
        }
    }, [inputVisible]);
    useEffect(() => {
        if (tags.length !== 0 && onChange) {
            onChange(tags);
        }
    }, [tags])
    useEffect(() => {
        editInputRef.current?.focus();
    }, [editInputValue]);

    const handleClose = (removedTag: string) => {
        const newTags = tags.filter((tag) => tag !== removedTag);
        setTags(newTags);
    };

    const showInput = () => {
        setInputVisible(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleInputConfirm = () => {
        if (inputValue && tags.indexOf(inputValue) === -1) {
            setTags([...tags, inputValue]);
        }
        setInputVisible(false);
        setInputValue('');
    };

    const handleEditInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditInputValue(e.target.value);
    };

    const handleEditInputConfirm = () => {
        const newTags = [...tags];
        newTags[editInputIndex] = editInputValue;
        setTags(newTags);
        setEditInputIndex(-1);
        setEditInputValue('');
    };

    const tagInputStyle: React.CSSProperties = {
        width: 64,
        height: 22,
        marginInlineEnd: 8,
        verticalAlign: 'top',
    };

    const tagPlusStyle: React.CSSProperties = {
        height: 22,
    };

    return (
        <Space size={[0, 8]} wrap>
            <Space size={[0, 8]} wrap>
                {tags.map((tag, index) => {
                    if (editInputIndex === index) {
                        return (
                            <Input
                                ref={editInputRef}
                                key={tag}
                                size="small"
                                style={tagInputStyle}
                                value={editInputValue}
                                onChange={handleEditInputChange}
                                onBlur={handleEditInputConfirm}
                                onPressEnter={handleEditInputConfirm}
                            />
                        );
                    }
                    const isLongTag = tag.length > 20;
                    const tagElem = (
                        <Tag
                            key={tag}
                            closable={index >= 0}
                            style={{userSelect: 'none'}}
                            onClose={() => handleClose(tag)}
                        >
              <span
                  onDoubleClick={(e) => {
                      if (index !== 0) {
                          setEditInputIndex(index);
                          setEditInputValue(tag);
                          e.preventDefault();
                      }
                  }}
              >
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </span>
                        </Tag>
                    );
                    return isLongTag ? (
                        <Tooltip title={tag} key={tag}>
                            {tagElem}
                        </Tooltip>
                    ) : (
                        tagElem
                    );
                })}
                {inputVisible ? (
                    <Input
                        ref={inputRef}
                        type="text"
                        size="small"
                        style={tagInputStyle}
                        value={inputValue}
                        onChange={handleInputChange}
                        onBlur={handleInputConfirm}
                        onPressEnter={handleInputConfirm}
                    />
                ) : (
                    <Tag style={tagPlusStyle} onClick={showInput}>
                        Добавить тег
                    </Tag>
                )}
            </Space>
        </Space>
    );
};