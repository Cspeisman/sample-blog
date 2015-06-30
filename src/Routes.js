import React from 'react';
import {Route, DefaultRoute} from 'react-router';
import Root from './components/Root';
import Index from './components/Index';
import Blog from './components/Blog';
import Post from './components/Post';

let Routes = (
  <Route handler={Root} path="/">
    <DefaultRoute handler={Index} />
    <Route handler={Blog} path="/blog" />
    <Route handler={Post} path="/blog/:slug" />
  </Route>
);

export default Routes;
