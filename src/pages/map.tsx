import Head from 'next/head'
import HeaderWidget from "@/widgets/HeaderWidget";
import FooterWidget from "@/widgets/FooterWidget";
import {Col, Row} from "antd";
import {Map} from '@/shared/ui';
import {MainTabsWidget} from "@/widgets/MainTabsWidget";
import Card from "@/shared/ui/Card";
import {PopupCard} from "@/shared/ui/PopupCard/styles/popupCard";


export default function Home() {
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
            <Row align="middle" justify="center">
                <Col span={18} offset={1}>
                    <MainTabsWidget/>

                    <Map gisKey='042b5b75-f847-4f2a-b695-b5f58adc9dfd'
                         width="100%"
                         height="500px"
                         popups={[{
                             position: [60.656721, 56.837517],
                             component: <PopupCard
                                 id='1'
                                 date={"любое время"}
                                 place={"Ельцин центр"}
                                 tags={["искусство"]}
                                 title={"Музей"}
                                 imgLink={'https://plus.unsplash.com/premium_photo-1681669326170-f4c09655a875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'}/>
                         }]} id='main'
                         center={[60.613589, 56.843085]} zoom={13}
                    />
                </Col>
            </Row>
            <FooterWidget/>
        </>
    )
}
