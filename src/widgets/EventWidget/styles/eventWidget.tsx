import {
    Col,
    Row,
    Space,
} from "antd";
import Card from "@/shared/ui/Card";
import React, {useState} from "react";
import {Events} from "@/shared/api/entities/entities";
import {SearchPanel} from "@/features/SearchPanel";


export const EventWidget = () => {

    const [events, setEvents] = useState<Events[]>([])
    return (
        <Space direction="vertical" size={24}>

            <SearchPanel setEvents={setEvents}/>
            <Row gutter={[21, 24]}>
                {events.map((value) => <Col key={value.id}> <Card
                    date={
                        new Date(value.schedule[0][0]).toLocaleDateString('ru-RU', {
                        year: "numeric",
                        month: "long",
                        day: "numeric"
                    }).replace('г.', '')}
                    place={value.location.place}
                    tags={value.interests}
                    title={value.title}
                    imgLink={value.photo?.preview}/></Col>)}

            </Row>
        </Space>
    )
}