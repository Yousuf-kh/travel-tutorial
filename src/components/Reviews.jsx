import {
	Box,
	Center,
	Container,
	Grid,
	Heading,
} from '@chakra-ui/react';
import Rewiew from './Rewiew';

const Reviews = () => {
	return (
		<Box w={'full'} py={5} bg={'gray.100'}>
			<Container maxW={'container.lg'}>
				<Center py={2}>
					<Heading>Reviews</Heading>
				</Center>
				<Grid
					gridTemplateColumns={{
						base: 'repeat(1,1fr)',
						md: 'repeat(3,1fr)',
					}}
					gap={5}
				>
					<Rewiew
						img={'/user1.webp'}
						title={'Andrew Garfield'}
						value={5}
					/>
					<Rewiew
						img={'/user2.jpg'}
						title={'Di Kaprio'}
						value={4.5}
					/>
					<Rewiew
						img={'/user3.webp'}
						title={'Joni Dep'}
						value={4.5}
					/>
				</Grid>
			</Container>
		</Box>
	);
};

export default Reviews;
