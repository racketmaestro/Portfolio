import { Container, Heading, SimpleGrid, Divider, Text, Spacer} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
// import ARImg from '../public/images/works/ar-project-thumbnail.jpg'
// import LegoImg from '../public/images/works/legothumbnail.jpg'
// import WebImg from '../public/icons/react-icon-3.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={40} mt={10}>
        Projects
      </Heading>
      <Text as="h3" fontSize="m" mb={6} fontWeight="normal">
        Internships, School and Personal Projects.
      </Text>
      <Divider />
      <SimpleGrid columns={[1, 1, 1]} gap={2} mt={10}>
        <Section delay={0.3}>
          <WorkGridItem
            id="lego"
            title="Lego motion detection and classification"
            // thumbnail={LegoImg}
            readingTime={2}
          >
            Machine Learning CNN model built on RaspberryPi during my internship
            at Nullspace Robotics, Singapore
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="ar-project"
            title="Augmented Reality for Inclusive Learning"
            // thumbnail={ARImg}
            readingTime={3}
          >
            Building AR game in Unity to enhance learning experience for
            children with cerebral palsy. In collaboration with PACE Centre.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="portfolio-website"
            title="React Portfolio Website"
            readingTime={1}
            // thumbnail={WebImg}
          >
            This website you are browsing through right now! A personal
            portfolio project to showcase my works and experience.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
