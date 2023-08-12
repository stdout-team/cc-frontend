import EventWidget from "@/widgets/EventWidget";
import FooterWidget from "@/widgets/FooterWidget";
import HeaderWidget from "@/widgets/HeaderWidget";
import {Col, Row, Space} from "antd";
import {MainTabsWidget} from "@/widgets/MainTabsWidget";

export default function Home() {
    return (
        <>
            <HeaderWidget/>
            <Row justify="center">
                <Col span={18} offset={1}>
                    <Space direction="vertical" size={24}>
                        <MainTabsWidget/>
                        <EventWidget/>
                    </Space>
                </Col>
            </Row>
            <FooterWidget/>
        </>
    )
}