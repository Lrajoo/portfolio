import React, { Component } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/">
						<LandingPage />
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
