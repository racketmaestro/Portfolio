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
  chakra
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Intro from '../components/intro'


const Home = () => (
  <Layout>
    <Container>
      <Intro />

    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
