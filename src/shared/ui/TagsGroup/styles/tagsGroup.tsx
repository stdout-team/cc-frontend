import {Space, Tag} from 'antd';
import {useState} from "react";

const {CheckableTag} = Tag;

interface TagsGroup {
    tagsData: string[]
}

export const TagsGroup = ({tagsData}: TagsGroup) => {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [tags, setTags] = useState<string[]>(tagsData);
    const handleChange = (tag: string, checked: boolean) => {
        const nextSelectedTags = checked
            ? [tag, ...selectedTags]
            : selectedTags.filter((t) => t !== tag);
        setSelectedTags(nextSelectedTags);
        checked ? setTags([tag, ...tags.filter(value => value !== tag)]) :
            setTags([...tags.filter(value => value !== tag), tag]);
    };

    return (
        <>
            <Space size={[4,8]} wrap>
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

//
// const CheckableTagStyled = styled(CheckableTag)`
//   color: black;
//   display: flex;
//   padding: 1px 8px;
//   align-items: center;
//   gap: 3px;
//   border-radius: 2px;
//   border: 1px solid #F5F5F5;
//   background: #F5F5F5;
// `