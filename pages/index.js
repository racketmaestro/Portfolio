import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra,
  Wrap
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Intro from '../components/intro'
import AboutMe from '../components/about-me'
import Contact from '../components/contact'


const Home = () => (
  <Layout>
    <Container>
      
      <Intro />
      <AboutMe />
  
    
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
