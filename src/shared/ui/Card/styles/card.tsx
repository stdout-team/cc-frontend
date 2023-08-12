import {Space, Tag, Typography} from 'antd';
import styled from "styled-components";

export interface CardProps {
    id?: string
    date: string
    place: string
    tags: string[]
    title: string
    imgLink: string
}

const {Title, Text} = Typography;
export const Card = ({id, date, place, tags, title, imgLink}: CardProps) => {
    return (
        <CardStyled id={id}>
            <CardCover img={imgLink}/>
            <CardBody>
                <Title style={{margin: 0}} level={5}>{title}</Title>
                <Text>{date}</Text>
                <Text>{place}</Text>
                <Space size={[1, 1]} wrap>
                    {tags.map((tag) => (
                        <Tag
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
  flex-direction: column;
  align-items: flex-start;
  border-radius: 2px;
  border: 1px solid #F5F5F5;
  background: white;
`
const CardBody = styled('div')`
  display: flex;
  padding: 24px;
  flex-direction: column;
  gap: 8px;
`

const CardCover = styled('div')<{ img: string }>`
  display: flex;
  width: 240px;
  height: 134px;
  background-image: url('${props => props.img}');
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  align-items: flex-start;
`