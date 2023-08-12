import {Button, Divider, Input, Space, Tag, Typography} from 'antd';
import styled from "styled-components";
import {PictureFilled} from "@ant-design/icons";
import Link from "next/link";

export interface CardProps {
    onAdd: () => void;
    onDateSet: () => void;
}

const {Title, Text} = Typography;
export const NewCard = ({onAdd, onDateSet}: CardProps) => {
    return (
        <CardStyled>
            <CardTop>
                <CardImage>
                    <PictureFilled twoToneColor='#666'/>
                </CardImage>
            </CardTop>
            <CardBody>
                <Space direction='vertical' align='center'>
                    <Input placeholder='Название мероприятия'/>
                    <Input placeholder='Место проведения'/>
                    <Input placeholder='Тэги'/>
                    <Link onClick={onDateSet} href="#">Указать дату и время</Link>
                    <Button onClick={onAdd} type='primary'>Добавить событие</Button>
                </Space>
            </CardBody>
        </CardStyled>
    );
}

const CardStyled = styled('div')`
  display: flex;
  width: 240px !important;
  position: relative;
  flex-direction: column;
  border-radius: 2px;
  border: 1px solid #F5F5F5;
  background: white;
  box-sizing: border-box;
`;
const CardBody = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  padding: 24px;
  gap: 8px;
  
  & button {  
    width: 100%;
  }
`;

const CardImage = styled('div')`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  & * {
    width: 100%;
    height: 100%;
  }
`;

const CardTop = styled('div')`
  flex: 0 0 134px;
  position: relative;
  overflow: hidden;
`;