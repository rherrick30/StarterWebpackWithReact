import React from 'react';
import Header from './common/Header';
import { Switch, Route } from 'react-router-dom';
import HomePage from './home/HomePage';

function App(){
        return(
            <div className="container-fluid">
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                </Switch>
            </div>
        );
}

export default App;