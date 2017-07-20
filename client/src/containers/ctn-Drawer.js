import React, { Component } from 'react';
import { connect } from 'react-redux';
import CPNDrawer from '../components/ctn-Drawer/cpn-drawer';
import { controlDrawer } from '../action/controlDrawer';


class CTNDrawer extends Component {
    
    render () {
        const { statusDrawer, controlDrawer } = this.props;
        return (
            <CPNDrawer statusDrawer={statusDrawer} control={controlDrawer}/>
        )
    }
}

const mapStateToProps = (state) => ({
    statusDrawer: state.rdControlDrawer
})

export default connect(mapStateToProps, { controlDrawer })(CTNDrawer);
