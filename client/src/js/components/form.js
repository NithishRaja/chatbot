import React, {Component} from "react";
import Rx from "rxjs/Rx";

export default class Form extends Component{

  constructor(props){
    super(props);

    this._componentLayoutJSX = <div className="form-inline">
                                <div className="form-group">
                                  <input type="text" id="message" className="form-control" placeholder="type a message" />
                                  <button id="send" className="btn btn-success">{"send"}</button>
                                </div>
                              </div>;

  }

  render(){
    return(
      this._componentLayoutJSX
    );
  }

  componentDidMount(){
    Rx.Observable.fromEvent(document.querySelector("#send"), "click")
      .debounceTime(500)
      .subscribe({
        next: (event) => {
          if(document.querySelector("#message").value===""){
            event.preventDefault();
          }else{
            console.log(document.querySelector("#message").value);
          }
        }
      });
  }

}
