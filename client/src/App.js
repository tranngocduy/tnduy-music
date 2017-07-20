import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import CTNAppBar from './containers/ctn-App';
import CTNDrawer from './containers/ctn-Drawer';
import CTNHome from './containers/ctn-Home';
import CTNMucsicVN from './containers/ctn-MusicVN';
import CTNMucsicUSUK from './containers/ctn-MucsicUSUK'
import Chat from './components/ctn-Home/cpn-Chat';

import store from './redux/index';

injectTapEventPlugin();

class App extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <Provider store={store}>
                    <div>
                        <Router>
                            <div style={{ marginLeft: '20px', marginRight: '20px' }}>
                                <CTNAppBar />
                                <CTNDrawer />
                                <div className="container" style={{ marginTop: '50px' }}>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                            <Route exact path="/" component={CTNHome} />
                                            <Route path="/nhac-viet" component={CTNMucsicVN} />
                                            <Route path="/nhac-au-my" component={CTNMucsicUSUK} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Router>
                        <Chat />
                    </div>
                </Provider>
            </MuiThemeProvider>
        );
    }
}

export default App;
