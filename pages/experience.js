import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Box,
  Text
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import BioTimeline from '../components/biotimeline'
const Experience = () => {
  return (
    <Layout title="Experience">
      <Container>
        <Heading as="h3" fontSize={40} mt={10} mb={10}>
          Experience
        </Heading>
        <BioTimeline />
      </Container>
    </Layout>
  )
}

export default Experience
export { getServerSideProps } from '../components/chakra'
