import { useState } from 'react';
import Card from '../UI/Card';

const List = ({ itens }) => {
	const [isDetailsOpened, setOpenDetails] = useState(false);

	return (
		<>
			{itens?.length && (
				<ul className='flex flex-wrap justify-evenly'>
					{itens.map((item, index) => (
						<Card
							key={index}>
							<div className='flex justify-between items-center'>
								<p className='text-2xl my-4 text-white drop-shadow-lg'>{item?.name || item?.title}</p>
							</div>
						</Card>
					))}
				</ul>
			)}
		</>
	);
};

export default List;
