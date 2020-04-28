import React, { Component } from 'react'

export default class BikeContainer extends Component {
	constructor(props){
		super(props)
		this.state={
			bikes:[]
		}
	}
	componentDidMount(){
		this.getBikes()
	}
	getBikes = async()=>{
		try{
			const url = process.env.REACT_APP_API_URL + '/api/v1/bikes/'
			console.log(url)
			const bikeResponse = await fetch(url)
			const bikesJson = await bikeResponse.json()
			console.log(bikesJson)


		}catch(err){
			console.log(err)
		}
	}
	render(){
		return(
			<React.Fragment>
			<h2> BIKES!!!!!</h2>
			</React.Fragment>
			)
	}
}