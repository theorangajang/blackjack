import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';
import HomeContainer from './containers/HomeContainer';
import GameContainer from './containers/GameContainer';

export default (
    <Route path="/" component={ App }>
        <IndexRoute component={ HomeContainer } />
        <Route path="game" component={ GameContainer }/>
    </Route>
)