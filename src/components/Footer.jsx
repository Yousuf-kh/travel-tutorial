import {
	Box,
	Container,
	Flex,
	Heading,
	Text,
} from '@chakra-ui/react';

const Footer = () => {
	return (
		<Box w={'full'} bg={'blue.600'} py={4}>
			<Container maxW={'container.lg'}>
				<Flex align={'center'} justify={'space-between'}>
					<Heading color={'#fff'} fontSize={'30px'}>
						<Box as={'span'} color={'gray.900'}>
							Travel
						</Box>
						Dream
					</Heading>
					<Text color={'#fff'}>yousuf.ac | 2023</Text>
				</Flex>
			</Container>
		</Box>
	);
};

export default Footer;
