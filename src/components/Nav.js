import React from 'react';
import {Link} from 'react-router';


export default class Nav extends React.Component {
  render() {
    return (
      <header>
        <Link to="/">Index</Link>
        <Link to="/blog">Blog</Link>
      </header>
    );
  }
}
