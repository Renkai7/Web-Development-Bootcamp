import React from "react";
import Card from "./Card";
import contacts from "./ContactList";

function createCard(contact) {
	return (
		<Card
			// id used to print contact.id to html (card component)
			id={contact.id}
			// key only for unique ID
			key={contact.id}
			name={contact.name}
			img={contact.imgURL}
			phone={contact.phone}
			email={contact.email}
		/>
	);
}

// map() loops through an array and calls function for each item in array
// map() replaces repeatedly calling Card components

function Contacts() {
	return (
		<div>
			<h1 className="heading">My Contacts</h1>
			{contacts.map(createCard)}
			{/* <Card
				name={contacts[0].name}
				img={contacts[0].imgURL}
				phone={contacts[0].phone}
				email={contacts[0].email}
			/>
			<Card
				name={contacts[1].name}
				img={contacts[1].imgURL}
				phone={contacts[1].phone}
				email={contacts[1].email}
			/>
			<Card
				name={contacts[2].name}
				img={contacts[2].imgURL}
				phone={contacts[2].phone}
				email={contacts[2].email}
			/> */}
		</div>
	);
}

export default Contacts;
