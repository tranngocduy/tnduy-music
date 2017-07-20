import React, { Component } from 'react';
import { connect } from 'react-redux';
import LinearProgress from 'material-ui/LinearProgress';

import HomeList from '../components/ctn-Home/cpn-List';
import PlayBox from '../components/ctn-Home/cpn-PlayBox'
import { fetchHomeList } from '../action/fetchHomeList';
import { selectedMusic } from '../action/selectedMusic';

class CTNHome extends Component {

    componentDidMount() {
        this.props.fetchHomeList();
    }

    render() {
        const { data, selectedMusic, selected, pauseMusic } = this.props;
        return (
            <div className="row">
                {data.isLoading && <LinearProgress mode="indeterminate" />}       
               {data.Success && <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <HomeList data={data.Success} selected={selectedMusic} />
                </div>}
               {data.Success && <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                    <PlayBox selected={selected.Success}/>
                </div>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    data: state.rdfetchHomeList,
    selected: state.rdSelectedMusic
}) 

export default connect(mapStateToProps, { fetchHomeList, selectedMusic })(CTNHome);