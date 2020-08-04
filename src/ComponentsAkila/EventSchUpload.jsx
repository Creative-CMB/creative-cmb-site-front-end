import React, { Component } from 'react';
import upload from "../Images/upload.png";
import { Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

const { Dragger } = Upload;

class EventSchUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
      return (
        <div>
          <div className="light-sub-topic">
            <p>EVENT SCHEDULE UPDATE</p>
          </div>
          <div className="event-card" style={{ backgroundColor: "white" }}>
            <Dragger>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
              <p className="ant-upload-hint">
                Support for a single PDF file upload. Strictly prohibit from
                uploading company data or other band files
              </p>
            </Dragger>
          </div>
        </div>
      );
    }
}
 
export default EventSchUpload;