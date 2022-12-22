const Card = ({ className, children, index, onClick }) => {
	return (
		<li
			key={index}
			className={`cursor-pointer backdrop-blur-sm w-80 px-4 py-2 m-2 bg-transparent-black border-2 rounded-md border-transparent-yellow ${className}`}
			onClick={onClick}>
			{children}
		</li>
	);
};

export default Card;
