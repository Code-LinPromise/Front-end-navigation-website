import React, { useState } from 'react';
import "./style.scss"
import Layout from "../../Components/Layout/index.jsx";
import TopNav from "../../Components/TopNav/index.jsx";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload, Input, Col, Row, Button, Radio, Select } from 'antd';
const { TextArea } = Input;
const { Option } = Select;
const children = [];

const selectCatagery = [
    {
        value: "项目托管",
        label: "项目托管"
    },
    {
        value: "CMS程序",
        label: "CMS程序"
    },

    {
        value: "框架类库",
        label: "框架类库"
    },
    {
        value: "字体图标",
        label: "字体图标"
    },
    {
        value: "IDE图标",
        label: "IDE图标"
    },
    {
        value: "在线课堂",
        label: "在线课堂"
    },
    {
        value: "灵感采集",
        label: "灵感采集"
    },
    {
        value: "发现产品",
        label: "发现产品"
    },
    {
        value: "界面灵感",
        label: "界面灵感"
    }, {
        value: "云服务",
        label: "云服务"
    }, {
        value: "友情链接",
        label: "友情链接"
    }
]

for (let i = 0; i < selectCatagery.length; i++) {
    children.push(<Option value={selectCatagery[i].value}>{selectCatagery[i].label}</Option>)
}

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

const options = [
    {
        label: '网站',
        value: 1,
    },
    {
        label: '公众号',
        value: 2,
    },
    {
        label: '资源',
        value: 3,
    },
]

const Inclusion = () => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [option, setOption] = useState(1)
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
    const onChange = ({ target: { value } }) => {
        console.log('radio checked', value);
        setOption(value);
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

    const changeOption = () => {
        if (option == 1) {
            return (
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
                            {/* <Input placeholder='选择分类'></Input> */}
                            <Select style={{ width: '100%' }} placeholder='选择分类' >
                                {children}
                            </Select>
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
            )
        }
        else if (option == 2) {
            return (
                <div className='applymainPage'>
                    <div className='webIcon'>公众号图标：</div>
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
                            <Input placeholder='公众号名称'></Input>
                        </Col>
                        <Col span={12}>
                            <Input placeholder='公众号链接'></Input>
                        </Col>
                    </Row>
                    <Row className='row' gutter={16}>
                        <Col span={12}>
                            <Input placeholder='公众号描述'></Input>
                        </Col>
                        <Col span={12}>
                            <Select style={{ width: '100%' }} placeholder='选择分类' >
                                {children}
                            </Select>
                        </Col>
                    </Row>
                    <Row className='row'>
                        <Col span={8}>
                            <div className='webIcon'>公众号二维码：</div>
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
                        </Col>
                        <Col span={16}>
                            <div className='webIcon'>网站介绍：</div>
                            <TextArea rows={4} placeholder=""></TextArea>
                        </Col>
                    </Row>

                    <Row className='row'>
                        <Col span={24}>

                        </Col>
                    </Row>
                    <div className='button'>
                        <Button type='primary' block>提交</Button>
                    </div>
                </div>
            )
        } else if (option == 3) {
            return (
                <div className='applymainPage'>
                    <div className='webIcon'>资源图标：</div>
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
                            <Input placeholder='资源名称'></Input>
                        </Col>
                        <Col span={12}>
                            <Input placeholder='资源描述'></Input>
                        </Col>
                    </Row>
                    <Row className='row' gutter={16}>
                        <Col span={12}>
                            <Input placeholder='资源版本'></Input>
                        </Col>
                        <Col span={12}>
                            <Input placeholder='官网链接'></Input>
                        </Col>
                    </Row>
                    <Row className='row' gutter={16}>
                        <Col span={12}>
                            <Input placeholder='网盘链接'></Input>
                        </Col>
                        <Col span={12}>
                            <Input placeholder='演示链接'></Input>
                        </Col>
                    </Row>
                    <Row className='row' gutter={16}>
                        <Col span={12}>
                            <Input placeholder='网盘密码'></Input>
                        </Col>
                        <Col span={12}>
                            <Input placeholder='解压密码'></Input>
                        </Col>
                    </Row>
                    <Row className='row' gutter={16}>
                        <Col span={12}>
                            <Select style={{ width: '100%' }} placeholder='选择分类' >
                                {children}
                            </Select>
                        </Col>
                    </Row>
                    <div className='webIcon'>资源介绍（使用说明）：</div>
                    <Row className='row'>
                        <Col span={24}>
                            <TextArea rows={4} placeholder=""></TextArea>
                        </Col>
                    </Row>
                    <div className='button'>
                        <Button type='primary' block>提交</Button>
                    </div>
                </div>
            )
        }
    }
    return (
        <div>
            <Layout />
            <TopNav />
            <div className='mainPage'>
                <div className='applyContain'>
                    <div className='title'>
                        申请收录
                    </div>
                </div>
                <div className='title'>
                    推荐资源
                </div>
                <div className='applyContain'>
                    <Radio.Group options={options} onChange={onChange} value={option} optionType="button"></Radio.Group>
                    {changeOption()}
                </div>
            </div>
        </div>
    );
};

export default Inclusion;