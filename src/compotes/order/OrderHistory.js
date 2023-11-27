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
    const [order,setOrder] = useState("");
    const [cancelReason, setCancelReason] = useState(); 
    const user = JSON.parse(localStorage.getItem("dataUser"));
    const accessToken = localStorage.getItem("currentUser");

    const handleClose = () => {
        setSelectedOrderId(null);
        setShow(false);
    };
    const [selectedOrderId, setSelectedOrderId] = useState(null);
    const handleShow = (orderId) => {
        setSelectedOrderId(orderId);
        setShow(true);
    };
   
    
    const orderId = selectedOrderId;
//ly do huy don hang
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
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
                `https://semester3shoprunner.azurewebsites.net/api/Order/client/cancel-client?userId=${user.id}&orderId=${orderId}&reason_cancel=${cancelReason}`, {},
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken}`,
                    },
                }
            );
            if (rs?.data) {
                toast.success("Thành công");
                setShow(false);
            setText(rs);
           
            }
            console.log("settex", rs);
        } catch (error) {
            console.error("Error:", error);
            toast.error("Không Thể  Huỷ Được" )
        }
    };
//xac nhan don hang 
    const handleOrderDetail = async (orderId) => {
        try {
            const rs =  await axios.post (`https://semester3shoprunner.azurewebsites.net/api/Order/client/receive-goods?orderId=${orderId}&userId=${user.id}`,{ },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`, // Make sure accessToken is valid
                },
            }
        );
            if(rs?.data){
                toast.success("Thành Công");
                setOrder(rs);
                console.log("rs",rs)
            }
        }   catch(error) {
           toast.error("Thất Bại")
        }
    };
  


    //hien thi ra các đơn hàng 
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
            // const orderIds = response.data.map((order) => order.id);
            // console.log("orderIds", orderIds);
            // localStorage.setItem("orderIds", JSON.stringify(orderIds));
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
            <>
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
                                    <th scope="col" className="text-center ">
                                        Huỷ
                                    </th>
                                    <th scope="col" className="text-center ">
                                        Xác Nhận
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                        <tr className="text-center">
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>0</td>
                                            <td>
                                                <button  className="bg-danger" onClick={() => handleShow(data.id)    }>     Huỷ
                                                </button>

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
                                            <td>
                                                <Button type="submit"  onClick={() => handleOrderDetail(data.id)    } className="bg-primary">Đã Nhận Hàng </Button>
                                            </td>
                                        </tr>
                           
                            
                            </tbody>
                        </table>
                    </div>
                </div>
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
                    </div>
                </div>
            </nav>
        </div>
               </>   
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
                                    <th scope="col" className="text-center ">
                                        Huỷ
                                    </th>
                                    <th scope="col" className="text-center ">
                                        Xác Nhận
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.length >= 0  &&
                                data.map((data, i) => {
                                    return (
                                        <tr className="text-center" key={i}>
                                            <td>{data.created_at}</td>
                                            <td>{data.id}</td>
                                            <td>${data.grand_total}</td>
                                            <td>{data.status.name}</td>
                                            <td>{data.shipping.name}</td>
                                            <td>
                                                <Button
                                                   className="bg-danger" onClick={() => handleShow(data.id)    }
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
                                            <td>
                                                <Button type="submit"  onClick={() => handleOrderDetail(data.id)    } className="bg-primary">Đã Nhận Hàng </Button>
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
                       
                    </div>
                </div>
            </nav>
         
        </div>
        
    );
};

export default OrderHistory;
