import React from 'react';
import { hot } from 'react-hot-loader/root';
import { ThemeProvider } from 'styled-components';

import './index.css';

import Dashboard from './components/pages/dashboard';

import { theme } from './theme';

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<>
				<Dashboard />
			</>
		</ThemeProvider>
	);
};

export default hot(App);
