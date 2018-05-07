import {combineReducers} from 'redux';
// import notes from './reducer-notes';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    // notes
});

export default allReducers
