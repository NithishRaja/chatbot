import React, {Component} from "react";

export default class Form extends Component{

  constructor(props){
    super(props);

    this._componentLayoutJSX = <div className="form-inline">
                                <div className="form-group">
                                  <input type="text" className="form-control" placeholder="type a message" />
                                  <button className="btn btn-success">{"send"}</button>
                                </div>
                              </div>;

  }

  render(){
    return(
      this._componentLayoutJSX
    );
  }

}
