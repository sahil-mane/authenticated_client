/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, Flex, Form, Typography, Input, Button, Alert, Spin } from 'antd';
import { Link } from 'react-router-dom';
import vegeta from '../assets/vegeta.jpeg';
import useSignup from '../hooks/useSignup';

const Register = () => {
    const { loading , error , registerUser } = useSignup();
    const handleRegister = (values) => {
        registerUser(values);
    }
    return (
        <>
            <Card className="form-container">
                <Flex gap="large" align='center'>
                    {/* form */}
                    <Flex vertical flex={1}>
                        <Typography.Title level={3} strong className='title'>
                            create an account
                        </Typography.Title>
                        <Typography.Text type='secondary' strong className='slogan'>
                            join for exclusive access!
                        </Typography.Text>
                        <Form layout="vertical" onFinish={handleRegister} autoComplete="off">
                            <Form.Item
                                label="Full name"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'please input your full name!',
                                    },
                                ]}
                            >
                                <Input size='large' placeholder="Enter your full name" />
                            </Form.Item>
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
                            <Form.Item
                                label="Password"
                                name="passwordConfirm"
                                rules={[
                                    {
                                        required: true,
                                        message: 'please input your confirm Password!',
                                    },
                                ]}
                            >
                                <Input.Password size='large' placeholder="Re-enter your Password" />
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
                                    {loading ? <Spin /> : 'Create Account'}
                                    create Account
                                </Button>
                            </Form.Item>
                            <Form.Item>
                                <Link to="/login">
                                    <Button size="large" className='btn'>
                                        Sign In
                                    </Button>
                                </Link>
                            </Form.Item>
                        </Form>
                    </Flex>

                    {/* images */}
                    <Flex flex={1} justify='center' >
                        <img src={vegeta} height='570'/>
                    </Flex>
                </Flex>
            </Card>
        </>
    )
}

//47:40 min:sec
export default Register