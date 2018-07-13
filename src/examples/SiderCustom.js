/**
 * SiderCustom
 */
import React, { Component } from 'react';
import { Layout } from 'quant-ui';
import { withRouter } from 'react-router-dom';
import routes from '../routes/config';
import SiderMenu from './SiderMenu';
const { Sider } = Layout;

class SiderCustom extends Component {
    static setMenuOpen = props => {
        const { pathname } = props.location;
        console.log("*******",pathname.split('/'))
        let openKey = [];
        let str = ""
        pathname.split('/').forEach((ele,index)=>{
            if(index == 0) return
                str += `/${ele}`
            if(index >= 2){
                openKey.push(str)
            }
        })
        return {
            openKey: openKey,
            selectedKey: pathname
        };
    };
    state = {
        collapsed: false,
        mode: 'inline',
        openKey: '',
        selectedKey: '',
        firstHide: false,        // 点击收缩菜单，第一次隐藏展开子菜单，openMenu时恢复
    };
    componentDidMount() {
        // this.setMenuOpen(this.props);
        const state = SiderCustom.setMenuOpen(this.props);
        this.setState(state);
    }
    menuClick = e => {
        this.setState({
            selectedKey: e.key
        });
    };
    openMenu = v => {
        this.setState({
            openKey: v,
            firstHide: false,
        })
    };
    render() {
        return (
            <Sider
                trigger={null}
                breakpoint="lg"
                collapsedWidth="0"
                collapsed={this.props.collapsed}
                style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}
            >
                <div className="app_logo" />
                <SiderMenu
                    menus={routes.menus}
                    onClick={this.menuClick}
                    theme="dark"
                    mode="inline"
                    selectedKeys={[this.state.selectedKey]}
                    openKeys={this.state.firstHide ? null : [...this.state.openKey]}
                    onOpenChange={this.openMenu}
                />
            </Sider>
        )
    }
}

export default withRouter(SiderCustom);