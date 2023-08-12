import {Space, Tag} from 'antd';
import {useState} from "react";

const {CheckableTag} = Tag;

interface TagsGroup {
    tagsData: string[]
    withSwipe?: boolean
}

export const TagsGroup = ({tagsData, withSwipe}: TagsGroup) => {
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

