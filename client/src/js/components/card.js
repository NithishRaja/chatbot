import React, {Component} from "react";
import Rx from "rxjs/Rx";

export default class Card extends Component{

  constructor(props){
    super(props);

    this._cardJSX = <div className="panel panel-info">
                      <div className="panel-head">
                        {this.props.card.name}
                      </div>
                      <div className="panel-body">
                        <label className="label label-warning">{this.props.card.location}</label>
                        <img src={this.props.card.image} alt={this.props.card.name}/>
                        <p>{this.props.card.desc}</p>
                      </div>
                      <div className="panel-footer">
                        <button className="btn btn-primary">{"minimize"}</button>
                      </div>
                    </div>;

    this._minimizeCardJSX = <div className="alert alert-info">{this.props.card.name}<button id={this.props.card.id} className="btn btn-primary">{"expand"}</button></div>;

    this._componentLayoutJSX = this._cardJSX;

  }

  render(){

    console.log(this.props.card);

    return(
      this._componentLayoutJSX
    );
  }

  componentDidMount(){

    Rx.Observable.fromEvent(document.querySelector(`#${this.props.card.id}`), "click")
      .debounceTime(500)
      .subscribe({
        next: (event) => {
          console.log("clicked");
        }
      });

  }

}
