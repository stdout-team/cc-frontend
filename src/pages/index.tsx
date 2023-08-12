import TagsGroup from "@/shared/ui/TagsGroup";
import Card from "@/shared/ui/Card";
import EventWidget from "@/widgets/EventWidget";
import FooterWidget from "@/widgets/FooterWidget";
import HeaderWidget from "@/widgets/HeaderWidget";
import {Col, Row} from "antd";

export default function Home() {
    return (
        <>

            <HeaderWidget/>
            <Row align="middle">
                <Col offset={2}>
                    <EventWidget/>
                </Col>
            </Row>
            <FooterWidget/>
        </>
    )
}