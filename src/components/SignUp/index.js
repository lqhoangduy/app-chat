import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Typography, Form, Input } from 'antd';
import styled from 'styled-components';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const WrapperStyled = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f0f1f3;
`;

const WrapperLoginFormStyled = styled.div`
  margin: auto;
  margin-top: 40px;
  width: 400px;
  min-height: 400px;
  background: #fff;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
  border-radius: 5px;
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

const FormItemStyled = styled(Form.Item)`
  width: 100%;
  margin: 20px 0;
`;

export default function Login() {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    console.log('Finish:', values);
  };

  return (
    <WrapperStyled>
      <Row justify='center' style={{ height: 800 }}>
        <Col span={8}>
          <WrapperLoginFormStyled>
            <Title style={{ textAlign: 'center', width: '100%' }} level={3}>
              Đăng ký tài khoản
            </Title>

            <Form
              form={form}
              name='horizontal_login'
              layout='inline'
              size='large'
              onFinish={onFinish}>
              <FormItemStyled
                name='username'
                rules={[
                  {
                    required: true,
                    message: 'Please input your username!',
                  },
                ]}>
                <Input
                  prefix={<UserOutlined className='site-form-item-icon' />}
                  placeholder='Username'
                />
              </FormItemStyled>
              <FormItemStyled
                name='password'
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}>
                <Input
                  prefix={<LockOutlined className='site-form-item-icon' />}
                  placeholder='Password'
                />
              </FormItemStyled>
              <FormItemStyled
                name='passwordConfirm'
                rules={[
                  {
                    required: true,
                    message: 'Please input your confirm password!',
                  },
                ]}>
                <Input
                  prefix={<LockOutlined className='site-form-item-icon' />}
                  type='password'
                  placeholder='Password Confirm'
                />
              </FormItemStyled>
              <FormItemStyled shouldUpdate>
                {() => (
                  <Button
                    htmlType='submit'
                    style={{
                      width: '100%',
                      marginBottom: 5,
                      background: '#3f0e40',
                      color: '#fff',
                      outline: 'none',
                    }}>
                    Đăng ký
                  </Button>
                )}
              </FormItemStyled>
            </Form>
            <Typography style={{ marginTop: '10px' }}>
              Bạn đã có tài khoản,
              <Link to='/login'> Đăng nhập</Link> tại đây.
            </Typography>
          </WrapperLoginFormStyled>
        </Col>
      </Row>
    </WrapperStyled>
  );
}
