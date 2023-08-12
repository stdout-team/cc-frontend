import EventWidget from "@/widgets/EventWidget";
import FooterWidget from "@/widgets/FooterWidget";
import HeaderWidget from "@/widgets/HeaderWidget";
import {Col, Row, Space} from "antd";
import Menu from "@/shared/ui/menu";
import {useState} from "react";

export default function Home() {
    const [keys, setKeys] = useState<string[]>(["home"])
    const menuClickHandler = (e: any) => {
        switch (e.key) {
            case "home":
                setKeys(["home"]);
                break;
            case "map":
                setKeys(["map"])
                break
        }
    }
    return (
        <>
            <HeaderWidget/>
            <Row justify="center">
                <Col span={18} offset={1}>
                    <Space direction="vertical" size={24}>
                        <Menu selectedKeys={keys} onClick={menuClickHandler}/>
                        <EventWidget/>
                    </Space>
                </Col>
            </Row>
            <FooterWidget/>
        </>
    )
}