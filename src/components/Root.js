import React, {PropTypes} from 'react';
import Router from 'react-router';
import Nav from './Nav';

const {RouteHandler} = Router;

export default class Root extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
  }

  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
        </head>
        <body>
          <Nav />
          <RouteHandler {...this.props} />
        </body>
      </html>
    );
  }
}
