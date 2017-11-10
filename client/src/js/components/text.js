import React, {Component} from "react";

export default class Text extends Component{

  constructor(props){
    super(props);

    this._componentClassName = this.props.source==="chatbot"?"alert alert-info":"alert alert-warning";

    this._componentLayoutJSX = <div className={`${this.props.source} ${this._componentClassName}`}>{this.props.text}</div>;

  }

  render(){
    return(
      this._componentLayoutJSX

    );
  }

}
