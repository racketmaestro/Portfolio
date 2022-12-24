import TechStack from '../components/TechStack/tech-stack'
import Layout from '../components/layouts/article'
import { Heading, Text, Container, Divider } from '@chakra-ui/layout'
import Section from '../components/section'
import EngineeringStack from '../components/TechStack/engineering-stack'

const Stack = () => (
  <Layout>
    <Container>
      <Heading as="h3" fontSize={40} mt={10}>
        Tech Stack
      </Heading>
      <Text as='h2' fontSize={20} pt = {3}>
        List of technologies that I am familiar with
      </Text>
      <Section delay={0.2}>
        <Divider my={6} />
        <Text as="h1" fontSize="large" mb={4}>
          Software
        </Text>
      </Section>
      <TechStack />
      <Section delay={0.2}>
        <Divider my={6} />
        <Text as="h1" fontSize="large" mb={4}>
          Engineering
        </Text>
      </Section>
      <EngineeringStack />

      
    </Container>
  </Layout>
)

export default Stack
export { getServerSideProps } from '../components/chakra'
