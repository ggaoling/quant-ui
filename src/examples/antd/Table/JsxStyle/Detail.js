import React, { Component } from 'react';
import { Table, Icon, Divider} from 'quant-ui';
const {Column,ColumnGroup}=Table;

const dataSource = [
    {
        
        firstname: 'Taylor ',
        lastname:'Swift',
        age: '22',
        adress: 'SanFrancisco'
    },
    {
        firstname: 'Eason ',
        lastname:'Chan',
        age: (new Date().getFullYear() - 1974).toString(),
        adress: 'Hongkong'
    },
    {
        firstname: 'Jimmy',
        lastname:'lee',
        age: '12',
        adress: 'Shanghai'
    },

]

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="javascript:;">{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',

    },
    {
        title: 'Adress',
        dataIndex: 'adress',
        key: 'adress',

    },
    {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => (
            <span>
                <a href='javascript:;'>Action - {record.name}</a>
                <Divider type='vertical' />
                <a href='javascript:;'>Delete</a>
                <Divider type='vertical' />
                <a href='javascript:;' className='ant-dropdown-link'>More actions <Icon type='down' /></a>
            </span>
        )
    },

]

class Detail extends Component {
    render() {
        return (
            <Table dataSource={dataSource} >
                <ColumnGroup title='Name'>
                    <Column title='First Name'
                        dataIndex='firstname'
                        key='firstname' />
                    <Column title='Last Name'
                        dataIndex='lastname'
                        key='lastname' />
                </ColumnGroup>
                <Column
                    title="Age"
                    dataIndex="age"
                    key="age"
                />
                <Column
                    title="Address"
                    dataIndex="address"
                    key="address"
                />
                <Column
                    title="Action"
                    key="action"
                    render={(text, record) => (
                        <span>
                            <a href="javascript:;">Action 一 {record.name}</a>
                            <Divider type="vertical" />
                            <a href="javascript:;">Delete</a>
                            <Divider type="vertical" />
                            <a href="javascript:;" className="ant-dropdown-link">
                                More actions <Icon type="down" />
                            </a>
                        </span>
                    )}
                />
            </Table>

        )
    }
}

export default Detail;

