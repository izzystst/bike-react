import React from 'react'
import { Card, Button } from 'semantic-ui-react'

export default function BikeList(props){
	const bikes = props.bikes.map((bike, i)=>{
		return(
			<Card key={bike.id}>
			<Card.Content textAlign={'center'}>
			<Card.Header>
				{bike.brand} {bike.model}
			</Card.Header>
			<Card.Description>
			This bike is a {bike.biketype} with {bike.gears} gears.
			</Card.Description>
			</Card.Content>
			<Card.Content textAlign={"center"}>
			<Button 
				basic color='red'
				onClick={ ()=> props.deleteBike(bike.id, i) }>Delete </Button>
			<Button 
			basic color='yellow'
			onClick={ ()=> props.editBike(bike.id, i) }>Edit </Button>
			</Card.Content>

			</Card>

		)
	})
	return(
		<React.Fragment>
		<h2>BikeList</h2>
		<Card.Group centered={true}>
			{bikes}
		</Card.Group>
		</React.Fragment>
	)
}