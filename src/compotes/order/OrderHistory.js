// import axios from 'axios';
import React, { useEffect, useState } from "react";
import { orderCannel, orderHistory } from "sever/service";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { toast } from "react-toastify";
const OrderHistory = () => {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [text, setText] = useState();

    const [cancelReason, setCancelReason] = useState(); 

    const handleClose = () => {
        setSelectedOrderId(null);
        setShow(false);
    };
    const [selectedOrderId, setSelectedOrderId] = useState(null);

    const handleShow = (orderId) => {
        setSelectedOrderId(orderId);
        setShow(true);
    };
  

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const orderId = selectedOrderId;
            if (!orderId) {
                console.error("No order ID selected");
                return;
            }
            if (!cancelReason) {
              toast.error("No cancel reason provided");
                return;
            }
            // const query = `userId=${user.id}&orderId=${orderId}&reason_cancel=${cancelReason}`;
            // const rs = await orderCannel(query,
            const rs = await axios.post(
                `https://semester3shoprunner.azurewebsites.net/api/Order/client/cancel-order?userId=${user.id}&orderId=${orderId}&reason_cancel=${cancelReason}`, {},
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
            if (rs?.data) {
                toast.success("Thành công");
                setData(rs.data);
            setText(rs);
            }
            console.log("settex", rs);
        } catch (error) {
            console.error("Error:", error);
            toast.error("Lỗi Rồi ")
        }
    };


    const user = JSON.parse(localStorage.getItem("dataUser"));
    const accessToken = localStorage.getItem("currentUser");
    // const order = JSON.parse(localStorage.getItem("order"));
    // console.log("dataordwr",order)
    const fetchData = async () => {
        try {
            const response = await orderHistory(user.id, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            setData(response.data);
            console.log("order", response);
            const orderIds = response.data.map((order) => order.id);
            // console.log("orderIds", orderIds);
            localStorage.setItem("orderIds", JSON.stringify(orderIds));
            // localStorage.setItem("order", JSON.stringify(response.data.id) || {});
        } catch (error) {
            console.error("Error:", error);
            // data([]);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (!data || data.length === 0) {
        return (
            <div className="cart d-flex justify-content-center align-items-center">
                Order Is Empty
            </div>
        );
    }

    return (
        <div>
            <div className="container contact">
                <div className="row">
                    <div className="col table-responsive">
                        <table className="table table-striped table-border-less text-center">
                            <thead>
                                <tr className="text-center">
                                    <th scope="col">Order Date</th>
                                    <th scope="col ">Order Number</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Shipping</th>
                                    <th scope="col" className="text-center">
                                        Huỷ
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((data, i) => {
                                    return (
                                        <tr className="text-center" key={i}>
                                            <td>{data.created_at}</td>
                                            <td>{data.id}</td>
                                            <td>${data.grand_total}</td>
                                            <td>{data.status.name}</td>
                                            <td>{data.shipping.name}</td>
                                            <td>
                                                <Button
                                                    variant="primary" onClick={() => handleShow(data.id)    }
                                                >
                                                    Huỷ
                                                </Button>

                                                <Modal
                                                    show={show}
                                                    onHide={handleClose}
                                                >
                                                    <Modal.Header
                                                        closeButton
                                                    ></Modal.Header>
                                                    <Modal.Body>
                                                        <Form
                                                            onSubmit={
                                                                handleSubmit
                                                            }
                                                        >
                                                            <Form.Group
                                                                className="mb-3"
                                                                controlId="exampleForm.ControlInput1"
                                                            >
                                                                <Form.Label>
                                                                    Lí Do Huỷ
                                                                </Form.Label>

                                                                <Form.Control
                                                                    // type="text"
                                                                    // value={cancelReason}
                                                                    name="reason_cancel"
                                                                    placeholder="Lí Do Huỷ"
                                                                    onChange={(e) => setCancelReason(e.target.value)}
                                                                    autoFocus
                                                                />
                                                            </Form.Group>
                                                            <Form.Group
                                                                className="mb-3"
                                                                controlId="exampleForm.ControlTextarea1"
                                                            ></Form.Group>

                                                            <Modal.Footer>
                                                                <Button
                                                                    variant="secondary"
                                                                    onClick={
                                                                        handleClose
                                                                    }
                                                                >
                                                                    Close
                                                                </Button>
                                                                <Button
                                                                    variant="primary"
                                                                    type="submit"
                                                                    onSubmit={
                                                                        handleSubmit
                                                                    }
                                                                >
                                                                    Save Changes
                                                                </Button>
                                                            </Modal.Footer>
                                                        </Form>
                                                    </Modal.Body>
                                                </Modal>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* <div className="row">
            {Orders.length > visibleOrders && (
              <div className="col-12">
                <button
                  type="button"
                  onClick={handleLoadMore}
                  className="btn btn-secondary"
                >
                  Load More
                </button>
              </div>
            )}
          </div> */}
            </div>

            <nav
                id="sidebarMenu"
                className="collapse d-lg-block sidebar collapse bg-white"
            >
                <div className="position-sticky">
                    <div className="list-group list-group-flush mx-3 mt-4">
                        <a
                            href="/orderhistory"
                            className="list-group-item list-group-item-action py-2 ripple active"
                        >
                            <i className="fas fa-chart-area fa-fw me-3"></i>
                            <span>Order History</span>
                        </a>
                        <a
                            href="/order-status"
                            className="list-group-item list-group-item-action py-2 ripple "
                            aria-current="true"
                        >
                            <i className="fas fa-tachometer-alt fa-fw me-3 active "></i>
                            <span>Order Status</span>
                        </a>
                        {/* <a
                            href="#"
                            className="list-group-item list-group-item-action py-2 ripple"
                        >
                            <i className="fas fa-lock fa-fw me-3"></i>
                            <span>Password</span>
                        </a>
                        <a
                            href="#"
                            className="list-group-item list-group-item-action py-2 ripple"
                        >
                            <i className="fas fa-chart-line fa-fw me-3"></i>
                            <span>Analytics</span>
                        </a>
                        <a
                            href="#"
                            className="list-group-item list-group-item-action py-2 ripple"
                        >
                            <i className="fas fa-chart-pie fa-fw me-3"></i>
                            <span>SEO</span>
                        </a> */}
                    </div>
                </div>
            </nav>

            {/* <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white fixed-top"> */}

            {/* </nav> */}
        </div>

        // <main style="margin-top: 58px;">
        //   <div className="container pt-4"></div>
        // </main>
    );
};

export default OrderHistory;
