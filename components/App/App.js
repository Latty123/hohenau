import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { MainPage } from '../MainPage/MainPage';
import { useSelector } from 'react-redux';

import '../../styles/global.css';

function App() {
    const themeFromStore = useSelector(state => state.app.theme) || 'foto';

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={`/${themeFromStore}`}>
                    <MainPage theme={themeFromStore} />
                </Route>
                <Redirect from='/' exact={false} to='/foto' />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
