import React, {Component} from "react";
import Rx from "rxjs/Rx";

export default class Form extends Component{

  constructor(props){
    super(props);

    this._componentLayoutJSX = <div>
                                <div className="form-group col-xs-8 col-md-10">
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
    // event listener to listen to form submission
    Rx.Observable.fromEvent(document.querySelector("#message"), "keyup")
      .debounceTime(500)
      .subscribe({
        next: (event) => {
          if(event.code==="Enter" && document.querySelector("#message").value!==""){
            this.props.newMessage(document.querySelector("#message").value);
            document.querySelector("#message").value="";
          }
        }
      });
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
