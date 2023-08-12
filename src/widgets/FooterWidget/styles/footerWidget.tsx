import {Divider, Row, Col, Typography} from "antd";
import styled from "styled-components";

const {Text} = Typography;
export const FooterWidget = () => {
    return (

        <Row align='middle' style={{margin: "21px 0 45px 0"}}>
            <Col xs={{span: 22, offset: 1}} sm={{span: 20, offset: 2}} md={{span: 18, offset: 3}}
                 lg={{span: 16, offset: 4}}>
                <Divider/>
                <Text>Привет, Екатеринбург!</Text>
            </Col>
        </Row>

    );
}
