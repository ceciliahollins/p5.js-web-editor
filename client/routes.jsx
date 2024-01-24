import PropTypes from 'prop-types';
import React from 'react';
import { Route as RouterRoute, Switch } from 'react-router-dom';

import App from './modules/App/App';
import IDEView from './modules/IDE/pages/IDEView';
import MobileIDEView from './modules/IDE/pages/MobileIDEView';
import { mobileFirst, responsiveForm } from './utils/responsive';
import Activity0 from './modules/IDE/activities/activity0/activity0';

/**
 *  `params` is no longer a top-level route component prop in v4.
 *  It is a nested property of `match`.
 *  Use an HOC to lift it up to top-level.
 */
const withParams = (Component) => (props) => (
  // eslint-disable-next-line react/prop-types
  <Component {...props} params={props.match.params} />
);
/**
 * Instead of updating all individual components, use this plug-in Route replacement.
 * It passes the `params` as a top-level property
 * and fixes prop-types errors in react-router package
 * (Warning: Failed prop type: Invalid prop `component` of type `object` supplied to `Route`, expected `function`.)
 */
const Route = ({ component, ...props }) => (
  <RouterRoute component={withParams(component)} {...props} />
);
Route.propTypes = { ...RouterRoute.propTypes };
Route.propTypes.component = PropTypes.elementType.isRequired;

const routes = (
  <Switch>
    <Route path="/" component={mobileFirst(MobileIDEView, IDEView)} />
  </Switch>
);

function Routing() {
  return <App>{routes}</App>;
}

export default Routing;
