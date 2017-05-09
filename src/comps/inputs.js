import React, { Component } from 'react';
import PubSub from 'pubsub-js';

export default class Inputs extends Component{
	constructor() {
		super();
		this.state = {errorMessage: ''};
	}

	render(){
		return(
			<div className="pure-control-group">
				<label htmlFor={this.props.id}>{this.props.label}</label>
				<input id={this.props.id} type={this.props.type} name={this.props.nome} value={this.props.value} onChange={this.props.onChange}/>
				<span className="error">{this.state.errorMessage}</span>
			</div>
		)
	}

	componentDidMount(){
		PubSub.subscribe('not-valid',function(topic, error){
	    	this.setState({errorMessage: error.defaultMessage});

		}.bind(this));    
	 
	}
}