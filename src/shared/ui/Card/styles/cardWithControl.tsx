import styled from "styled-components";
import {Button, Divider, Form, Input, Space, Tag, Typography} from "antd";
import {CardProps, TagsGroupWithAddRemove} from "@/shared/ui";
import {CheckOutlined, DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {useState} from "react";

const {Title, Text} = Typography;
export const CardWithControl = (props: CardProps) => {
    const [cardData, setCardData] = useState<CardProps>(props);
    const [showForm, setShowForm] = useState(false);
    const [newTags, setNewTags] = useState<string[]>([]);
    const [deleted, setDeleted] = useState(false);
    const [form] = Form.useForm<{ title: string, place: string, date: string, tags: string }>();
    const editButtonHandler = () => {
        if (showForm) {
            setCardData(data => ({
                ...data,
                date: form.getFieldInstance("date").input.value,
                place: form.getFieldInstance("place").input.value,
                title: form.getFieldInstance("title").input.value,
                tags: newTags
            }))
        }
        setShowForm(!showForm)
    }
    return (
        <CardStyled id={cardData.id}>
            {!deleted && <> <CardTop>
                <CardImage>
                    <img src={cardData.imgLink}/>
                </CardImage>
            </CardTop>
                <CardBody>
                    {showForm ?
                        <Form
                            form={form}
                            name="wrap"
                            labelAlign="left"
                            wrapperCol={{flex: 1}}
                            colon={false}
                            onFinish={editButtonHandler}
                            style={{maxWidth: 240}}
                        >
                            <Form.Item name="title" rules={[{required: true}]}>
                                <Input defaultValue={cardData.title}/>
                            </Form.Item>

                            <Form.Item name="place" rules={[{required: true}]}>
                                <Input defaultValue={cardData.place}/>
                            </Form.Item>
                            <Form.Item name="date" rules={[{required: true}]}>
                                <Input defaultValue={cardData.date}/>
                            </Form.Item>
                            <Form.Item name="tags" rules={[{required: true}]}>
                                <TagsGroupWithAddRemove onChange={e => setNewTags(e)} tagsData={cardData.tags}/>
                            </Form.Item>
                        </Form> : <>
                            <Title style={{margin: 0}} level={5}>{cardData.title}</Title>
                            <Text>{cardData.place}</Text>
                            <Text>{cardData.date}</Text>
                            <Space size={[1, 1]} wrap>
                                {cardData.tags.map((tag) => (
                                    <Tag
                                        bordered={false}
                                        key={tag}>
                                        {tag}
                                    </Tag>
                                ))}
                            </Space></>}
                    <div>
                        <Divider style={{margin: "8px 0 4px 0"}}/>
                        <Button htmlType="submit" onClick={editButtonHandler} size="small" type="default"
                                style={{width: 96, border: "none", boxShadow: "none"}}
                                icon={showForm ? <CheckOutlined/> : <EditOutlined/>}/>

                        <Button onClick={() => setDeleted(true)} size="small" type="default"
                                style={{width: 96, border: "none", boxShadow: "none"}}
                                icon={<DeleteOutlined/>}/>
                    </div>
                </CardBody></>}
        </CardStyled>
    );
}

const CardStyled = styled('div')`
  display: flex;
  width: 240px;
  height: 344px;
  position: relative;
  flex-direction: column;
  border-radius: 2px;
  border: 1px solid #F5F5F5;
  background: white;
`;
const CardBody = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding: 24px;
  gap: 8px;
`;

const CardImage = styled('div')`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CardTop = styled('div')`
  flex: 0 0 134px;
  position: relative;
  overflow: hidden;
`;