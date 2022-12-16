import {
  Container,
  Heading,
  SimpleGrid,
  Divider,
  Box,
  Text
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbComs from '../public/images/works/coms-home.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Box position="relative">
        <Text
          color="displayColor"
          fontSize="3xl"
          fontWeight="medium"
          position="relative"
        >
          Projects ⚙️
        </Text>
        <Text>
          Work in Progress!
        </Text>
      </Box>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
