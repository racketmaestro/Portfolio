import { Container, Heading, SimpleGrid, Divider, Box, Text } from '@chakra-ui/react'
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
          Projects
        </Text>
      </Box>
      
      <Section>
        <WorkGridItem
          id="COMS"
          title="Canteen Management System"
          thumbnail={thumbComs}
        >
          A Lamp Stack webapp, using which the canteen vendor can manage food
          orders efficiently.
        </WorkGridItem>
      </Section>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
