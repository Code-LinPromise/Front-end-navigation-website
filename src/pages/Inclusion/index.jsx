import React, { useState } from 'react';
import "./style.scss"
import Layout from "../../Components/Layout/index.jsx";
import TopNav from "../../Components/TopNav/index.jsx";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload, Input, Col, Row, Button, Radio, Select, Form } from 'antd';
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
    const [form] = Form.useForm();
    const [form1] = Form.useForm();
    const [form2] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const [imageUrl1, setImageUrl1] = useState();
    const [imageUrl2, setImageUrl2] = useState();
    const [imageUrl3, setImageUrl3] = useState();
    const [Name, setName] = useState();
    const [Link, setLink] = useState()
    const [description, setDescription] = useState()
    const [keyWord, setKeyword] = useState()
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
    const handleChange1 = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }

        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl1(url);
            });
        }
    };
    const handleChange2 = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }

        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl2(url);
            });
        }
    };
    const handleChange3 = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }

        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl3(url);
            });
        }
    };
    const onChange = ({ target: { value } }) => {
        console.log('radio checked', value);

        setOption(value);
    };
    const onChangeWeb = (value) => {
        console.log(value)
        form.setFieldValue({ webOption: value })
        console.log(form.getFieldValue({ name: webOption }))
    }
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
                    <Form form={form}>
                        <Form.Item name="upload">
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
                        </Form.Item>
                        <Row className='row' gutter={16}>
                            <Col span={12}>
                                <Form.Item name="webName">
                                    <Input placeholder='网站名称'></Input>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item name="webLink">
                                    <Input placeholder='网站链接'></Input>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row className='row' gutter={16}>
                            <Col span={12}>
                                <Form.Item name="webDec">
                                    <Input placeholder='网站描述' ></Input>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                {/* <Input placeholder='选择分类'></Input> */}
                                <Form.Item name="webOption">
                                    <Select style={{ width: '100%' }} onChange={onChangeWeb} placeholder='选择分类' >
                                        {children}
                                    </Select>
                                </Form.Item>

                            </Col>
                        </Row>
                        <Row className='row'>
                            <Col span={24}>
                                <Form.Item name="webKeyWord">
                                    <Input placeholder='网站关键字，请用英文逗号分隔'></Input>
                                </Form.Item>
                            </Col>
                        </Row>
                        <div className='webIcon'>网站介绍：</div>
                        <Row className='row'>
                            <Col span={24}>
                                <Form.Item name="webIntroduction">
                                    <TextArea rows={4} placeholder=""></TextArea>
                                </Form.Item>
                            </Col>
                        </Row>
                        <div className='button'>
                            <Button type='primary' onClick={() => { console.log(form.getFieldsValue()) }} block>提交</Button>
                        </div>
                    </Form>
                </div>
            )
        }
        else if (option == 2) {
            return (
                <div className='applymainPage'>
                    <div className='webIcon'>公众号图标：</div>
                    <Form form={form1}>
                        <Form.Item>
                            <Upload
                                name="upload1"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={beforeUpload}
                                onChange={handleChange1}
                            >
                                {imageUrl1 ? (
                                    <img
                                        src={imageUrl1}
                                        alt="avatar"
                                        style={{
                                            width: '100%',
                                        }}
                                    />
                                ) : (
                                    uploadButton
                                )}
                            </Upload>
                        </Form.Item>
                        <Row className='row' gutter={16}>
                            <Col span={12}>
                                <Form.Item name="publicName">
                                    <Input placeholder='公众号名称'></Input>
                                </Form.Item>

                            </Col>
                            <Col span={12}>
                                <Form.Item name="publicLink">
                                    <Input placeholder='公众号链接'></Input>
                                </Form.Item>

                            </Col>
                        </Row>
                        <Row className='row' gutter={16}>
                            <Col span={12}>
                                <Form.Item name="publicDec">
                                    <Input placeholder='公众号描述'></Input>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item name="publicOption">
                                    <Select style={{ width: '100%' }} placeholder='选择分类' >
                                        {children}
                                    </Select>
                                </Form.Item>

                            </Col>
                        </Row>
                        <Row className='row'>
                            <Col span={8}>
                                <div className='webIcon'>公众号二维码：</div>
                                <Form.Item name="imageUrl2">
                                    <Upload
                                        name="imageUrl2"
                                        listType="picture-card"
                                        className="avatar-uploader"
                                        showUploadList={false}
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        beforeUpload={beforeUpload}
                                        onChange={handleChange2}
                                    >
                                        {imageUrl2 ? (
                                            <img
                                                src={imageUrl2}
                                                alt="avatar"
                                                style={{
                                                    width: '100%',
                                                }}
                                            />
                                        ) : (
                                            uploadButton
                                        )}
                                    </Upload>
                                </Form.Item>
                            </Col>
                            <Col span={16}>
                                <div className='webIcon'>网站介绍：</div>
                                <Form.Item>
                                    <TextArea rows={4} placeholder=""></TextArea>
                                </Form.Item>
                            </Col>
                        </Row>

                        <div className='button'>
                            <Button type='primary' block>提交</Button>
                        </div>
                    </Form>

                </div>
            )
        } else if (option == 3) {
            return (
                <div className='applymainPage'>
                    <div className='webIcon'>资源图标：</div>
                    <Form form={form2}>
                        <Form.Item name="imageUrl3">
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={beforeUpload}
                                onChange={handleChange3}
                            >
                                {imageUrl3 ? (
                                    <img
                                        src={imageUrl3}
                                        alt="avatar"
                                        style={{
                                            width: '100%',
                                        }}
                                    />
                                ) : (
                                    uploadButton
                                )}
                            </Upload>
                        </Form.Item>


                        <Row className='row' gutter={16}>
                            <Col span={12}>
                                <Form.Item name="sourceName">
                                    <Input placeholder='资源名称'></Input>
                                </Form.Item>

                            </Col>
                            <Col span={12}>
                                <Form.Item name="sourceDec">
                                    <Input placeholder='资源描述'></Input>
                                </Form.Item>

                            </Col>
                        </Row>
                        <Row className='row' gutter={16}>
                            <Col span={12}>
                                <Form.Item name="sourceEdiion">
                                    <Input placeholder='资源版本'></Input>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item name="sourceLink">
                                    <Input placeholder='官网链接'></Input>
                                </Form.Item>

                            </Col>
                        </Row>
                        <Row className='row' gutter={16}>
                            <Col span={12}>
                                <Form.Item name="netdiskLink">
                                    <Input placeholder='网盘链接'></Input>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item name="demonstrationLink">
                                    <Input placeholder='演示链接'></Input>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row className='row' gutter={16}>
                            <Col span={12}>
                                <Form.Item name="netdiskPassword">
                                    <Input placeholder='网盘密码'></Input>
                                </Form.Item>

                            </Col>
                            <Col span={12}>
                                <Form.Item name="decompressionPassword">
                                    <Input placeholder='解压密码'></Input>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row className='row' gutter={16}>
                            <Col span={12}>
                                <Form.Item name="sourceOption">
                                    <Select style={{ width: '100%' }} placeholder='选择分类' >
                                        {children}
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <div className='webIcon'>资源介绍（使用说明）：</div>
                        <Row className='row'>
                            <Col span={24}>
                                <Form.Item name="sourceIntroduction">
                                    <TextArea rows={4} placeholder=""></TextArea>
                                </Form.Item>
                            </Col>
                        </Row>
                        <div className='button'>
                            <Button type='primary' block>提交</Button>
                        </div>
                    </Form>

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