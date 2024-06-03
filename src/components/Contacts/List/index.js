import { useState } from 'react';

function List({contacts}) {
	const [filterText, setFilterText] = useState('');

	const filteredContacts = contacts.filter((item) => {
		return Object.keys(item).some((key) => {
			return item[key]
				.toString()
				.toLowerCase()
				.includes(filterText.toLowerCase())
		})
	})
  return (
		<div>
			<input placeholder="filter contacts" value={filterText} onChange={(e) => setFilterText(e.target.value)}/>
			<ul>{
				filteredContacts.map((contact, index) => (
					<li key={index}>{contact.fullName} {contact.phoneNumber}</li>
				))
			}</ul>
		</div>
	);
}

export default List;
