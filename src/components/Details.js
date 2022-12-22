const Details = (data) => {
	const buildPropListItem = (object) => {
		for (const key in object) {
			if (Object.hasOwnProperty.call(object, key)) {
				const element = object[key];
				return `<li
                    className='w-72 px-4 py-2 m-2 bg-black flex justify-between items-center border-2 rounded-br-xl rounded-tl-xl border-yellow-500'>
                        <p className='text-lg font-semibold text-white'>
                            ${key}
                            <span>${element}</span>
                        </p>
                    </li>`;
			}
		}
	};

	return (
		<section className='container mx-auto flex justify-center mb-4'>
			<ul className='flex flex-wrap justify-center'>
				{buildPropListItem(data)}
			</ul>
		</section>
	);
};

export default Details;
