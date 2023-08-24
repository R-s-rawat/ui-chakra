import {Flex,VStack,Heading,Spacer} from "@chakra-ui/layout";
import {IconButton} from "@chakra-ui/button";

import {useColorMode} from"@chakra-ui/color-mode";

import {FaSun,FaMoon,FaInstagram,FaGithub, FaLinkedin}from 'react-icons/fa';

 import Header from './components/Header';
 import Social from './components/Social';
 import Profile from './components/Profile';

function App() {

  const {colorMode,toggleColorMode} = useColorMode();

const isDark = colorMode === "dark";

return (
  <VStack p={5}>
    <Flex w="100%">
    <Heading ml="8" size="md"
    fontWeight="semibold" color="cyan.400">
    imthesr
    </Heading>
    
    <Spacer></Spacer> {/*used to fill space*/}
    <IconButton
    icon={<FaLinkedin/>}
    isRound="true"
    ></IconButton>

    <IconButton
    icon={<FaInstagram/>}
    ml={2}
    isRound="true"
    ></IconButton>

    <IconButton
    icon={<FaGithub/>}
    ml={2}
    isRound="true"
    ></IconButton>

    <IconButton ml={8}
     // icon={<FaSun />}
     icon={isDark?<FaSun/>:<FaMoon/>}
    isRound="true"
    onClick={toggleColorMode}
    >
    </IconButton>
    </Flex>

    <Header></Header>
    <Social></Social>
    <Profile></Profile>

    
    </VStack>

    


  );
}

export default App;
