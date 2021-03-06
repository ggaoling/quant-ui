import React, { Component } from 'react';
import { Mention } from 'quant-ui';

const { toContentState } = Mention;
class Detail extends Component {
	state = {
		value: toContentState('@afc163'),
	}

	componentDidMount() {
		this.mention.focus();
	}

	handleChange = (editorState) => {
		this.setState({
			value: editorState,
		});
	}

	render() {
		return (
			<Mention
				ref={ele => this.mention = ele}
				suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
				value={this.state.value}
				onChange={this.handleChange}
			/>
		);
	}
}

export default Detail;
