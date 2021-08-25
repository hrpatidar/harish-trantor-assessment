import React from 'react';
import { Switch,  Route, Redirect } from "react-router-dom";
import ItemDetailComponent from '../pages/item-detail';
import ListComponent from '../pages/list';

const AppRoutes = () => {
    return <Switch>
        <Route exact path="/">
            <Redirect to="/list"/>
        </Route>
        <Route path="/list" component={ListComponent} />
        <Route path="/details/:id" component={ItemDetailComponent} />
    </Switch>
}

export default AppRoutes;

