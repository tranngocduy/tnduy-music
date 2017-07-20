import React, { Component } from 'react';
import { AppBar } from 'material-ui';
import TextField from 'material-ui/TextField';
import { pink500 } from 'material-ui/styles/colors';

class CPNAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusDrawer: this.props.statusDrawer.status
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            statusDrawer: nextProps.statusDrawer.status
        })
    }

    changeControlDrawer() {
        this.props.control(!this.state.statusDrawer);
    }

    render() {
        return (
            <AppBar
                onLeftIconButtonTouchTap={this.changeControlDrawer.bind(this)}
                iconElementRight={<TextField
                    hintText="Tìm kiếm"
                    underlineFocusStyle={{ borderBottomColor: pink500 }}
                />}
            />
        )
    }
}

export default CPNAppBar;
