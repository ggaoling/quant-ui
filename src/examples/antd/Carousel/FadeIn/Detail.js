import React, { Component } from 'react';
import { Carousel } from 'quant-ui';
import "./style.less";

class Detail extends Component {
    
    render() {
        return (
            <div style={{width:'50%'}}> 
                <Carousel  effect='fade'>
                    <div><h3>1</h3></div>
                    <div><h3>2</h3></div>
                    <div><h3>3</h3></div>
                    <div><h3>4</h3></div>
                </Carousel>
            </div>
        );
    }
}
export default Detail;