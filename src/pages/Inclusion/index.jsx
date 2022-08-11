import React, { useState } from 'react';
import "./style.scss"
import Layout from "../../Components/Layout/index.jsx";
import TopNav from "../../Components/TopNav/index.jsx";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload, Input, Col, Row, Button } from 'antd';
const { TextArea } = Input;
const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';

    if (!isJpgOrPng) {
        message.error('您只能上传 JPG/PNG 格式的文件!');
    }

    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
        message.error('图片大小不能超过 2MB!');
    }

    return isJpgOrPng && isLt2M;
};

const Inclusion = () => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }

        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div
                style={{
                    marginTop: 8,
                }}
            >
                上传
            </div>
        </div>
    );

    return (
        <div>
            <Layout />
            <TopNav />
            <div className='mainPage'>
                <div className='applyContain'>

                </div>
                <div className='title'>
                    推荐资源
                </div>
                <div className='applyContain'>

                    <div className='applymainPage'>
                        <div className='webIcon'>网站图标：</div>
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {imageUrl ? (
                                <img
                                    src={imageUrl}
                                    alt="avatar"
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            ) : (
                                uploadButton
                            )}
                        </Upload>

                        <Row className='row' gutter={16}>
                            <Col span={12}>
                                <Input placeholder='网站名称'></Input>
                            </Col>
                            <Col span={12}>
                                <Input placeholder='网站链接'></Input>
                            </Col>
                        </Row>
                        <Row className='row' gutter={16}>
                            <Col span={12}>
                                <Input placeholder='网站描述'></Input>
                            </Col>
                            <Col span={12}>
                                <Input placeholder='选择分类'></Input>
                            </Col>
                        </Row>
                        <Row className='row'>
                            <Col span={24}>
                                <Input placeholder='网站关键字，请用英文逗号分隔'></Input>
                            </Col>
                        </Row>
                        <div className='webIcon'>网站介绍：</div>
                        <Row className='row'>
                            <Col span={24}>
                                <TextArea rows={4} placeholder=""></TextArea>
                            </Col>
                        </Row>
                        <div className='button'>
                            <Button type='primary' block>提交</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inclusion;