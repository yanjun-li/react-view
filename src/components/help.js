import React, {Component} from 'react';
import 'antd-mobile/dist/antd-mobile.css';
import {List} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;
class Help extends Component {
  render() {
    return (
      <div>
        <List renderHeader={() => '新用户入门'} className="my-list">
          <Item
            arrow="horizontal"
            multipleLine
            onClick={() => {
            console.log('new user');
            this
              .props
              .history
              .push('/about')
          }}
            platform="android">
            新用户使用步骤
          </Item>
          <Item
            arrow="horizontal"
            multipleLine
            onClick={() => {
            console.log('new user');
          }}
            platform="android">
            如何购买盒子
          </Item>
          <Item
            arrow="horizontal"
            multipleLine
            onClick={() => {
            console.log('new user');
          }}
            platform="android">
            如何绑定盒子
          </Item>
          <Item
            arrow="horizontal"
            multipleLine
            onClick={() => {
            console.log('new user');
          }}
            platform="android">
            如何解绑盒子
          </Item>
        </List>
        <List renderHeader={() => '常见问题'} className="my-list">
          <Item
            arrow="horizontal"
            multipleLine
            onClick={() => {
            console.log('new user');
          }}
            platform="android">
            一个账号可以添加多个车辆吗？有没有什么限制？
          </Item>
          <Item
            arrow="horizontal"
            multipleLine
            onClick={() => {
            console.log('new user');
          }}
            platform="android">
            使用智驾行是否一定需要购买智驾盒子？
          </Item>
          <Item
            arrow="horizontal"
            multipleLine
            onClick={() => {
            console.log('new user');
          }}
            platform="android">
            为什么已启动就看到了数据，是谁的数据？
          </Item>
          <Item
            arrow="horizontal"
            multipleLine
            onClick={() => {
            console.log('new user');
          }}
            platform="android">
            智驾盒子安装在车辆什么位置？
          </Item>
        </List>
      </div>
    );
  }
}

export default Help;
