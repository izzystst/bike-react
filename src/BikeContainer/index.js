import React, { Component } from 'react'
import BikeList from "../BikeList"
import NewBikeForm from '../NewBikeForm'
import EditBikeModal from '../EditBikeModal'
export default class BikeContainer extends Component {
	constructor(props){
		super(props)
		this.state={
			bikes:[],
			idOfBikeToEdit: -1
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
	deleteBike = async(idOfBikeToDelete, indexOfBikeToDelete)=>{
		const bikes=this.state.bikes
		const url = process.env.REACT_APP_API_URL + '/api/v1/bikes/' + idOfBikeToDelete
		try{
			const deleteBikeResponse = await fetch(url, {
				'method': "DELETE"
			})
			const deleteBikeJson = await deleteBikeResponse.json()
			console.log("this is the bike delete json")
			console.log(deleteBikeJson)
			bikes.splice(indexOfBikeToDelete, 1)
			this.setState({
				bikes:bikes
			})
		}catch(err){
			console.log(err)
		}
	}
	editBike=(idOfBikeToEdit)=>{
		this.setState({
			idOfBikeToEdit: idOfBikeToEdit
		})
	}
	render(){
		console.log(this.state)
		return(
			<React.Fragment>
			<h2> BIKES!!!!!</h2>
			<NewBikeForm createBike={this.createBike} />
			<BikeList 
				bikes={this.state.bikes}
				deleteBike={this.deleteBike}
				editBike={this.editBike}
			 />
			 {this.state.idOfBikeToEdit !== -1
			 	&&
			 <EditBikeModal
			 	bikeToEdit={this.state.bikes.find((dog)=> dog.id===this.state.idOfBikeToEdit)}
			 />
			 }
			</React.Fragment>
			)
	}
}