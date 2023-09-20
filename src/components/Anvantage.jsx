import { Box, Flex, Icon, Text } from '@chakra-ui/react';

const Anvantage = ({ icon, title }) => {
	return (
		<Box p={2} borderRadius={'10px'} bg={'#fff'}>
			<Flex align={'center'} gap={5}>
				<Icon fontSize={'45px'} as={icon} />
				<Box>
					<Text fontWeight={'600'} fontSize={'20px'}>
						{title}
					</Text>
					<Text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</Text>
				</Box>
			</Flex>
		</Box>
	);
};

export default Anvantage;
