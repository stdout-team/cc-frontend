import {
    Col,
    Row,
    Space,
} from "antd";
import Card from "@/shared/ui/Card";
import React, {useState} from "react";
import {Events} from "@/shared/api/entities/entities";
import {SearchPanel} from "@/features/SearchPanel";
import {DateToRu} from "@/shared/utils/dateToRu";
import {EventModal} from "@/shared/ui/EventModal";
import {useSetMeInMutation} from "@/shared/api/meIn/countMeIn";


export const EventWidget = () => {
    const [setLike] = useSetMeInMutation()
    const [modalInfo, setModalInfo] = useState<Events | null>(null)
    const [events, setEvents] = useState<Events[]>([])
    return (
        <Space direction="vertical" size={24}>
            <EventModal onCancel={() => setModalInfo(null)} event={modalInfo} onClick={() => setLike({id: modalInfo?.id || ''})} open={Boolean(modalInfo)}/>
            <SearchPanel setEvents={setEvents}/>
            <Row gutter={[21, 24]}>
                {events.map((value) => <Col key={value.id}> <Card
                    onClick={() => setModalInfo(value)}
                    likes={value.countMeIn}
                    date={`${DateToRu(value.schedule[0][0])} ${value.schedule.length > 1 ? '+' + (value.schedule.length - 1) : ''}`}
                    place={value.location.place}
                    tags={value.interests}
                    title={value.title}
                    imgLink={value.photo?.preview}/></Col>)}

            </Row>
        </Space>
    )
}