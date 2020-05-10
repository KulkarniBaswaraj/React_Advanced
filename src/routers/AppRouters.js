import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/layout/Header';
import ExpenseDashboardPage from '../components/pages/dashboard';
import AboutPage from '../components/pages/about';
import EditPage from '../components/pages/edit';
import HelpPage from '../components/pages/help';
import PageNotFound from '../components/pages/pageNotFound';


const AppRoutes = () => (

    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/about" component={AboutPage} exact={true} />
                <Route path="/edit" component={EditPage} />
                <Route path="/help" component={HelpPage} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRoutes;