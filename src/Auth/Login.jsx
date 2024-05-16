/* eslint-disable no-unused-vars */
import React from 'react'
import { Card, Flex, Form, Typography, Input, Button, Alert, Spin } from 'antd';
import { Link } from 'react-router-dom';
import goku from '../assets/goku.jpeg';
import useLogin from '../hooks/useLogin';

const Login = () => {
    const { error, loading, loginUser } = useLogin();
    const handleLogin = async(values) =>{
      await loginUser(values);
    }

  return (
    <>
      <Card className="form-container">
                <Flex gap="large" align='center'>
                    {/* images */}
                    <Flex flex={1} justify='center' >
                        <img src={goku} height='570'/>
                    </Flex>

                    {/* form */}
                    <Flex vertical flex={1}>
                        <Typography.Title level={3} strong className='title'>
                            Sign In
                        </Typography.Title>
                        <Typography.Text type='secondary' strong className='slogan'>
                            Unlock you world.
                        </Typography.Text>
                        <Form layout="vertical" onFinish={handleLogin} autoComplete="off">                            
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                    {
                                        required: true,
                                        message: 'please input your email!',
                                    },
                                    {
                                        type: 'email',
                                        message: 'The input is not valid Email!'
                                    },
                                ]}
                            >
                                <Input size='large' placeholder="Enter your email" />
                            </Form.Item>
                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'please input your Password!',
                                    },
                                ]}
                            >
                                <Input.Password size='large' placeholder="Enter your Password" />
                            </Form.Item>                            
                                
                                {error && 
                                    <Alert 
                                    description={error}
                                    type='error'
                                    showIcon
                                    closable
                                    className='alert'
                                    />
                                }
                            <Form.Item>
                                <Button
                                    type={`${loading ? '':'primary'}`}
                                    htmlType='submit'
                                    size='large'
                                    className='btn'
                                >
                                    {loading ? <Spin /> : 'Sign In'}
                                </Button>
                            </Form.Item>
                            <Form.Item>
                                <Link to="/">
                                    <Button size="large" className='btn'>
                                        create an Account
                                    </Button>
                                </Link>
                            </Form.Item>
                        </Form>
                    </Flex>                    
                </Flex>
            </Card>
    </>
  )
}

export default Login