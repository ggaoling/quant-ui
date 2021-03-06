import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';


const knightSource = {
    drop(props) {
        props.onDrageFromTo("to",props.data)
    },
    hover(props){
        props.onDrageFromTo("hover",props.data)
    },
  };
  
  function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    }
  }
class App extends Component {
   
  render() {
        let item = this.props.data;
        let colSpan = item.childrens.length * 2;
        const { connectDropTarget, isOver, isShow } = this.props;
        return connectDropTarget(
                <td className={isOver?isShow?'node-cell':"node-forbid":""} colSpan={colSpan}>
                    {this.props.children}
                </td>
            
        )
  }
}
export default DropTarget("Childern", knightSource, collect)(App);
