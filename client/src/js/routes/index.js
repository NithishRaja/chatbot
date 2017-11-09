import React from 'react';
import {Route, Switch} from "react-router-dom";
import Main from './../containers/mainContainer';
import Notfound from './../components/notfound';

const _routesJSX = <Switch>
                    <Route path="/" exact component={Main}  />
                    <Route path="*" component={Notfound} />
                  </Switch>;

export default _routesJSX;
