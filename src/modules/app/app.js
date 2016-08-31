import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import AppBox from './components/AppBox';
import Recipe from './components/Recipe';
import Search from './components/Search';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={AppBox}>
			<IndexRoute component={Search}/>
			<Route path="recipe/:recipeId" component={Recipe}/>
		</Route>
	</Router>,
    document.getElementById('app-box')
);