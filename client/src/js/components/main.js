import React, { Component } from "react";
import Rx from "rxjs/Rx";

export default class Main extends Component{

  constructor(props){
    super(props);

    this._componentLayoutJSX = <div className="col-md-offset-3 col-md-6 panel panel-default">
                                <div className="panel-body">
                                  <button id="start-conversation" className="col-md-offset-4 btn btn-primary">{"start conversation"}</button>
                                </div>
                              </div>;
  }

  render(){
    return(
      this._componentLayoutJSX
    );
  }

  componentDidMount(){
    Rx.Observable.fromEvent(document.querySelector("#start-conversation"), "click")
      .debounceTime("500")
      .subscribe({
        next: (event) => {
          console.log("clicked");
        }
      });
  }

}
