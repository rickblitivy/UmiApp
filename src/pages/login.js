import Link from 'umi/link';
import React from 'react';
import { Card, Table, Col, Row } from 'antd';
import { Component } from 'react';
import Styles from './login.css';
const { Meta } = Card;

const Colum = [
  {
    title:'ID',
    dataIndex: 'id',
    width:'15%',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    width:'30%',
    render:text=><a href="/">{text}</a>
  },
  {
    title: '年龄',
    dataIndex: 'age',
    width:'20%'
  },
  {
    title:'存款',
    dataIndex:"ammount",
    ellipsis:true,
    width:'35%'
  }
];

//    className:Styles.tabTitle,

const Data = [
  {
    key:'0',
    id: '1',
    name: '胡歌',
    age: 55,
    ammount:20000
  },
  {
    key:'1',
    id: '2',
    name: '周杰伦',
    age: 23,
    ammount:58778
  },
  {
    key:'2',
    id: '3',
    name: '张韶涵',
    age: 35,
    ammount:2135
  },
  {
    key:'3',
    id: '2',
    name: '周杰伦',
    age: 23,
    ammount:94569808080898867676736
  },
  {
    key:'4',
    id: '2',
    name: '周杰伦',
    age: 23,
    ammount:7686865764353123125346663426
  },
  {
    key:'5',
    id: '2',
    name: '周杰伦',
    age: 23,
    ammount:20000
  },
  {
    key:'6',
    id: '2',
    name: '周杰伦',
    age: 23,
    ammount:20000
  },
  {
    key:'7',
    id: '2',
    name: '周杰伦',
    age: 23,
    ammount:2000000000000000000000000
  },
  {
    key:'8',
    id: '2',
    name: '周杰伦',
    age: 23,
    ammount:4526346346342643634655341234
  },
  {
    key:'9',
    id: '2',
    name: '周杰伦',
    age: 23,
    ammount:20000000000000000000000000000000000
  }
];

class Home extends Component {
  Super() {

  }

  render() {
    return (
      <div>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row gutter={16}>
            <Col span={8}>

              <Card title={
                <div className={Styles.titleText} >
                  "测试卡片"
                </div>
              }
                style={{ width: '400px' }}
                extra={<a href="/" className={Styles.moreText} >查看更多</a>}
              >
                <Table
                dataSource={Data} 
                columns={Colum} 
                rowClassName={Styles.tabRow} 
                style={{minHeight:'294px'}}
                >
                </Table> 
              </Card>

            </Col>
            <Col span={8}>

              <Card title="No.3" style={{ width: '400px' }}>
                <p>第三种测试</p>
              </Card>

            </Col>
            <Col span={8}>

              <Card hoverable="true" style={{ width: '400px' }} cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />} >
                <p>这是啥</p>
                <p>I Don't Know!</p>
                <p>哈哈</p>
                <Meta title="好的" description="没问题" />
              </Card>

            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={8}>

              <Card title="No.4" style={{marginTop:'10px'}}>
                <p>第四张卡片</p>
              </Card>

            </Col>
            <Col span={8} lg={8} md={24}>

              <Card title="No.5" style={{marginTop:'10px'}}>
                <p>第五张卡片</p>
              </Card>

            </Col>
            <Col span={8} lg={8} md={24}> 

              <Card title="No.6" style={{marginTop:'10px'}}>
                <p>第六张卡片</p>
              </Card>

            </Col>
          </Row>
        </div>
        <div>
          <Link to="/">返回首页</Link>
        </div>
      </div>
    );
  }
}

export default Home;