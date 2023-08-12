import {Divider, Row, Col, Typography, Input} from "antd";
import styled from "styled-components";

const {Text} = Typography;
const {Search} = Input;
const onSearch = (value: string) => console.log(value);
export const HeaderWidget = () => {
    return (
        <Row justify='center' style={{margin:"45px 0 21px 0"}}>
            <Col span={17}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Text>Привет, Екатеринбург!</Text>
                    <Search placeholder="input search text" onSearch={onSearch} style={{width: 200}}/>
                </div>
                <Divider/>
            </Col>
        </Row>
    );
}
