import Card from './Card';

const Loading = ({ amountItens = 6 }) => {
	const amountArray = [...Array(amountItens).keys()];

	return (
		<ul className='flex flex-wrap justify-evenly'>
			{amountArray.map((item, index) => (
				<Card className='animate-pulse py-3' key={index}>
                    <div className='flex items-center justify-between'>
                        <div className='flex my-4 h-5'>
                            <span className='w-16 mr-3 bg-slate-700 rounded'></span>
                            <span className='w-8 mr-3 bg-slate-700 rounded'></span>
                            <span className='w-20 bg-slate-700 rounded'></span>
                        </div>
                        <div className='w-4 h-6 my-4 bg-slate-700 rounded'></div>
                    </div>
				</Card>
			))}
		</ul>
	);
};

export default Loading;
