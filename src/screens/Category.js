import { useEffect, useState } from 'react';
import { ArrowUturnLeftIcon } from '@heroicons/react/24/solid';
import Container from '../UI/Container';
import List from '../components/List';
import SearchInput from '../components/SearchInput';
import Loading from '../UI/Loading';
import Api from '../Api';

const Category = ({ category, changeScreenTo }) => {
	let debounce;

	const [categoryData, setCategoryData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	
	const fetchDataHandler = async (category) => {
		setIsLoading(true);
		const data = await Api.getCategory(category);
		setIsLoading(false);

		return setCategoryData(data.results);
	};

	const fetchSearchHandler = async (category,searchFor) => {
		setIsLoading(true);
		const data = await Api.getSearch(category, searchFor);
		setIsLoading(false);

		return setCategoryData(data.results);
	};

	const searchHandler = (searchFor, delay = 1000) => {
		if (searchFor.length <= 3) {
			return;
		}

		clearTimeout(debounce);

		debounce = setTimeout(() => {
			fetchSearchHandler(category, searchFor);
		}, delay);
	};

	const clearSearchHandler = () => {
		fetchDataHandler(category);
	};

	useEffect(() => {
		fetchDataHandler(category);
	}, []);

	return (
		<Container>
			<div className='mb-8 flex items-center'>
				<button
					type='button'
					className='p-4 text-white flex'
					onClick={() => changeScreenTo(undefined)}>
					<ArrowUturnLeftIcon className='w-6 h-6 text-white mr-2' />
				</button>
				<p className='text-2xl font-bold text-white my-4'>{category}</p>
			</div>
			<SearchInput
				isSerching={isLoading}
				placeholder={`Search in ${category}...`}
				onClearSearchHandler={clearSearchHandler}
				onChangeSearchHandler={searchHandler}
			/>
			{isLoading ? <Loading /> : <List itens={categoryData} />}
		</Container>
	);
};

export default Category;
