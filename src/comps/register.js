import React, { Component } from 'react';

import $ from 'jquery';
import Input from './inputs';
import Errors from './errors'

export default class Register extends Component{
	constructor() {
	    super();

	    this.state = {nome: '', email: '', senha: ''};
	    this.saveData = this.saveData.bind(this);
	    this.setName = this.setName.bind(this);
	    this.setEmail = this.setEmail.bind(this);
	    this.setPassword = this.setPassword.bind(this);

	    window.$this = this;
	}

	setName(data){
		this.setState({nome: data.target.value});
	}

	setEmail(data){
		this.setState({email: data.target.value});
	}

	setPassword(data){
		this.setState({senha: data.target.value});
	}

	saveData(event){
	    event.preventDefault();

		$.ajax({
			url: 'https://cdc-react.herokuapp.com/api/autores',
			contentType: 'application/json',
			dataType: 'json',
			type: 'post',
			data: JSON.stringify({
				nome:this.state.nome,
				email:this.state.email,
				senha:this.state.senha
			}),
			success: function(data){
				window.$this.setState({list: data});
			}, 
			error: function(data){
				if(data.status === 400){
					new Errors().validate(data.responseJSON);
			}
			}
		})
	}

	render(){
		return(
			<div className="pure-form pure-form-aligned">
	          <form className="pure-form pure-form-aligned" onSubmit={this.saveData} method="post">
	            
	            <Input id="nome" type="text" name="nome" value={this.state.nome} onChange={this.setName} label="Nome"/>                                              
	            <Input id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail} label="Email"/>                                              
	            <Input id="senha" type="password" name="senha" value={this.state.senha} onChange={this.setPassword} label="Senha"/>
	            
	            <div className="pure-control-group">                                  
	              <label></label> 
	              <button type="submit" className="pure-button pure-button-primary">Gravar</button>                                    
	            </div>

	          </form>             
	        </div>
		);
	}
}