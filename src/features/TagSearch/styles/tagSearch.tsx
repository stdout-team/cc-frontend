import {Button, Input, InputRef, Space, Typography} from "antd";
import React, {ChangeEventHandler, FocusEventHandler, KeyboardEventHandler, useRef, useState} from "react";
import styled from "styled-components";
import {EventsRequest} from "@/shared/api/entities/entities";

const InputContainer = styled.div`
  border-radius: 2px;
  border: 1px solid #F5F5F5;
  background: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px 20px;
`;
const {Title, Text} = Typography;

const SearchResult = styled(Text)`
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`


interface TagSearchProps {
    onChange: ChangeEventHandler<HTMLInputElement>
    onBlur: FocusEventHandler<HTMLInputElement>
    onEnter: KeyboardEventHandler<HTMLInputElement>
    value: string
    onSelect: (value: string) => void;
}

export function TagSearch({onEnter, onBlur, onChange, value, onSelect}: TagSearchProps) {
    const inputRef = useRef<InputRef>(null);
    const foundInterests = ['Футбол', 'IT']

    return (
        <InputContainer>
            <Title level={4}>Поиск</Title>
            <Input.Search
                ref={inputRef}
                type="text"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onPressEnter={onEnter}
            />
            <Space direction='vertical'>
                {
                    foundInterests.length > 0 && (
                        foundInterests.map(interest => <SearchResult key={interest} onClick={() => onSelect(interest)}>{interest}</SearchResult>)
                    )
                }
            </Space>
            <Space direction='horizontal'>
                <Button type='primary'>Найти</Button>
                <Button>Сбросить</Button>
            </Space>
        </InputContainer>
    )
}