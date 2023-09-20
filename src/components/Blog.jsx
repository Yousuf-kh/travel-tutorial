import {
	Box,
	Center,
	Container,
	Flex,
	Grid,
	Heading,
	Image,
	Text,
} from '@chakra-ui/react';

const Blog = () => {
	return (
		<Box w={'full'} py={5} id='blog'>
			<Container maxW={'container.xl'}>
				<Center py={2}>
					<Heading>BLOG</Heading>
				</Center>
				<Grid
					gridTemplateColumns={{
						base: '100%',
						md: '60% 40%',
					}}
					gap={5}
				>
					<Box>
						<Image w={'100%'} src={'/turkey.jpg'} />
						<Heading>Turkey</Heading>
						<Text>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Maxime blanditiis sint architecto odio quisquam
							velit ducimus amet obcaecati alias. Qui excepturi odio
							expedita quas perferendis unde quidem laudantium sunt
							quaerat possimus, nisi ut veritatis fugiat
							exercitationem cum soluta et ratione.
						</Text>
					</Box>
					<Box>
						<Flex
							pb={3}
							align={'center'}
							gap={3}
							flexDir={{ base: 'column', md: 'row' }}
						>
							<Image src={'/paris.jpg'} w={'250px'} h={'150px'} />
							<Box>
								<Heading fontSize={'20px'}>Paris</Heading>
								<Text>
									Lorem ipsum dolor sit, amet consectetur adipisicing
									elit. Maxime blanditiis sint architecto odio
									quisquam velit ducimus amet obcaecati alias
								</Text>
							</Box>
						</Flex>
						<Flex
							pb={3}
							align={'center'}
							gap={3}
							flexDir={{ base: 'column', md: 'row' }}
						>
							<Image src={'/london.jpg'} w={'250px'} h={'150px'} />
							<Box>
								<Heading fontSize={'20px'}>London</Heading>
								<Text>
									Lorem ipsum dolor sit, amet consectetur adipisicing
									elit. Maxime blanditiis sint architecto odio
									quisquam velit ducimus amet obcaecati alias
								</Text>
							</Box>
						</Flex>
						<Flex
							pb={3}
							align={'center'}
							gap={3}
							flexDir={{ base: 'column', md: 'row' }}
						>
							<Image src={'/dubay.jpg'} w={'250px'} h={'150px'} />
							<Box>
								<Heading fontSize={'20px'}>Dubai</Heading>
								<Text>
									Lorem ipsum dolor sit, amet consectetur adipisicing
									elit. Maxime blanditiis sint architecto odio
									quisquam velit ducimus amet obcaecati alias
								</Text>
							</Box>
						</Flex>
					</Box>
				</Grid>
			</Container>
		</Box>
	);
};

export default Blog;
