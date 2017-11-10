import React, { Component } from "react";

export default class Conversation extends Component{

  constructor(props){
    super(props);

    this._componentLayoutJSX = <h1>{"conversation"}</h1>;

  }

  render(){

    console.log(this.props.messageList);

    return(
      this._componentLayoutJSX
    );
  }

}
