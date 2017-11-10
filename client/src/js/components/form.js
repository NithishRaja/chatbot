import React, {Component} from "react";
import Rx from "rxjs/Rx";

export default class Form extends Component{

  constructor(props){
    super(props);

    this._componentLayoutJSX = <div>
                                <div className="form-group col-md-10">
                                  <input type="text" id="message" className="form-control" placeholder="type a message" />
                                </div>
                                <button id="send" className="btn btn-success">{"send"}</button>
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
            this.props.newMessage(document.querySelector("#message").value);
            document.querySelector("#message").value="";
          }
        }
      });
  }

}
