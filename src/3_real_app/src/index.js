import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import SimpleRefactor from './1_simple_refactor/Example';
import Posts from './2_refactor/Posts';
import Router from './3_router/Router';
import Todo from './todoApp';

const apps = {
  '/simpleRefactor': <SimpleRefactor />,
  '/refactor': <Posts />,
  '/todo': <Todo />,
  '/router': <Router />,
};

const SelectedApp = apps[window.location.pathname] || <App apps={apps} />;
ReactDOM.render(
  SelectedApp,
  document.getElementById('root')
);
