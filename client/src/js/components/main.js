import React, { Component } from "react";
import Rx from "rxjs/Rx";
import Conversation from "./conversation";
import Form from "./form";

export default class Main extends Component{

  constructor(props){
    super(props);

    this.state = {
      conversationStatus: false
    };

    this._gettingMessagesAlertJSX = <div className="alert alert-info">{"Getting messages. Please wait..."}</div>;

    this._conversationCoverJSX = <div className="panel panel-default">
                                  <div className="panel-body">
                                    <button id="start-conversation" className="col-md-offset-4 btn btn-primary">{"start conversation"}</button>
                                  </div>
                                </div>;

    this._componentLayoutJSX = this._conversationCoverJSX;
  }

  componentWillMount(){
    // if no messages are present, get new messages
    if(this.props.messageList===null){
      this.props.startConversation();
    }
  }

  componentWillUpdate(nextProps, nextState){
    // display the appropriate component
    if(nextState.conversationStatus && nextProps.messageList===null){
      this._componentLayoutJSX = this._gettingMessagesAlertJSX;
    }else if(nextState.conversationStatus){
      this._componentLayoutJSX = <div className="panel panel-default">
                                  <div className="app-heading panel-heading">
                                    {"CHATBOT"}
                                    <button id="refresh" className="col-md-offset-9 btn btn-primary">{"refresh"}</button>
                                  </div>
                                  <div className="panel-body message-list">
                                    <Conversation messageList={nextProps.messageList} />
                                  </div>
                                  <div className="panel-footer">
                                    <Form newMessage={nextProps.newMessage} />
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
    // event listener to start conversation
    Rx.Observable.fromEvent(document.querySelector("#start-conversation"), "click")
      .debounceTime("500")
      .subscribe({
        next: (event) => {
          this.setState({
            conversationStatus: !this.state.conversationStatus
          });
        }
      });
  }

  componentDidUpdate(){
    if(this.state.conversationStatus && this.props.messageList!==null){
      // event listener to refresh conversation
      Rx.Observable.fromEvent(document.querySelector("#refresh"), "click")
        .debounceTime(500)
        .subscribe({
          next: (event) => {
            this.props.startConversation();
          }
        });
    }
  }

}
