import React, { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
// import NavBarCart from "../Nagition/NavBarCart";
// import { divide } from "lodash";

import {
  Button,
  Col,
  Form,
  Input,
  Radio,
  Row,
  // Select,
  // Space,
  message,
  // notification,
} from "antd";
import { useState } from "react";
// import { PlusOutlined } from "@ant-design/icons";
import { createPaymentOrder } from "sever/service";

const Checkout = () => {
  const user = JSON.parse(localStorage.getItem("dataUser")) || {};
  // const [form] = Form.useForm();
  const [value, setValue] = useState(1);
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState(2);
  const [tel, setTel] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleCreatePayment = async () => {
    const values = {
      userId: user.id,
      consignee_name: fullName,
      shipAddress: address,
      cityShipId: +zipCode,
      tel: tel,
      paymentMethodId: value,
    };
    const res = await createPaymentOrder(values);
    console.log("payment", res);
    if (res.status === 200) {
      message.success("Thành Công !");
      navigate("/orderhistory");
    } else {
      message.error("Thất Bại");
    }
  };

  return (
    <div className="wrapper-checkout">
      <div className="container-checkout-form">
        <Form onSubmit={handleCreatePayment} layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                hidden
                name="userId"
                label="userId"
                rules={[{ required: true, message: "Please enter userId" }]}>
                <Input placeholder="Please enter userId" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="consignee_name"
                label="Full name"
                rules={[{ required: true, message: "Please enter full name" }]}>
                <Input
                  placeholder="Please enter fullName"
                  // value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="shipAddress"
                label="Address"
                rules={[{ required: true, message: "Please enter address" }]}>
                <Input
                  placeholder="Please enter address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="cityShipId"
                label="Zip code"
                rules={[{ required: true, message: "Please enter ma code" }]}>
                <Input
                  type="number"
                  placeholder="Please enter ma code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="tel"
                label="Tel"
                rules={[{ required: true, message: "Please enter url tel" }]}>
                <Input
                  placeholder="Please enter tel"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                />
              </Form.Item>
            </Col>

            <Radio.Group onChange={onChange} value={value}>
              <Col span={24}>
                <Radio value={1}>Thanh toán tại nhà</Radio>
              </Col>
              <Col span={24}>
                <Radio value={2}>Thanh toán online</Radio>
              </Col>
            </Radio.Group>
          </Row>
          <Button
            style={{ marginTop: "30px" }}
            htmlType="submit"
            onClick={() => handleCreatePayment()}
            type="primary">
            Thanh toán
          </Button>
        </Form>
      </div>
      {/* </Drawer> */}
    </div>
  );
};

export default Checkout;