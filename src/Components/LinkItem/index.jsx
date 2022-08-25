import React from 'react'
import {RightCircleOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import "./style.scss"

const LinkItem = (props) => {
    const {itemName,itemContent,itemIcon,itemUrl} = props
    return (
        <div className='Link-Item'>
            <a className="Item-Body" href={itemUrl} title={itemContent} target="_blank">
                <img src={itemIcon} className="Item-Avatar" />
                <div className="Item-title">
                    {itemName}
                </div>
                <div className="Item-content">
                    {itemContent}
                </div>
                <div className="Item-arrow">
                    <Avatar icon={<RightCircleOutlined />} />
                </div>
            </a>
        </div>
    )
}

export default LinkItem