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
			<input placeholder="Filter contacts" value={filterText} onChange={(e) => setFilterText(e.target.value)}/>
			<ul className='list'>{
				filteredContacts.map((contact, index) => (
					<li key={index}>
						<span>{contact.fullName}</span> 
						<span>{contact.phoneNumber}</span>
					</li>
				))
			}</ul>
			<p>{`Total contacts (${filteredContacts.length})`}</p>
		</div>
	);
}

export default List;
