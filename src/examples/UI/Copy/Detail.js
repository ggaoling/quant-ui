import React, { Component } from 'react';
import { copy,Button } from 'quant-ui';
class Detail extends Component {
	copyClick = () =>{
		copy("复制的内容")
	}
	render() {
		return (
			<div>
				<Button onClick={this.copyClick}>复制</Button>
			</div>
		);
	}
}

export default Detail;
