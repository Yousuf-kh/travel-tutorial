import {
	Box,
	Container,
	Flex,
	Heading,
	Text,
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerContent,
	Button,
	useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
	const links = ['Home', 'About', 'Tours', 'Contacts'];

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [placement, setPlacement] = useState('right');

	return (
		<Box
			w={'full'}
			py={2}
			backgroundColor={'gray.100'}
			position={'fixed'}
			top={0}
			left={0}
			zIndex={99}
		>
			<Container maxW={'container.lg'}>
				<Flex justify={'space-between'} py={2} align={'center'}>
					<Heading fontSize={'30px'}>
						<Box as={'span'} color={'blue.500'}>
							Travel
						</Box>
						Dream
					</Heading>

					<Flex gap={3} display={{ base: 'none', md: 'flex' }}>
						{links.map((c, i) => (
							<Text cursor={'pointer'} key={i}>
								{c}
							</Text>
						))}
					</Flex>

					<Box display={{ base: 'block', md: 'none' }}>
						<Button colorScheme='blue' onClick={onOpen}>
							<GiHamburgerMenu />
						</Button>
						<Drawer
							placement={placement}
							onClose={onClose}
							isOpen={isOpen}
						>
							<DrawerOverlay />
							<DrawerContent>
								<DrawerBody bg={'gray.100'}>
									{links.map((c, i) => (
										<Text
											textAlign={'center'}
											p={5}
											cursor={'pointer'}
											key={i}
											bg={'#fff'}
											my={2}
											borderRadius={'10px'}
										>
											{c}
										</Text>
									))}
								</DrawerBody>
							</DrawerContent>
						</Drawer>
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};

export default Navbar;
