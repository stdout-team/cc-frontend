import {Divider, Row, Col, Typography, Input} from "antd";
import styled from "styled-components";

const {Text} = Typography;
const {Search} = Input;
const onSearch = (value: string) => console.log(value);
export const HeaderWidget = () => {
    return (
        <Row align='middle' style={{margin:"45px 0 21px 0"}}>
            <Col xs={{span: 22, offset: 1}} sm={{span: 20, offset: 2}} md={{span: 18, offset: 3}}
                 lg={{span: 16, offset: 4}}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <Text>Привет, Екатеринбург!</Text>
                    <Search placeholder="input search text" onSearch={onSearch} style={{width: 200}}/>
                </div>
                <Divider/>
            </Col>
        </Row>
    );
}
