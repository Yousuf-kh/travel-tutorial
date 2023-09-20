import {
	Box,
	Button,
	Container,
	Flex,
	Grid,
	Input,
	Text,
} from '@chakra-ui/react';

const Testemonial = () => {
	return (
		<Box w={'full'} py={5} bg={'blue.700'}>
			<Container maxW={'container.lg'}>
				<Grid
					gridTemplateColumns={{ base: '100%', md: '50% 50%' }}
					alignItems={'center'}
					gap={4}
				>
					<Box>
						<Text fontSize={'30px'} fontWeight={'500'} color={'#fff'}>
							NewsLetter
						</Text>
						<Text color={'#fff'}>
							Lorem, ipsum dolor sit amet consectetur adipisicing
							elit. Quia, iste?
						</Text>
					</Box>
					<Flex bg={'#fff'} borderRadius={'10px'} p={1}>
						<Input placeholder='Your Email' border={'none'} />
						<Button
							bg={'blue.600'}
							_hover={{ bg: 'blue.400' }}
							color={'#fff'}
						>
							Send
						</Button>
					</Flex>
				</Grid>
			</Container>
		</Box>
	);
};

export default Testemonial;
