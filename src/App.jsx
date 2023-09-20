import { Box, Container } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Advantages from './components/Advantages';
import Top from './components/Top';
import Reviews from './components/Reviews';

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<Advantages />
			<Top />
			<Reviews />
		</>
	);
};

export default App;
