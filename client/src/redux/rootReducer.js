import { combineReducers } from 'redux';
import rdControlDrawer from './rd-controlDrawer';
import rdfetchHomeList from './rd-fetchHomeList';
import rdSelectedMusic from './rd-selectedMusic';

const rootReducer = combineReducers({
    rdControlDrawer,
    rdfetchHomeList,
    rdSelectedMusic
})

export default rootReducer;

