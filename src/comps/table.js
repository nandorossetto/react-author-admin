import React, { Component } from 'react';

import $ from 'jquery';

export default class Register extends Component{
	constructor() {
	    super();

	    this.state = {list: []};
	    window.$this = this;
	}

	componentDidMount() { 
		$.ajax({
			url: 'https://cdc-react.herokuapp.com/api/autores',
			dataType: 'json',
			success: function(data){
				window.$this.setState({list: data}); 
			}
		});
	}

	render(){
		return(
			<div>            
              <table className="pure-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>email</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.list.map(function(author){
                      return(
                        <tr key={author.id}>
                          <td>{author.nome}</td>
                          <td>{author.email}</td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table> 
            </div>
		);
	}
}