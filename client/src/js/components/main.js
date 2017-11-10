import React, { Component } from "react";
import Rx from "rxjs/Rx";
import Conversation from "./conversation";
import Form from "./form";

export default class Main extends Component{

  constructor(props){
    super(props);

    this._gettingMessagesAlertJSX = <div className="alert alert-info">{"Getting messages. Please wait..."}</div>;

    this._conversationCoverJSX = <div className="panel panel-default">
                                  <div className="panel-body">
                                    <button id="start-conversation" className="col-md-offset-4 btn btn-primary">{"start conversation"}</button>
                                  </div>
                                </div>;

    this._componentLayoutJSX = this._conversationCoverJSX;
  }

  componentWillUpdate(nextProps){
    if(nextProps.conversationStatus && nextProps.messageList===null){
      this._componentLayoutJSX = this._gettingMessagesAlertJSX;
    }else if(nextProps.conversationStatus){
      this._componentLayoutJSX = <div className="panel panel-default">
                                  <div className="panel-body message-list">
                                    <Conversation messageList={this.props.messageList} />
                                  </div>
                                  <div className="panel-footer">
                                    <Form />
                                  </div>
                                </div>;
    }else{
      this._componentLayoutJSX = this._conversationCoverJSX;
    }
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
          this.props.updateConversationStatus(true);
        }
      });
  }

}
