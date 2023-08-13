import React, {useEffect, useMemo, useRef, useState} from "react";
import {Events, EventsRequest} from "@/shared/api/entities/entities";
import {Col, DatePicker, InputRef, Radio, RadioChangeEvent, Row, Space} from "antd";
import {useGetInterestsQuery} from "@/shared/api/interests/interests";
import {useGetEventsQuery} from "@/shared/api/events/events";
import TagsGroup from "@/shared/ui/TagsGroup";
import {RangePickerProps} from "antd/es/date-picker";
import dayjs from "dayjs";
import {mockEvents} from "@/shared/mock/events";

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

const {RangePicker} = DatePicker;
const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    return current && current < dayjs().endOf('day');
};



export function SearchPanel({setEvents}: { setEvents: (events: Events[]) => void }) {
    const [editInputValue, setEditInputValue] = useState('');
    const [requestData, setRequestData] = useState<EventsRequest>({orderBy: "orderByPopularity"} as EventsRequest);
    const editInputRef = useRef<InputRef>(null);
    const tagsData = {interests: Array.from(new Set(mockEvents.reduce((tags, event) => [...tags, ...event.interests], [] as string[])))};
    console.log(tagsData)
    const data = useMemo(() => ({events: mockEvents.filter(e => !requestData?.interests || requestData.interests.every(si => e.interests.includes(si)))}), [requestData?.interests]);
    const onChangeDaysButtonHandler = (e: RadioChangeEvent) => {
        switch (e?.target?.value) {
            case "month":
                setRequestData(data => ({...data, maxDate: convertDate(addDays(30)), minDate: convertDate(new Date())}))
                break;
            case "week":
                setRequestData(data => ({...data, maxDate: convertDate(addDays(7)), minDate: convertDate(new Date())}))
                break
            case "tomorrow":
                setRequestData(data => ({...data, maxDate: convertDate(addDays(1)), minDate: convertDate(new Date())}))
                break
            case "today":
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
            interests: e
        }))
    }
    useEffect(() => {
        console.log(requestData)
    }, [requestData])

    useEffect(() => {
        editInputRef.current?.focus();
    }, [editInputValue]);

    useEffect(() => setEvents(data?.events || []), [data?.events])

    return (
        <>
            <Space direction='vertical'>
            <Row>
                <Col>
                    <TagsGroup onChange={onChangeTagsGroup} withSwipe={true} tagsData={tagsData?.interests || []}/>
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
                            <Radio.Button value="today">Сегодня</Radio.Button>
                            <Radio.Button value="tomorrow">Завтра</Radio.Button>
                            <Radio.Button value="week">На неделе</Radio.Button>
                            <Radio.Button value="month">В ближайший месяц</Radio.Button>
                        </Space>
                    </Radio.Group>
                </Col>
            </Row>
            </Space>
        </>
    )
}