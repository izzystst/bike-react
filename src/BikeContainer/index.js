import React, { Component } from 'react'

export default class BikeContainer extends Component {
	constructor(props){
		super(props)
		this.state={
			bikes:[]
		}
	}render(){
		return(
			<React.Fragment>
			<h2> BIKES!!!!!</h2>
			</React.Fragment>
			)
	}
}