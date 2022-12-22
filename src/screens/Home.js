import Container from '../UI/Container';
import Menu from '../components/Menu';
import starWarsLogo from './../assets/imgs/star-wars-logo.png';


const Home = ({ menuOptions, changeScreenTo }) => {
	return (
		<Container>
			<img
				className='w-48 h-auto m-10 mx-auto'
				src={starWarsLogo}
				alt='star wars logo'
			/>
			<p className='text-white text-3xl font-semibold mb-4 text-center'>Choose you destiny</p>
			<Menu options={menuOptions} chooseOption={changeScreenTo}/>
		</Container>
	);
};

export default Home;
