import React, {Component} from 'react';
import { Card, WhiteSpace } from 'antd-mobile';
import { List, Badge } from 'antd-mobile';

import './style.css'
import logo from '../../assets/logo.png'
export default class About extends Component {
  render() {
    return (
      <div>
        {/* <WhiteSpace size="lg" /> */}
        <Card full>
          <Card.Body className="info">
            <img src={logo} alt="云巴"/>
            <p>车智行</p>
          </Card.Body>
          {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}
        </Card>
        <WhiteSpace size="lg" />
        <List>
          <List.Item extra="1.0.0" >
            <Badge dot>
              <span>版本</span>
            </Badge>
          </List.Item>
          <List.Item extra=""
                     multipleLine
                     arrow="horizontal"
                     onClick={() => {
                        this.props.history.push('/treaty')
                    }}
                    platform="android">
            服务条约
          </List.Item>
        </List>
        <footer>
          <p>车智行版权所有</p>
          <p>CopyRight © Yunba.io</p>
        </footer>
      </div>
    )
  }

}
