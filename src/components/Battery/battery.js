import React, {Component} from 'react';
import { Card, WhiteSpace } from 'antd-mobile';
import './style.css'
const maxWidth={
  width:'25px'
}
const minWidth={
  width:'5rem'
}
export default class Battery extends Component {
  render() {
    return (
      <div>
        {/* <WhiteSpace size="lg" /> */}
        <Card full>
          <Card.Body className="battery-info">
            <h3 className="title">电瓶作用</h3>
            <p>汽车电瓶是汽车上的重要部件，它的功能是供给启动机用电，
              在发动机启动或低速运转时，向发动机点火系及其他用电设备供电。
              当发动机高速运转时，发动机充足，发电机自动给电瓶存储多余的电能。
              当发动机熄火后，车辆电瓶给关键车辆器件供电（如防盗系统，时钟系统等）。
            </p>
          </Card.Body>
          {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}
        </Card>
        <WhiteSpace size="lg" />
        <Card full>
          <Card.Body className="battery-info">
            <h3 className="title">电量电压判断对照表</h3>
            <table>
              <thead>
                <tr>
                  <th style={maxWidth}></th>
                  <th style={minWidth}>电瓶电压</th>
                  <th style={minWidth}>判断标准</th>
                  <th >影响及应对方法</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan="3" >发动机熄火后</td>
                  <td>&lt;11.7V</td>
                  <td className="warn">过低</td>
                  <td>启动困难，可能需要充电或更换电瓶</td>
                </tr>
                <tr>
                  <td>11.7~12V</td>
                  <td className="low">偏低</td>
                  <td>请检查是否未关闭电器或有异常耗电设备</td>
                </tr>
                <tr>
                  <td>12~15V</td>
                  <td>正常</td>
                  <td>电压正常</td>
                </tr>
                <tr>
                <td rowSpan="3">发动机运行中</td>
                  <td>&lt;12.7V</td>
                  <td className="warn">过低</td>
                  <td>可能无法给电瓶充电，请检查汽车发电系统</td>
                </tr>
                <tr>
                  <td>12.7~15V</td>
                  <td>正常</td>
                  <td>充电电压正常</td>
                </tr>
                <tr>
                  <td>&gt;5V</td>
                  <td className="warn">过高</td>
                  <td>电压过高可能损害电瓶，请检查汽车发电系统</td>
                </tr>
              </tbody>
            </table>
          </Card.Body>
          {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}
        </Card>
        <WhiteSpace size="lg" />
        <Card full>
          <Card.Body className="battery-info">
            <h3 className="title">如何保养汽车电瓶</h3>
            <p>1、如果汽车电瓶亏电，需搭电才能启动，
              应启动后尽量运行30分钟以上（中速以上行驶更佳），
              给汽车电瓶做充分的充电。
            </p>
            <p>
              2、汽车经常短途驾驶，开开停停，会导致汽车电瓶长期处于充电不足的状态，
              缩短使用寿命。
            </p>
            <p>
              3、在汽车电瓶完全放电的情况下，有时靠电启动后，车辆自身发电机充电
              难以恢复电瓶至正常状态，会常出现亏电现象，若是电瓶使用不足2年，则需要
              去维修店用专用电瓶充电器进行慢充电以充满电瓶。
            </p>
          </Card.Body>
          {/* <Card.Footer content="footer content" extra={<div>extra footer content</div>} /> */}
        </Card>
      </div>
    )
  }

}
