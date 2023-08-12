import {
    Col,
    DatePicker,
    Row,
    Space,
    Radio,
    RadioChangeEvent,
    InputRef,
    Input,
    Tag,
} from "antd";
import TagsGroup from "@/shared/ui/TagsGroup";
import dayjs from "dayjs";
import type {RangePickerProps} from 'antd/es/date-picker';
import Card from "@/shared/ui/Card";
import {useGetEventsQuery} from "@/shared/api/events/events";
import {EventsRequest} from "@/shared/api/entities/entities";
import React, {useEffect, useRef, useState} from "react";

const {RangePicker} = DatePicker;
const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    return current && current < dayjs().endOf('day');
};

const convertDate = (date: Date) => {
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${yyyy}-${mm}-${dd}`
}

const addDays = function (days: number): Date {
    let date = new Date(Date.now());
    date.setDate(date.getDate() + days);
    return date;
}
export const EventWidget = () => {
    const [requestData, setRequestData] = useState<EventsRequest>({orderBy: "orderByPopularity"} as EventsRequest);
    const [inputVisible, setInputVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [editInputValue, setEditInputValue] = useState('');
    const inputRef = useRef<InputRef>(null);
    const editInputRef = useRef<InputRef>(null);
    const {data, error, isLoading} = useGetEventsQuery(requestData, {skip: false});

    const onChangeDaysButtonHandler = (e: RadioChangeEvent) => {
        switch (e?.target?.value) {
            case "d":
                setRequestData(data => ({...data, maxDate: convertDate(addDays(30)), minDate: convertDate(new Date())}))
                break;
            case "c":
                setRequestData(data => ({...data, maxDate: convertDate(addDays(7)), minDate: convertDate(new Date())}))
                break
            case "b":
                setRequestData(data => ({...data, maxDate: convertDate(addDays(1)), minDate: convertDate(new Date())}))
                break
            case "a":
                setRequestData(data => ({...data, maxDate: convertDate(new Date()), minDate: convertDate(new Date())}))
                break;
            default:
                break;
        }
    }
    const onChangeDataPicker = (e: any) => {
        setRequestData(data => ({...data, maxDate: convertDate(e[1].$d), minDate: convertDate(e[0].$d)}))
    }

    const onChangeTagsGroup = (e: string[]) => {
        setRequestData(data => ({
            ...data,
            interests: e.reduce((previousValue, currentValue) => previousValue + ',' + currentValue)
        }))
    }
    useEffect(() => {
        console.log(requestData)
    }, [requestData])

    useEffect(() => {
        if (inputVisible) {
            inputRef.current?.focus();
        }
    }, [inputVisible]);

    useEffect(() => {
        editInputRef.current?.focus();
    }, [editInputValue]);
    const showInput = () => {
        setInputVisible(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };


    const handleInputConfirm = () => {
        setInputVisible(false);
        setInputValue('');
        setRequestData(data => ({
            ...data,
            interests: data.interests + "," + inputValue.split(" ").reduce((previousValue, currentValue) => previousValue + "+" + currentValue)
        }))

    };

    const tagInputStyle: React.CSSProperties = {
        width: 100,
        height: 22,
        marginInlineEnd: 8,
        verticalAlign: 'top',
    };

    const tagPlusStyle: React.CSSProperties = {
        height: 22,
        borderRadius: "2px",
        background: "#1890FF",
        color: "white",
        boxShadow: "0px 2px 0px 0px rgba(0, 0, 0, 0.04)",

    };

    return (
        <Space direction="vertical" size={24}>
            <Row>
                <Col>
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
                            Поиск по тегам
                        </Tag>
                    )}
                    <TagsGroup onChange={onChangeTagsGroup} withSwipe={true} tagsData={["исскуство", "спорт", "it"]}/>
                </Col>
            </Row>
            <Row gutter={8}>
                <Col>
                    <RangePicker onChange={onChangeDataPicker} placeholder={["Дата начала", "Дата конца"]}
                                 disabledDate={disabledDate}/>
                </Col>
                <Col>
                    <Radio.Group onChange={onChangeDaysButtonHandler} buttonStyle="solid">
                        <Space direction="horizontal" size={8}>
                            <Radio.Button value="a">Сегодня</Radio.Button>
                            <Radio.Button value="b">Завтра</Radio.Button>
                            <Radio.Button value="c">На неделе</Radio.Button>
                            <Radio.Button value="d">В ближайший месяц</Radio.Button>
                        </Space>
                    </Radio.Group>
                </Col>
            </Row>
            <Row gutter={[21, 24]}>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => <Col key={value + 1}> <Card key={value}
                                                                                            date={"любое время"}
                                                                                            place={"Ельцин центр"}
                                                                                            tags={["искусство"]}
                                                                                            title={"Музей"}
                                                                                            imgLink={"https://avatars.mds.yandex.net/i?id=fd50415fb937811fd3016269400efd03-4568591-images-thumbs&n=13"}/></Col>)}

            </Row>
        </Space>
    )
}