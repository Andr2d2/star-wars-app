import { useState } from 'react';
import Category from './screens/Category';
import Home from './screens/Home';

function App() {
	const [category, setCategory] = useState(undefined);

	const menuOptions = [
		{ name: 'Films', img: 'bg-films' },
		{ name: 'People', img: 'bg-people' },
		{ name: 'Planets', img: 'bg-planets' },
		{ name: 'Species', img: 'bg-species' },
		{ name: 'Starships', img: 'bg-starships' },
		{ name: 'Vehicles', img: 'bg-vehicles' },
	];

	const changeScreen = (category) => setCategory(category);

	return (
		<main className='bg-starField bg-center bg-cover h-screen flex flex-col overflow-y-scroll'>
			{!category ? (
				<Home
					menuOptions={menuOptions}
					changeScreenTo={changeScreen}
				/>
			) : (
				<Category category={category} changeScreenTo={changeScreen} />
				// <Search category={category} changeScreenTo={changeScreen} />
			)}
		</main>
	);
}

export default App;
