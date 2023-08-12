import {Space, Tag} from 'antd';
import {useEffect, useState} from "react";

const {CheckableTag} = Tag;

interface TagsGroup {
    tagsData: string[]
    withSwipe?: boolean
    onChange?: (e: string[]) => void
}

export const TagsGroup = ({tagsData, withSwipe, onChange}: TagsGroup) => {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [tags, setTags] = useState<string[]>(tagsData);
    const handleChange = (tag: string, checked: boolean) => {
        const nextSelectedTags = checked
            ? [tag, ...selectedTags]
            : selectedTags.filter((t) => t !== tag);
        setSelectedTags(nextSelectedTags);
        if (withSwipe) {
            checked ? setTags([...selectedTags, tag, ...tags.filter(value => value !== tag && !selectedTags.includes(value))]) :
                setTags([...tags.filter(value => value !== tag), tag]);
        }
    };
    useEffect(() => {
        if (selectedTags.length !== 0 && onChange) {
            onChange(selectedTags);
        }
    }, [selectedTags])

    return (
        <>
            <Space size={[4, 8]} wrap>
                {tags.map((tag) => (
                    <CheckableTag
                        key={tag}
                        checked={selectedTags.includes(tag)}
                        onChange={(checked) => handleChange(tag, checked)}
                    >
                        {tag}
                    </CheckableTag>
                ))}
            </Space>
        </>
    );
};

