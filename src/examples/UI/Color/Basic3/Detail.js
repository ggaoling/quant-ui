import React, { Component } from 'react';
import { colorPicker} from 'quant-ui';
let { SwatchesPicker } = colorPicker;
class Detail extends Component {
	onChange = (color, event) =>{
		console.log(color, event)
	}
	render() {
		return (
			<SwatchesPicker onChange = {this.onChange}/>
		);
	}
}
export default Detail;
