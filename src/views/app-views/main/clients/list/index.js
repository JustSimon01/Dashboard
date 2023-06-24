import React, { Component, useMemo, useState, useEffect } from 'react'
import { connect, useSelector } from 'react-redux';
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import userData from "assets/data/user-list.data.json";
import ApiService from 'services/ApiService';
import Loading from 'components/shared-components/Loading';
import { fetchUsers } from 'store/slices/usersSlice';
import { useDispatch } from 'react-redux';
import { deleteUser } from 'store/slices/usersSlice';
import { setUserInfo } from 'store/slices/userInfoSlice';
import { Link } from 'react-router-dom';

const request = {
	url: 'https://jsonplaceholder.typicode.com/users',
	method: 'GET',
	data: ''
}

const UserList = () => {
	const [userProfileVisible, setUserProfileVisible] = useState(false);
	const [selectedUser, setSelectedUser] = useState(null);

	const users = useSelector((state) => state.users.users);
	const dispatch = useDispatch();

	useMemo(() => {
		//эмулируем задержку сервера
		setTimeout(() => {
			dispatch(fetchUsers(request));
		}, 2000)
	}, []);

	const removeUser = userId => {
		dispatch(deleteUser(userId))
		message.success({ content: `Удален пользователь ${userId}`, duration: 2 })
	}

	const showUserProfile = (userInfo) => {
		setUserProfileVisible(true);
		setSelectedUser(userInfo)
	};

	const closeUserProfile = () => {
		setUserProfileVisible(false);
		setSelectedUser(null)
	}

	const tableColumns = [
		{
			title: 'Пользователь',
			dataIndex: 'name',
			render: (_, record) => (
				<div className="d-flex">
					<Link to='/app/main/clients/list/editprofile' onClick={() => dispatch(setUserInfo(record))}>
						<AvatarStatus text={record.name.replace(/[^A-Z]/g, '')} type="blue" name={record.name} subTitle={record.email} />
					</Link>
				</div >
			),
			sorter: {
				compare: (a, b) => {
					a = a.name.toLowerCase();
					b = b.name.toLowerCase();
					return a > b ? -1 : b > a ? 1 : 0;
				},
			},
		},
		{
			title: 'Логин',
			dataIndex: 'username',
			sorter: {
				compare: (a, b) => {
					a = a.username.toLowerCase();
					b = b.username.toLowerCase();
					return a > b ? -1 : b > a ? 1 : 0;
				},
			},
		},
		{
			title: 'Город проживания',
			dataIndex: ['address', 'city'],
			sorter: {
				compare: (a, b) => {
					a = a.address.city.toLowerCase();
					b = b.address.city.toLowerCase();
					return a > b ? -1 : b > a ? 1 : 0;
				},
			},
		},
		{
			title: 'Место работы',
			dataIndex: ['company', 'name'],
			sorter: {
				compare: (a, b) => {
					a = a.company.name.toLowerCase();
					b = b.company.name.toLowerCase();
					return a > b ? -1 : b > a ? 1 : 0;
				},
			},
		},

		{
			title: '',
			dataIndex: 'actions',
			render: (_, elm) => (
				<div className="text-right d-flex justify-content-end">
					<Tooltip title="View">
						<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => showUserProfile(elm)} size="small" />
					</Tooltip>
					<Tooltip title="Delete">
						<Button danger icon={<DeleteOutlined />} onClick={() => removeUser(elm.id)} size="small" />
					</Tooltip>
				</div>
			)
		}
	];
	return (
		<>
			{!users
				? <Loading align='center' cover='content' />
				: <Card bodyStyle={{ 'padding': '0px' }}>
					<div className="table-responsive">
						<Table columns={tableColumns} dataSource={users} rowKey='id' />
					</div>
					<UserView data={selectedUser} visible={userProfileVisible} close={() => closeUserProfile()} />
				</Card>
			}
		</>
	)

}

export default UserList;
