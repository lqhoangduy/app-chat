import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Typography, Form, Input } from 'antd';
import styled from 'styled-components';
import { UserOutlined, LockOutlined, FacebookFilled } from '@ant-design/icons';
import firebase, { auth } from '../../firebase/config';
import { addDocument, generateKeywords } from '../../firebase/services';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const fbProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

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

const SpaceStyled = styled.div`
   {
    width: 100%;
    display: flex;
    flex-direction: row;
    text-transform: uppercase;
    border: none;
    font-size: 12px;
    font-weight: 500;
    margin: 0;
    padding: 24px 0 0;
  }

  &::before {
    content: '';
    border-bottom: 1px solid #c2c8d0;
    flex: 1 0 auto;
    height: 0.5em;
    margin: 0;
  }
  &::after {
    flex: 1 0 auto;
    height: 0.5em;
    margin: 0;
    content: '';
    border-bottom: 1px solid #c2c8d0;
  }
`;

const SpanStyled = styled.span`
   {
    text-align: center;
    flex: 0.2 0 auto;
    margin: 0;
    position: relative;
    top: -3px;
  }
`;

const WrapperButton = styled.div`
  display: flex;
  justify-content: space-between;
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

  const handleLogin = async (provider) => {
    // await auth.signInWithPopup(provider)
    // .then((result) => {
    //   var credential = result.credential;
    //   var accessToken = credential.accessToken;
    //   console.log(accessToken);
    // });

    const { additionalUserInfo, user } = auth
      .signInWithPopup(provider)
      .then((result) => {
        var credential = result.credential;
        var user = result.user;
        console.log(user);
        var accessToken = credential.accessToken;
        console.log(accessToken);
      });

    if (additionalUserInfo?.isNewUser) {
      addDocument('users', {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName?.toLowerCase()),
      });
    }
  };

  return (
    <WrapperStyled>
      <Row justify='center' style={{ height: 800 }}>
        <Col span={8}>
          <WrapperLoginFormStyled>
            <Title style={{ textAlign: 'center', width: '100%' }} level={3}>
              Đăng nhập App Chat
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
                  type='password'
                  placeholder='Password'
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
                    Đăng nhập
                  </Button>
                )}
              </FormItemStyled>
            </Form>

            <WrapperButton>
              <Link to='/signup'> Đăng ký</Link>
              <Button type='link' disabled>
                Quên mật khẩu?
              </Button>
            </WrapperButton>

            <SpaceStyled>
              <SpanStyled>Or</SpanStyled>
            </SpaceStyled>

            <Button
              size='large'
              style={{ width: '100%', marginBottom: '10px', marginTop: '20px' }}
              onClick={() => handleLogin(googleProvider)}>
              <img
                src='/assets/img/search.png'
                alt='Search'
                className='logoGoogle'
                style={{ width: '18px', height: '18px', marginRight: '8px' }}
              />
              Đăng nhập bằng Google
            </Button>
            <Button
              size='large'
              style={{
                width: '100%',
                background: '#395697',
                color: '#fff',
                marginTop: '10px',
              }}
              onClick={() => handleLogin(fbProvider)}>
              <FacebookFilled style={{ fontSize: '20px' }} />
              Đăng nhập bằng Facebook
            </Button>
          </WrapperLoginFormStyled>
        </Col>
      </Row>
    </WrapperStyled>
  );
}
