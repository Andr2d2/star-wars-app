import Card from '../UI/Card';

const Menu = ({ options, chooseOption }) => {
	return (
		<ul className='flex flex-wrap justify-evenly'>
			{options.map((option, index) => (
				<Card key={index} onClick={() => chooseOption(option.name)}>
					<div className='flex justify-between items-center'>
						<p className='text-2xl font-bold text-white my-4'>{option.name}</p>
						<span
							className={`block  w-20 h-20 ${option.img} bg-contain bg-no-repeat bg-center`}></span>
					</div>
				</Card>
			))}
		</ul>
	);
};

export default Menu;
