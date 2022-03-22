import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, matchPath } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routeConfig';
import './gobal.less';
import { Web3ReactProvider } from '@web3-react/core';
import { getLibrary } from './utils';
import north from './north.config';
import { North } from 'north';

north.init({
  sentry: {
    integrations: [
      new North.BrowserTracing({
        routingInstrumentation: North.Sentry.reactRouterV4Instrumentation(history, routes as any, matchPath),
      }),
    ],
  }
});

ReactDOM.render(
  <BrowserRouter>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Switch>
        {renderRoutes(routes)}
      </Switch>
    </Web3ReactProvider>
  </BrowserRouter>,
  document.getElementById('root')
)