import {Col, DatePicker, Row, Space, Radio} from "antd";
import TagsGroup from "@/shared/ui/TagsGroup";
import dayjs from "dayjs";
import type {RangePickerProps} from 'antd/es/date-picker';
import Card from "@/shared/ui/Card";

const {RangePicker} = DatePicker;
const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf('day');
};
export const EventWidget = () => {
    return (

        <Row justify="center">
            <Col span={18} offset={1}>
                <Space direction="vertical" size={24}>
                    <Row>
                        <Col>
                            <TagsGroup withSwipe={true} tagsData={["исскуство", "спорт", "it"]}/>
                        </Col>
                    </Row>
                    <Row gutter={8}>
                        <Col>
                            <RangePicker placeholder={["Дата начала", "Дата конца"]} disabledDate={disabledDate}/>
                        </Col>
                        <Col>
                            <Radio.Group defaultValue="a" buttonStyle="solid">
                                <Space direction="horizontal" size={8}>
                                    <Radio.Button value="a">Сегодня</Radio.Button>
                                    <Radio.Button value="b">Завтра</Radio.Button>
                                    <Radio.Button value="c">На неделе</Radio.Button>
                                    <Radio.Button value="d">В ближайший месяц</Radio.Button>
                                </Space>
                            </Radio.Group>
                        </Col>
                    </Row>
                    <Row gutter={[21, 24]}>
                        {[1, 2, 3, 4, 5, 6, 7].map((value) => <Col key={value + 1}> <Card key={value}
                                                                                          date={"любое время"}
                                                                                          place={"Ельцин центр"}
                                                                                          tags={["искусство"]}
                                                                                          title={"Музей"}
                                                                                          imgLink={""}/></Col>)}

                    </Row>
                </Space>

            </Col>
        </Row>

    )
}