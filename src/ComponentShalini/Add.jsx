import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import Advertise from "../ComponentShalini/Advertise";
import Invoice from "../ComponentKajan/AddInvoice"


class Add extends React.Component {
    state = { visible: false };
  
    showModal = () => {
      this.setState({
        visible: true,
      });
    };
  
    handleOk = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
  
    handleCancel = e => {
      console.log(e);
      this.setState({
        visible: false,
      });
    };
  
    render() {
      return (
        <>
          <Button type="primary" onClick={this.showModal}>
            Open Modal
          </Button>
          <Modal
            title="Basic Modal"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
          >
           
          </Modal>
        </>
      );
    }
  }
export default Add;