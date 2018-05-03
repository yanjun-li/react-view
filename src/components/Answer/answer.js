import React, {Component}  from 'react';
import { Button,WhiteSpace } from 'antd-mobile'
import questions from '../../questions'
import './style.css'

export default class Answer extends Component{
  render(){
    const { match, location, history } = this.props
    return (
      <div>
        <div className="answer-page">
          <p className="question">{questions[match.params.id].question}</p>
          <p className="answer">{questions[match.params.id].answer}</p>
        </div>
        <footer className="footer">
          <Button type="primary" onClick={()=>history.go(-1)}>返回</Button><WhiteSpace />
        </footer>
      </div>
    )
  }
}

