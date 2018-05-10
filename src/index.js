import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import 'normalize.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import publicationInfo from './reducers/publicationReducer';

var reducers = combineReducers({
    publicationInfo: publicationInfo
});

const store = createStore(reducers);

function render () {   
	ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
}


store.subscribe(render);

render();
registerServiceWorker();