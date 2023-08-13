import {Space, Tag, Typography} from 'antd';
import {useEffect, useState} from "react";

const {CheckableTag} = Tag;

interface TagsGroup {
    tagsData: string[]
    withSwipe?: boolean
    onChange?: (e: string[]) => void
}

const {Text} = Typography;

export const TagsGroup = ({tagsData, withSwipe, onChange}: TagsGroup) => {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [tags, setTags] = useState<string[]>(tagsData);
    const handleChange = (tag: string, checked: boolean) => {
        const nextSelectedTags = checked
            ? [tag, ...selectedTags]
            : selectedTags.filter((t) => t !== tag);
        setSelectedTags(nextSelectedTags);

    };
    useEffect(() => {
        if (selectedTags.length !== 0 && onChange) {
            onChange(selectedTags);
        }
    }, [selectedTags])

    useEffect(() => {
        setTags(tagsData)
    }, [tagsData])

    console.log(tagsData, tagsData.length, tags, tags.length)
    return (
        <>
            <Space size={[4, 8]} wrap>
                {tags.map((tag) => (
                    <CheckableTag
                        key={tag}
                        checked={selectedTags.includes(tag)}
                        onChange={(checked) => handleChange(tag, checked)}
                    >
                        <Text style={{filter: selectedTags.includes(tag) ? 'invert()' : ''}}>{tag}</Text>
                    </CheckableTag>
                ))}
            </Space>
        </>
    );
};

