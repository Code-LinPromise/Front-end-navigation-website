import React from 'react'
import { GithubOutlined,RightCircleOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import "./style.scss"

const LinkItem = (props) => {
  const {itemName,itemContent} = props
  return (
    <div className='Link-Item'>
      <a className="Item-Body" href='javascript:;'>
        <div className='Item-Avatar'>
          <Avatar icon={<GithubOutlined />} />
        </div>
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