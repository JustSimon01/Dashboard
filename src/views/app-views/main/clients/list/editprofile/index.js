import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Form, Avatar, Button, Input, Row, Col, message, Upload } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex';
import { useNavigate } from 'react-router-dom';
import { patchUserData } from 'store/slices/userInfoSlice';

const EditProfile = () => {
	const [avatarUrl, setAvatarUrl] = useState('https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png');
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const userInfo = useSelector((state) => state.userInfo);
	const request = {
		url: 'https://jsonplaceholder.typicode.com/users',
		method: 'PATCH',
		data: userInfo
	}
	const { name, email, username, phone, website, address, company } = userInfo;

	useEffect(() => {
		if (!userInfo.name) {
			navigate('/app/main/clients/list')
		}
	}, []);

	const getBase64 = (img, callback) => {
		const reader = new FileReader();
		reader.addEventListener('load', () => callback(reader.result));
		reader.readAsDataURL(img);
	};

	const onFinish = (values) => {
		const key = 'updatable';
		message.loading({ content: 'Updating...', key });
		dispatch(patchUserData(request))
		setTimeout(() => {
			message.success({ content: 'Done!', key, duration: 2 });
		}, 1000);
	};

	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	const onUploadAvatar = (info) => {
		const key = 'updatable';
		if (info.file.status === 'uploading') {
			message.loading({ content: 'Uploading...', key, duration: 1000 });
			return;
		}
		if (info.file.status === 'done') {
			getBase64(info.file.originFileObj, (imageUrl) => setAvatarUrl(imageUrl));
			message.success({ content: 'Uploaded!', key, duration: 1.5 });
		}
	};

	const onRemoveAvatar = () => {
		setAvatarUrl('');
	};

	return (
		userInfo.name &&
		<>
			<Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
				<Avatar size={90} src={avatarUrl} icon={<UserOutlined />} />
				<div className="ml-3 mt-md-0 mt-3">
					<Upload onChange={onUploadAvatar} showUploadList={false} action={avatarUrl}>
						<Button type="primary">Change Avatar</Button>
					</Upload>
					<Button className="ml-2" onClick={onRemoveAvatar}>
						Remove
					</Button>
				</div>
			</Flex>
			<div className="mt-4">
				<Form
					name="basicInformation"
					layout="vertical"
					initialValues={{
						name: name,
						email: email,
						username: username,
						catchPhrase: company.catchPhrase,
						phone: phone,
						website: website,
						address: address.street,
						city: address.city,
						companyName: company.name,
					}}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Row>
						<Col xs={24} sm={24} md={24} lg={16}>
							<Row gutter={ROW_GUTTER}>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Name"
										name="name"
										rules={[
											{
												required: true,
												message: 'Please input your name!',
											},
										]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Username"
										name="username"
										rules={[
											{
												required: true,
												message: 'Please input your username!',
											},
										]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="Email"
										name="email"
										rules={[
											{
												required: true,
												type: 'email',
												message: 'Please enter a valid email!',
											},
										]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item label="Company Name" name="companyName">
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item label="Phone Number" name="phone">
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item label="Website" name="website">
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={24}>
									<Form.Item label="Address" name="address">
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item label="City" name="city">
										<Input />
									</Form.Item>
								</Col>
							</Row>
							<Button type="primary" htmlType="submit">
								Save Change
							</Button>
						</Col>
					</Row>
				</Form>
			</div>
		</>
	);
};

export default EditProfile;
