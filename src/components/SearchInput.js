import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { XCircleIcon } from '@heroicons/react/24/solid';
import { useRef } from 'react';

const SearchInput = ({
	isSerching = false,
	placeholder,
	onChangeSearchHandler,
	onClearSearchHandler,
}) => {
	const searchInput = useRef();

	const clearSearch = () => {
		searchInput.current.value = '';
		onClearSearchHandler();
	};

	return (
		<div className='relative m-8 w-80 mx-auto'>
			<input
				ref={searchInput}
				type='text'
				className={`rounded-full py-2 px-4 pr-12 text-white capitalize bg-black border-2 border-yellow-500 ${isSerching ? 'opacity-50' : ''}`}
				placeholder={placeholder}
				disabled={isSerching}
				onKeyUp={(event) => onChangeSearchHandler(event.currentTarget.value)}
			/>

			{searchInput?.current?.value && (
				<XCircleIcon
					className='absolute my-auto right-12 top-2 h-6 w-6 text-yellow-500'
					onClick={() => clearSearch(searchInput)}
				/>
			)}
			<MagnifyingGlassIcon className='absolute my-auto right-4 top-2 h-6 w-6 text-yellow-500' />
		</div>
	);
};

export default SearchInput;
