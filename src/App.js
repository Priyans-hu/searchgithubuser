import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import UserCard from './components/UserCard';

function App() {
	const [username, setUsername] = useState('');
	const [card, setCard] = useState({});

	const getUser = async (username) => {
		try {
			// resolving api promise
			const res = await fetch(`https://api.github.com/users/${username}`);
			// checking if the response is valid
			if (!res.ok){
				throw new Error(`HTTP error! Status: ${res.status}`);
			}
			// converting api response into usable json
			const userData = await res.json();
			console.log(userData);
			setCard(userData);
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<div className="App container-sm">
			<SearchForm 
				username={username} 
				setUsername={setUsername} 
				search={getUser}
			/>
			<UserCard 
				card={card}
			/>
		</div>
	);
}

export default App;
