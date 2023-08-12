import EventWidget from "@/widgets/EventWidget";
import FooterWidget from "@/widgets/FooterWidget";
import HeaderWidget from "@/widgets/HeaderWidget";
import {Col, Row} from "antd";

export default function Home() {
    return (
        <>

            <HeaderWidget/>
            <Row>
                <Col>
                    <EventWidget/>
                </Col>
            </Row>
            <FooterWidget/>
        </>
    )
}
