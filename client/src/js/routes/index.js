import React from 'react';
import {Route, Switch} from "react-router-dom";
import Main from './../components/main';

const _routesJSX = <Switch>
                    <Route path="/" exact component={Main}  />
                    <Route path="*" render={() => <h1>not found</h1>} />
                  </Switch>;

export default _routesJSX;
