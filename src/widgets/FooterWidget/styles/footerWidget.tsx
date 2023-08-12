import {Divider, Row, Col, Typography} from "antd";
import styled from "styled-components";

const {Text} = Typography;
export const FooterWidget = () => {
    return (
        <Row justify="center" style={{margin: "21px 0 45px 0"}}>
            <Col span={18} offset={1}>
                <Divider/>
                <Text>Привет, Екатеринбург!</Text>
            </Col>
        </Row>
    );
}
