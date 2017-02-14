import React, {Component} from 'react';
import {render} from 'react-dom';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import styles from '../App.css';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');


class App extends Component {
    constructor(props, context){
       super(props, context);
       this.state = {
        buttonClicked:false,
        }
    }
    hideButton(){
        this.setState({buttonClicked:true});
    }
   
    render(){
        return (
            <div className="app-container" >
                <div className="downloadButton" onClick={()=>this.hideButton()}>
                    <div className={`arrow ${ this.state.buttonClicked ? 'hide':''} `}>
                        <div className="arrow__vertical-bar"></div>
                        <div className="arrow__pointer"></div>
                    </div>
                    <div className={`downloadArrowContainer ${ this.state.buttonClicked ? 'display':''} `}>
                        <div className="arrow__pointer animation top"></div>
                        <div className="arrow__pointer animation bottom"></div>
                    </div>
                </div>
            </div>
        )
    }
};

render(
    <App/>,
  document.getElementById('root')
)
