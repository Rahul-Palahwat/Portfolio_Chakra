import { HStack, Icon } from '@chakra-ui/react'
import React from 'react'

import {FaFacebook,FaGoogle,FaSpotify,FaShopify} from 'react-icons/fa'

function Social() {
  return (
    <HStack spacing={24}>
        <Icon as={FaFacebook} boxSize={50}></Icon>
        <Icon as={FaGoogle} boxSize={50}></Icon>
        <Icon as={FaSpotify} boxSize={50}></Icon>
        <Icon as={FaShopify} boxSize={50}></Icon>
    </HStack>
  )
}

export default Social
