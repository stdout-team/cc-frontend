import {Divider, Row, Col, Typography, Input} from "antd";
import styled from "styled-components";

const {Title} = Typography;
const {Search} = Input;
const onSearch = (value: string) => console.log(value);
export const HeaderWidget = () => {
    return (
        <Row justify="center" style={{margin:"45px 0 21px 0"}}>
            <Col span={18} offset={1}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Title level={3}>Привет, Екатеринбург!</Title>
                </div>
                <Divider/>
            </Col>
        </Row>
    );
}
