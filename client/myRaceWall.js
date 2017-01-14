import React from 'react';
import { render } from 'react-dom';

// Import CSS
import css from './styles/style.styl';

// Import Components
import Main from './components/Main';
import HomePage from './home/containers/HomePage';
import UserDash from './userdash/containers/UserDash';

// Import React-Router Dependencies
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
	<Router history={browserHistory}>
		<Route path="/racewall" component={Main}>
			<IndexRoute component={HomePage}></IndexRoute>
			<Route path="user" component={UserDash} />
		</Route>
	</Router>
);

render(router, document.getElementById('root'));




