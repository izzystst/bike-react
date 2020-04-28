import React, { Component } from 'react'
import BikeList from "../BikeList"
import NewBikeForm from '../NewBikeForm'
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
			this.setState({
				bikes: bikesJson
			})

		}catch(err){
			console.log(err)
		}
	}
	createBike = async(bikeToAdd)=>{
		try{
			console.log("this is the new bike")
			console.log(bikeToAdd)
			const url = process.env.REACT_APP_API_URL + '/api/v1/bikes/'
			const createBikeResponse = await fetch(url, {'method': 'POST',
				headers:{ 'Content-Type': 'application/json'},
				body: JSON.stringify(bikeToAdd)
			})
			const createBikeJson = await createBikeResponse.json()
			console.log("this is after making bike")
			console.log(createBikeJson)
			const state=this.state
			if(createBikeResponse.status === 201){
				this.setState(state)
			}
		}catch(err){
			console.log(err)
		}

	}
	render(){
		console.log(this.state)
		return(
			<React.Fragment>
			<h2> BIKES!!!!!</h2>
			<NewBikeForm createBike={this.createBike} />
			<BikeList bikes={this.state.bikes} />
			</React.Fragment>
			)
	}
}