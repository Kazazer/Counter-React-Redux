import React, { Component } from 'react';
import { Card, Button, Col, Row } from 'antd';


 class Counter extends Component {


  render() {

    const gridStyle = {
      width: '25%',
      textAlign: 'center',
    };
    return (


      <Card title="Counter" bordered={false} style={{ width: 300 }}>

        <Row type="flex" justify="center" align="middle">
          <Col span={8}> <Button type="primary" shape="circle" icon="plus" onClick={this.props.increment} /></Col>
    <Col span={8}><h2>{this.props.count}</h2></Col>
          <Col span={8}><Button type="primary" shape="circle" icon="minus" onClick={this.props.decrement} /></Col>
        </Row>
      </Card>


    );



  }
}

export default Counter;