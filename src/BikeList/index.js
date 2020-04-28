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