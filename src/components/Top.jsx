import {
	Box,
	Center,
	Container,
	Grid,
	Heading,
	Image,
	Text,
} from '@chakra-ui/react';

const Top = () => {
	return (
		<Box w={'full'} py={5} minH={{ base: '150vh', md: '0vh' }}>
			<Container maxW={'container.lg'}>
				<Box textAlign={'center'} py={3}>
					<Heading>Top Destansions</Heading>
					<Text>Lorem ipsum dolor sit amet consectetur</Text>
				</Box>
				<Grid
					gridTemplateColumns={{
						base: 'repeat(1,1fr)',
						md: 'repeat(3,1fr)',
					}}
					gap={5}
					height={'65vh'}
				>
					<Box
						backgroundImage={'url(/london.jpg)'}
						backgroundSize={'cover'}
						position={'relative'}
						backgroundPosition={{ base: 'bottom', md: '' }}
					>
						<Box w={'100%'} h={'100%'} bg={'rgba(0, 0, 0, 0.376)'}>
							<Center zIndex={3} pt={'30vh'}>
								<Text
									fontSize={'40px'}
									color={'#fff'}
									fontWeight={'600'}
								>
									LONDON
								</Text>
							</Center>
						</Box>
					</Box>
					<Box
						backgroundImage={'url(/dubay.jpg)'}
						backgroundSize={'cover'}
						position={'relative'}
						backgroundPosition={{ base: 'center', md: '' }}
					>
						<Box w={'100%'} h={'100%'} bg={'rgba(0, 0, 0, 0.376)'}>
							<Center zIndex={3} pt={'30vh'}>
								<Text
									fontSize={'40px'}
									color={'#fff'}
									fontWeight={'600'}
								>
									DUBAY
								</Text>
							</Center>
						</Box>
					</Box>
					<Box
						backgroundImage={'url(/turkey.jpg)'}
						backgroundSize={'cover'}
						position={'relative'}
					>
						<Box w={'100%'} h={'100%'} bg={'rgba(0, 0, 0, 0.376)'}>
							<Center zIndex={3} pt={'30vh'}>
								<Text
									fontSize={'40px'}
									color={'#fff'}
									fontWeight={'600'}
								>
									TURKEY
								</Text>
							</Center>
						</Box>
					</Box>
				</Grid>
			</Container>
		</Box>
	);
};

export default Top;
