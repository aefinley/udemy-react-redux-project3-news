import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//components
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" component={Home}/>
        </Switch>
        <Footer />
    </BrowserRouter>
)

export default Routes;