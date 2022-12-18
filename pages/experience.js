import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Box,
  Text
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'

const Experience = () => (
  <Layout title="Experience">
    <Container>
    <Heading as="h3" fontSize={40} mt={10}>
                Experience
            </Heading>
    </Container>
  </Layout>
)

export default Experience
export { getServerSideProps } from '../components/chakra'
