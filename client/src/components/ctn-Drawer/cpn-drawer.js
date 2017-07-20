import React, { Component } from 'react';
import { Drawer, List, ListItem } from 'material-ui';
import {
  Link
} from 'react-router-dom'

class CPNDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: props.statusDrawer.status
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            open: nextProps.statusDrawer.status
        })
    }

    render() {
        const { open } = this.state;
        return (
            <Drawer
                open={open}
                docked={false}
                onRequestChange={() => this.props.control(!open)}
            >
                <List>
                    <Link to="/"><ListItem>Trang Chủ</ListItem></Link>
                    <Link to="/nhac-viet"><ListItem>Nhạc Việt</ListItem></Link>
                    <Link to="/nhac-au-my"><ListItem>Nhạc Âu Mỹ</ListItem></Link>
                </List>
            </Drawer>
        )
    }
}

export default CPNDrawer;
