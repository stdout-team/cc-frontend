import FooterWidget from "@/widgets/FooterWidget";
import HeaderWidget from "@/widgets/HeaderWidget";
import {Col, Row, Space} from "antd";
import {EventEditWidget} from "@/widgets/EventEditWidget";
import {MainTabsWidget} from "@/widgets/MainTabsWidget";
import EventWidget from "@/widgets/EventWidget";

export default function Home() {
    return (
        <>
            <HeaderWidget/>
            <Row justify="center">
                <Col span={18} offset={1}>
                    <Space direction="vertical" size={24}>
                        <EventEditWidget/>
                    </Space>
                </Col>
            </Row>
            <FooterWidget/>
        </>
    )
}