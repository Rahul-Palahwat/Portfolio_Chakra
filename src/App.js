import './App.css';
import {Flex, Heading, IconButton, Spacer, useColorMode, VStack} from "@chakra-ui/react";
import {FaSun,FaMoon,FaInstagram,FaGithub, FaLinkedin} from 'react-icons/fa'
import Header from './components/Header';
import Social from './components/Social';
import Profile from './components/Profile';

function App() {

  const {colorMode, toggleColorMode} = useColorMode();

  const isDark= colorMode==="dark";

  return (
    <VStack p={5}>
      	<Flex w="100%" justifyContent={'space-between'} alignItems={'center'}>
			<Heading size="md" fontWeight="semibold" color="cyan.400">IMRK</Heading>
			{/* <Spacer /> */}
			<Flex direction={'row'} justifyContent='space-between'>
				<IconButton icon={<FaLinkedin/>} isRound="true"></IconButton>
				<IconButton ml={2} icon={<FaInstagram/>} isRound="true"></IconButton>
				<IconButton ml={2} icon={<FaGithub/>} isRound="true"></IconButton>
				<IconButton ml={2} icon={isDark?<FaSun/>:<FaMoon/>} isRound="true" onClick={toggleColorMode}></IconButton>
			</Flex>
      	</Flex>
      	<Header/>
      	<Social/>
      	<Profile/>
    </VStack>
  );
}

export default App;
