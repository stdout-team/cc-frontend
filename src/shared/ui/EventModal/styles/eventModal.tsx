import {Events} from "@/shared/api/entities/entities";
import {Button, Modal, Space, Typography} from "antd";
import {HeartFilled, HeartOutlined} from "@ant-design/icons";
import {DateToRu} from "@/shared/utils/dateToRu";
import {useEffect, useState} from "react";

interface EventModalProps {
    event: Events | null;
    onClick: () => void;
    open: boolean
    onCancel: () => void;
}

const {Text, Title} = Typography

export function EventModal(props: EventModalProps) {
    const [meIn, setMeIn] = useState('')

    useEffect(() => {
        setMeIn(window.localStorage.getItem('meIn') || '')
    }, [])
    if (!props.event) return <></>
    console.log(meIn, props.event.id)
    console.log(meIn.indexOf(props.event.id))
    return (
        <Modal
            onCancel={props.onCancel}
            open={props.open}
            title={props.event.title}
            footer={[
                <Button key="link" type='primary' onClick={() => {
                    props.onClick();
                    setTimeout(() => setMeIn(window.localStorage.getItem('meIn') || ''), 100)
                }}>
                    {meIn.indexOf(props.event.id) >= 0 ? <HeartFilled/> : <HeartOutlined/>}Пойду
                </Button>,
            ]}
        >
            <Space direction='vertical'>
                <Text type='secondary'>Дата: {DateToRu(props.event.schedule[0][0])}, {props.event.schedule[0][1]}-{props.event.schedule[0][2]}</Text>
                <Text type='secondary'>Место: {props.event.location.place}</Text>
                <img style={{width: '100%'}}
                    src={props.event?.photo?.preview || 'https://avatars.mds.yandex.net/i?id=fd50415fb937811fd3016269400efd03-4568591-images-thumbs&n=13'}/>
                <Title level={4}>О событии</Title>
                <Text>{props.event.description}</Text>
            </Space>
        </Modal>
    )
}