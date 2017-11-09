import React, { Component } from "react";

export default class Main extends Component{

  constructor(props){
    super(props);

    this._componentLayoutJSX = <h1>helllo</h1>;

  }

  render(){
    return(
      this._componentLayoutJSX
    );
  };

}
