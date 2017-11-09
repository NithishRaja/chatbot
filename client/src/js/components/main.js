import React, { Component } from "react";

export default class Main extends Component{

  constructor(props){
    super(props);

    this._componentLayoutJSX = <div className="col-md-offset-4 col-md-4 panel panel-default">
                                <div className="panel-body">
                                  <button className="col-md-offset-3 btn btn-primary">{"start conversation"}</button>
                                </div>
                              </div>;
  }

  render(){
    return(
      this._componentLayoutJSX
    );
  };

}
