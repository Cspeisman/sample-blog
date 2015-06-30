import React from 'react';
import Router from 'react-router';
import Routes from './Routes';

// handle client side rendering
if (typeof document !== 'undefined') {
  Router.run(Routes, Router.HistoryLocation, (Handler) => {
    React.render(<Handler />, document.body);
  });
}

export default function render(locals, callback) {
  Router.run(Routes, locals.path, (Handler) => {
    const html = React.renderToString(React.createElement(Handler, locals));
    callback(null, '<!DOCTYPE html>' + html);
  });
}
