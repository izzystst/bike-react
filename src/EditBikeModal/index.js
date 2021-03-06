import React, { Component } from 'react'
import { Form, Button, Label, Segment } from 'semantic-ui-react'

export default class EditBikeModal extends Component {
	constructor(props){
		super(props)
		this.state={
			biketype: props.bikeToEdit.biketype,
			brakes: props.bikeToEdit.brakes,
			brand: props.bikeToEdit.brand,
			gears: props.bikeToEdit.gears,
			model: props.bikeToEdit.model
		}

	}
	handleChange=(event)=>{
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleCheckChange=(event)=>{
		const newVal = !this.state.brakes
		this.setState({
			brakes: newVal
	})
	}
	handleSubmit=(event)=>{
		event.preventDefault()
		this.props.updateBike(this.state)
	}
	render(){
		console.log(this.state)
		return(
			<Segment>
			<h4>Edit a bike!</h4>
			<Form onSubmit={this.handleSubmit}>
				<Label>Bike Type:</Label>
				<Form.Input
					type='text'
					name="biketype"
					value={this.state.biketype}
					placeholder="What type of bike is this?"
					onChange={this.handleChange}
				/>
				<Label>Brakes: (check if true)</Label>
				<Form.Input
					type='checkbox'
					checked={this.state.brakes}
					name="brakes"
					value={this.state.brakes}
					placeholder="Does it have brakes??"
					onChange={this.handleCheckChange}
				/>
				<Label>Brand:</Label>

				<Form.Input
					type='text'
					name="brand"
					value={this.state.brand}
					placeholder="What brand is it??"
					onChange={this.handleChange}
				/>
				<Label>Gears:</Label>
				<Form.Input
					type='number'
					name="gears"
					value={this.state.gears}
					placeholder="Does it have gears?"
					onChange={this.handleChange}
				/>
				<Label>Model:</Label>
				<Form.Input
					type='text'
					name="model"
					value={this.state.model}
					placeholder="What is the bike model?"
					onChange={this.handleChange}
				/>
				<Button type='Submit'>Update Bike!</Button>
			</Form>
			</Segment>

	)}
}


