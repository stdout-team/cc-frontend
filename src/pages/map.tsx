import Head from 'next/head'
import HeaderWidget from "@/widgets/HeaderWidget";
import FooterWidget from "@/widgets/FooterWidget";
import {Row} from "antd";
import {Map} from '@/shared/ui';

export default function Home() {
    return (
        <>
            <Head>
                <title>Поиск на карте</title>
                <meta name="description" content=""/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <HeaderWidget/>
            <Row align="middle">
                <Map gisKey='042b5b75-f847-4f2a-b695-b5f58adc9dfd' width="100%" height="500px" popups={[]} id='main' center={[60.613589, 56.843085]} zoom={13}/>
            </Row>
            <FooterWidget/>
        </>
    )
}
