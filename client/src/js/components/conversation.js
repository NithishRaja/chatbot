import React, { Component } from "react";
import Text from "./text";
import Card from "./card";

export default class Conversation extends Component{

  constructor(props){
    super(props);

    this._messageListJSX = <ul className="list-group list-unstyled">
                            {this.props.messageList.map((message, index) => {
                              if(message.text){
                                return <li key={index}><Text text={message.text} source={message.source} /></li>
                              }else if(message.cardType){
                                return <li key={index}>{message.cardList.map(card => <Card key={card._id} card={card} />)}</li>
                              }else{
                                return <li key={index}>{"there was error in displaying this message"}</li>
                              }
                            })}
                          </ul>;

    this._componentLayoutJSX = this._messageListJSX;

  }

  render(){
    return(
      this._componentLayoutJSX
    );
  }

}
