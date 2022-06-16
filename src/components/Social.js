import { Icon, Flex, useMediaQuery, Grid } from '@chakra-ui/react'
import React from 'react'

import {FaFacebook,FaGoogle,FaSpotify,FaShopify} from 'react-icons/fa'

function Social() {
  	const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  	return (
		<Grid templateColumns={isNotSmallerScreen ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)'} gap={10} templateRows={isNotSmallerScreen ? 'repeat(1, 1fr)' : 'repeat(2, 1fr)' }>
			<Icon as={FaFacebook} boxSize={50}></Icon>
			<Icon as={FaGoogle} boxSize={50}></Icon>
			<Icon as={FaSpotify} boxSize={50}></Icon>
			<Icon as={FaShopify} boxSize={50}></Icon>
		</Grid>
  	)
}

export default Social
