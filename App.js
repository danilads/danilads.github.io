﻿//react
import React from 'react';
import ReactDOM from 'react-dom';

//для работы async / await
import "babel-polyfill";


//redux
import { Provider } from 'react-redux';

//route
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

//components
import Page_Main from './01_pages/Page_Main';
import Page_Content from './01_pages/Page_Content';

//store
import store from './redux/store';


ReactDOM.render(
	
	<Provider store={store}>
		<BrowserRouter>
			<React.Fragment>
				<Route path="/" exact component={Page_Main} />
				<Route path="/content" component={Page_Content} />
			</React.Fragment>
		</BrowserRouter>
	</Provider>
	
	, document.getElementById('container') 
);

