import {Col, Row, Space} from "antd";
import Card, {NewCard} from "@/shared/ui/Card";

export const EventEditWidget = () => {
    return (
        <Space direction="vertical" size={24}>
            <Row gutter={[21, 24]}>
                <NewCard onAdd={() => 1} onDateSet={() => 2}/>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => <Col key={value + 1} span={6}> <Card key={value}
                                                                                            date={"любое время"}
                                                                                            place={"Ельцин центр"}
                                                                                            tags={["искусство"]}
                                                                                            title={"Музей"}
                                                                                            imgLink={"https://avatars.mds.yandex.net/i?id=fd50415fb937811fd3016269400efd03-4568591-images-thumbs&n=13"}/></Col>)}
            </Row>
        </Space>
    )
}