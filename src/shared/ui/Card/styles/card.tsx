import {Space, Tag, Typography} from 'antd';
import styled from "styled-components";
import {HeartFilled} from "@ant-design/icons";

export interface CardProps {
    id?: string
    date: string
    place: string
    tags: string[]
    title: string
    imgLink: string
    onClick: () => void
    likes: number
}

const {Title, Text} = Typography;
export const Card = ({id, date, place, tags, title, imgLink, onClick, likes}: CardProps) => {
    return (
        <CardStyled id={id} onClick={onClick}>
            <CardTop>
                <div className='likes'><HeartFilled/><Text>{likes}</Text></div>
                <CardImage>
                    <img src={imgLink}/>
                </CardImage>
            </CardTop>
            <CardBody>
                <Title style={{margin: 0}} level={5}>{title}</Title>
                <Text>{date}</Text>
                <Text>{place}</Text>
                <Space size={[1, 6]} wrap>
                    {tags.map((tag) => (
                        <Tag
                            bordered={false}
                            key={tag}>
                            {tag}
                        </Tag>
                    ))}
                </Space>
            </CardBody>
        </CardStyled>
    );
}

const CardStyled = styled('div')`
  display: flex;
  width: 240px;
  z-index: 999 !important;
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
  
  & .likes {
    display: flex;
    gap: 5px;
    background: red;
    border-radius: 15px;
    height: 20px;
    width: max-content;
    padding: 5px;
    align-items: center;
    margin: 5px;
    & > * {
      filter: invert();
    }
  }
`;