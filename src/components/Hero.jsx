import { Box, Container, Text } from '@chakra-ui/react';

const Hero = () => {
	return (
		<Box
			w={'full'}
			h={'95vh'}
			backgroundImage={'url(/bg.jpg)'}
			backgroundSize={'cover'}
			backgroundPosition={'center top'}
			position={'relative'}
			mt={5}
			id='home'
		>
			<Container maxW={'container.lg'}>
				<Box
					position={'absolute'}
					w={'100%'}
					h={'100%'}
					bg={'rgba(0, 0, 0, 0.376)'}
					top={0}
					left={0}
				></Box>
				<Box
					pt={{ base: '450px', md: '200px' }}
					textAlign={'right'}
					position={'relative'}
				>
					<Text
						color={'#fff'}
						lineHeight={{ base: '50px', md: '100px' }}
						fontWeight={'600'}
						fontSize={{ base: '50px', md: '100px' }}
					>
						Traveller for life
					</Text>
					<Text
						lineHeight={'60px'}
						color={'#fff'}
						fontSize={{ base: '25px', md: '40px' }}
					>
						kive your best moments
					</Text>
				</Box>
			</Container>
		</Box>
	);
};

export default Hero;
