import React, {Component} from "react";
import Rx from "rxjs/Rx";

export default class Card extends Component{

  constructor(props){
    super(props);

    this.state = {
      expand: true
    };

    if(this.props.cardType==="park"){
      this._cardLabelJSX = <ul className="list-inline list-unstyled">
                            {this.props.card.location.map((location, index) => <li key={index}><label className="label label-warning">{location}</label></li>)}
                          </ul>;
    }else{
      this._cardLabelJSX = <ul className="list-inline list-unstyled">
                            <li>
                              <label className="label label-warning">{this.props.card.park}</label>
                            </li>
                          </ul>;
    }

    this._cardJSX = <div className="chatbot panel panel-info">
                      <div className="panel-heading">
                        {this.props.card.name}
                      </div>
                      <div className="panel-body">
                        {this._cardLabelJSX}
                        <img src={this.props.card.image} alt={this.props.card.name}/>
                        <p>{this.props.card.desc}</p>
                      </div>
                      <div className="panel-footer">
                        <button id={`minimize-${this.props.card._id}`} className="col-md-offset-10 minimize btn btn-primary">{"minimize"}</button>
                      </div>
                    </div>;

    this._minimizeCardJSX = <div className="chatbot well">
                              <div className="alert alert-info">
                                {this.props.card.name}
                              </div>
                              <button id={`expand-${this.props.card._id}`} className="col-md-offset-10 btn btn-primary">{"expand"}</button>
                            </div>;

    this._componentLayoutJSX = this._cardJSX;

  }

  componentWillUpdate(nextProps, nextState){
    if(nextState.expand){
      this._componentLayoutJSX = this._cardJSX;
    }else{
      this._componentLayoutJSX = this._minimizeCardJSX;
    }
  }

  render(){

    return(
      this._componentLayoutJSX
    );
  }

  componentDidMount(){

    Rx.Observable.fromEvent(document.querySelector(`#minimize-${this.props.card._id}`), "click")
      .debounceTime(500)
      .subscribe({
        next: (event) => {
          this.setState({
            expand: !this.state.expand
          });
        }
      });

  }

  componentDidUpdate(){
    if(this.state.expand){
      Rx.Observable.fromEvent(document.querySelector(`#minimize-${this.props.card._id}`), "click")
        .debounceTime(500)
        .subscribe({
          next: (event) => {
            this.setState({
              expand: !this.state.expand
            });
          }
        });
    }else{
      Rx.Observable.fromEvent(document.querySelector(`#expand-${this.props.card._id}`), "click")
        .debounceTime(500)
        .subscribe({
          next: (event) => {
            this.setState({
              expand: !this.state.expand
            });
          }
        });
    }
  }

}
