import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'quant-ui';

const menu = (
	<Menu>
		<Menu.Item key="0">
			<a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
	  	</Menu.Item>
	  	<Menu.Item key="1">
			<a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
	  	</Menu.Item>
	  		<Menu.Divider />
	  	<Menu.Item key="3" disabled>3rd menu item（disabled）</Menu.Item>
	</Menu>
  );
  
  
class Detail extends Component {
	
	render() {
		return (
			<Dropdown overlay={menu}>
    			<a className="ant-dropdown-link" href="#">
      				Hover me <Icon type="down" />
    			</a>
  			</Dropdown>
		);
	}
}
export default Detail;
