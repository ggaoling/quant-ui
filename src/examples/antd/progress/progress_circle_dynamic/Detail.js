import React, { Component } from 'react';
import { Progress, Button } from 'quant-ui';


const ButtonGroup = Button.Group;
class Detail extends Component {
	state = {
		percent: 0,
	}

	increase = () => {
		let percent = this.state.percent + 10;
		if (percent > 100) {
			percent = 100;
		}
		this.setState({ percent });
	}

	decline = () => {
		let percent = this.state.percent - 10;
		if (percent < 0) {
			percent = 0;
		}
		this.setState({ percent });
	}

	render() {
		return (
			<div>
				<Progress type="circle" percent={this.state.percent} />
				&nbsp;
				<ButtonGroup>
					<Button onClick={this.decline} icon="minus" />
					<Button onClick={this.increase} icon="plus" />
				</ButtonGroup>
			</div>
		);
	}
}
export default Detail;
