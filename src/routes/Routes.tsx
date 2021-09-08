import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import {Auth, Project, Error} from "../pages";

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Redirect exact from={'/'} to={'/project'}/>
				<Route path={'/project'} component={Project}/>
				<Route path={'/auth'} component={Auth}/>
				<Route component={Error}/>
			</Switch>
		</Router>
	);
};

export default Routes;
