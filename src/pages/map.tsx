import Head from 'next/head'
import HeaderWidget from "@/widgets/HeaderWidget";
import FooterWidget from "@/widgets/FooterWidget";
import {Col, Row, Space} from "antd";
import {Map} from '@/shared/ui';
import {MainTabsWidget} from "@/widgets/MainTabsWidget";
import Card from "@/shared/ui/Card";
import {PopupCard} from "@/shared/ui/PopupCard/styles/popupCard";
import {SearchPanel} from "@/features/SearchPanel";
import {Events} from "@/shared/api/entities/entities";
import {useState} from "react";
import {DateToRu} from "@/shared/utils/dateToRu";


export default function Home() {
    const [events, setEvents] = useState<Events[]>([])
    return (
        <>
            <Head>
                <title>Поиск на карте</title>
                <meta name="description" content=""/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div style={{display: 'none'}}><Card title='' date='' tags={[]} place='' imgLink=''/></div>
            <HeaderWidget/>
            <Row justify="center">
                <Col span={18} offset={1}>
                    <Space direction="vertical" size={24} style={{width: '100%'}}>
                        <MainTabsWidget/>
                        <Space direction="vertical" size={24} style={{width: '100%'}}>
                            <SearchPanel setEvents={setEvents}/>
                            <Row gutter={[21, 24]}>
                                    <Map gisKey='042b5b75-f847-4f2a-b695-b5f58adc9dfd'
                                         width="100%"
                                         height="500px"
                                         popups={events.map(event => ({
                                             position: [60.613589, 56.843085],
                                             component: <PopupCard
                                                 id={event.id}
                                                 date={`${DateToRu(event.schedule[0][0])} ${event.schedule.length > 1 ? '+' + (event.schedule.length - 1) : ''}`}
                                                 place={event.location.place}
                                                 tags={event.interests}
                                                 title={event.title}
                                                 imgLink={event.photo?.preview || 'https://avatars.mds.yandex.net/i?id=fd50415fb937811fd3016269400efd03-4568591-images-thumbs&n=13'}/>
                                         }))} id='main'
                                         center={[60.613589, 56.843085]} zoom={13}
                                    />
                            </Row>
                        </Space>
                    </Space>
                </Col>
            </Row>
            <FooterWidget/>
        </>
    )
}
