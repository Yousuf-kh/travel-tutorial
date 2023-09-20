import { Box, Container, Grid } from '@chakra-ui/react';
import { SiYourtraveldottv } from 'react-icons/si';
import { GiAlarmClock } from 'react-icons/gi';
import { MdOutlineDiscount } from 'react-icons/md';
import Anvantage from './Anvantage';

const Advantages = () => {
	return (
		<Box w={'full'} bg={'gray.100'} py={10}>
			<Container maxW={'container.lg'}>
				<Grid
					gridTemplateColumns={{
						base: 'repeat(1,1fr)',
						md: 'repeat(3,1fr)',
					}}
					gap={5}
				>
					<Anvantage
						icon={SiYourtraveldottv}
						title={'Best Desttantions'}
					/>
					<Anvantage
						icon={MdOutlineDiscount}
						title={'Best Price Guaranted'}
					/>
					<Anvantage icon={GiAlarmClock} title={'Instant Booking'} />
				</Grid>
			</Container>
		</Box>
	);
};

export default Advantages;
