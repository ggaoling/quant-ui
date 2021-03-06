import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cloneDeep from 'lodash/cloneDeep';
import isFunction from 'lodash/isFunction';
import Children from './component/Children';
import Target from './component/Target';
import LineFirst from './component/LineFirst';
import LineTow from './component/LineTow';
// import './index.less';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
let drageData = null;
let maxId = 0;
class DropTree extends PureComponent {
    static propTypes = {
        className: PropTypes.string,
        onReset: PropTypes.func,
        onSetData: PropTypes.func,
        onGetData: PropTypes.func,
        dataSource: PropTypes.array,
        width:PropTypes.number,
        isEditItem:PropTypes.string,
    };

    static defaultProps = {
        onReset: () => { },
        onSetData: () => { },
        onGetData: () => { },
        className: '',
        dataSource: [],
    };
    constructor(props) {
        super(props);
        this.state = {
            refresh: false,
            isShow:true
        };
        this.dataSource = props.dataSource || [];
        this._dataSource = cloneDeep(this.dataSource);
        this.isFromTo = true;
    }
    componentWillReceiveProps = (nextProps) => {
        this.dataSource = nextProps.dataSource || [];
        this._dataSource = cloneDeep(this.dataSource);
        this.refresh()
    };
    
    _addOneItem = (item) => {
        maxId = 0;
        this._findMaxId(this._dataSource);
        let currentData = this.findItem(item.id,this._dataSource);
        let obj = {
            id: maxId + 1,
            pid: item.id,
            name:"item",
            childrens:[]
        }
        currentData.childrens.push(obj)
        this.refresh();
    }
    _deleteOneItem = (item) => {
        this.delItem(item.id);
        this.refresh();
    }
    _findMaxId = (datas) => {
        for(let i = 0,length = datas.length; i < length;i++){
            let item = datas[i];
            if(item.id >= maxId){
                maxId = item.id;
            }
            this._findMaxId(item.childrens);
        }
    }
    onChangeData = (id, needChangeData) => {
        if(id && needChangeData){
            let currentData = cloneDeep(this.findItem(id,this._dataSource));
            this.replaceData(currentData.id,{...currentData,...needChangeData})
            this.refresh();
        }
    }
    onResetData = () => {
        this.dataSource = cloneDeep(this.dataSource);
        this._dataSource = cloneDeep(this.dataSource);;
        this.setState({
            refresh:!this.state.refresh
        })
    }
    onSetData = (dataSource,callBack) => {
        if(!!dataSource){
            this.dataSource = dataSource;
            this._dataSource = cloneDeep(this.dataSource);;
            this.setState({
                refresh:!this.state.refresh
            })
            if(!!isFunction(callBack)){
                callBack()
            }
        }
    }
    onGetData = () => {
        return this._dataSource;
    }
    children = (data) => {
        if (!!data && data.length > 0) {
            return (
                <tr >
                    {
                        data.map((item) => {
                            return (
                                <td key={"childrenTd" + item.id} className="node-container" colSpan="2">
                                    {this.parent([item])}
                                </td>
                            )
                        })
                    }
                </tr>
            )
        }
        return null;
    }
    parent = (data) => {
        return data.map((item) => {
            let colSpan = item.childrens.length * 2;
            return (
                <table key={"children" + item.id} cellPadding="0" cellSpacing="0" border="0">
                    <tbody>
                        <tr>
                            <Target onDrageFromTo={this.onDrageFromTo} data={item} isShow={this.state.isShow}>
                                <Children width={this.props.width} onClick={this.props.onClick} renderItem={this.props.renderItem}
                                isEditItem = {this.props.isEditItem}_addOneItem={this._addOneItem} _deleteOneItem={this._deleteOneItem}
                                forbidDrag={!!item.notDrag?true:false} onDrageFromTo={this.onDrageFromTo} data={item} />
                            </Target>
                        </tr>
                        <LineFirst lineNum = {item.childrens.length}/>
                        <LineTow lineNum = {item.childrens.length}/>
                        {this.children(item.childrens)}
                    </tbody>
                </table>
            )
        })
    }
    onDrageFromTo = (type, data) => {
       if(type == "from"){
            drageData = cloneDeep(data);
            this.setState({
                isShow:true
            })
       }else if(type == "to"){
            this.setState({
                isShow:true
            })
            if(data.id === drageData.id) return;
            if(isFunction(this.props.isParentToChildren)){
                if(this.props.isParentToChildren(drageData,data) === false){//传入的是否可拖拽
                    return;  
                }
            }
            if(!!this.isParentToChildren(drageData,data)){//判断是不是从父元素拖向子元素
                //可以给提示
                return;
            }
            this.delItem(drageData.id);
            this.addItem(data.id,drageData);
            this.refresh();
       }
       else if(type == "hover"){
            if(isFunction(this.props.isParentToChildren)){
                if(this.props.isParentToChildren(drageData,data) === false){//传入的是否可拖拽
                    this.setState({
                        isShow:false
                    })
                    return false;
                }
            }
            if(!!this.isParentToChildren(drageData,data)){//判断是不是从父元素拖向子元素
                this.setState({
                    isShow:false
                })
                return false;
            }
       }
    }
    replaceData = (id,newData,allData = this._dataSource) =>{
        let parent =  this.findParent(id,allData);
        for (let i = 0 ; i < parent.childrens.length; i++) {
            let element = parent.childrens[i];
            if(element.id === id){
                parent.childrens.splice(i,1,newData);
            }
        }
    }
    /**
     * id 当前原色id
     * datas需要递归寻找的数据源
     * return id的父节点
     */
    findParent = (id,datas) =>{
        for(let i = 0,length = datas.length; i < length;i++){
            let item = datas[i];
            if(item.childrens.find((ele)=>ele.id === id)){
                return item
            }
            let _item = this.findParent(id,item.childrens);
            if(!!_item) return _item;
        }
    }
    findItem = (id,datas) =>{
        for(let i = 0,length = datas.length; i < length;i++){
            let item = datas[i];
            if(item.id === id){
                return item;
            }
            let _item = this.findItem(id,item.childrens);
            if(!!_item) return _item;
        }
    }
    addItem = (id,drageData) =>{
        let currentData =  this.findItem(id,this._dataSource);
        let _isHaveChildren = currentData.childrens.find((item)=>item.id === drageData.id)
        if(_isHaveChildren){
            return;
        }
        drageData.pid = currentData.id;
        currentData.childrens.push(drageData)
    }
    delItem = (id) => {
        let parent =  this.findParent(id,this._dataSource);
        if(parent){
            for (let i = 0 ; i < parent.childrens.length; i++) {
                let element = parent.childrens[i];
                if(element.id === id){
                    parent.childrens.splice(i,1);
                    return;
                }
            }
        }
    }
    isParentToChildren = (from,to) =>{
        if(!!this.findItem(to.id,from.childrens)) return true;
        return false
    }
    refresh = (callBack) =>{
        this.setState({
            refresh:!this.state.refresh
        },()=>{
            if(isFunction(callBack)){
                callBack();
            }
        })
    }
    render() {
        return (
            <div className="quant-drop-tree">
                {this.parent(this._dataSource)}
            </div>
        );
    }
}
export default DragDropContext(HTML5Backend)(DropTree);
