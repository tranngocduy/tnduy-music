import React, { Component } from 'react';
import { connect } from 'react-redux';
import CPNAppBar from '../components/ctn-AppBar/cpn-appBar';
import { controlDrawer } from '../action/controlDrawer';

class CTNApp extends Component {


    render() {
        const { statusDrawer, controlDrawer } = this.props;
        return (
            <CPNAppBar
                statusDrawer={statusDrawer}
                control={controlDrawer}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    statusDrawer: state.rdControlDrawer
})

export default connect(mapStateToProps, { controlDrawer })(CTNApp);
