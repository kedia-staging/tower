import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './App';
import './index.scss';
import './routes/index.ts';

const history = createBrowserHistory();

const render = () => ReactDOM.render(
    <App history={history} />,
    document.getElementById('root') as HTMLElement,
);

render();
