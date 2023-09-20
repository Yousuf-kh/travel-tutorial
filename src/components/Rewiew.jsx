import { Box, Center, Image, Text } from '@chakra-ui/react';
import React from 'react';
import ReactStars from 'react-stars';

const Rewiew = ({ img, title, value }) => {
	return (
		<Box bg={'#fff'} borderRadius={'10px'} p={5}>
			<Center>
				<Image
					w={'50px'}
					h={'50px'}
					src={img}
					borderRadius={'100%'}
				/>
			</Center>
			<Text textAlign={'center'} color={'blue.500'} py={1}>
				{title}
			</Text>
			<Text textAlign={'center'}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
				non nam, exercitationem iste laudantium quod.
			</Text>
			<Center>
				<ReactStars
					edit={false}
					value={value}
					size={24}
					color2={'#ffd700'}
				/>
			</Center>
		</Box>
	);
};

export default Rewiew;
