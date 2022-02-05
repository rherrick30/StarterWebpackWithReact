import React from 'react';
import {Route} from 'react-router-dom';
import App from './components/App';
import HomePage from './components/home/HomePage';

export default(
    <div className="mainBody">
    <Route path="/" component={App}>
        <Route component={HomePage} />
    </Route>
    </div>
);

