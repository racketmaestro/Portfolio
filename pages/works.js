import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import ARImg from '../public/images/works/ar-project-thumbnail.jpg'
import LegoImg from '../public/images/works/legothumbnail.jpg'
import WebImg from '../public/icons/react-icon-3.jpg'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={40} mt={10}>
        Projects
      </Heading>

      <Section delay={0.2}>
        <Divider my={6} />
        {/* <Heading as="h3" fontSize='2xl' mb={4}>
          Internship Projects
        </Heading> */}
      </Section>

  <SimpleGrid columns={[2, 2, 2]} gap={8}>
    {/* <Section delay={0.3}>
      <WorkGridItem
        id="hdi-internship"
        title="Mobicare"
        thumbnail={LegoImg}
      >
        Machine Learning CNN model built on RaspberryPi during my internship
        at Nullspace Robotics, Singapore
      </WorkGridItem>
    </Section> */}
    <Section delay={0.3}>
      <WorkGridItem
        id="lego"
        title="Lego motion detection and classification"
        thumbnail={LegoImg}
      >
        Machine Learning CNN model built on RaspberryPi during my internship
        at Nullspace Robotics, Singapore
      </WorkGridItem>
    </Section>
    <Section delay={0.3}>
      <WorkGridItem
        id="ar-project"
        title="Augmented Reality in Unity"
        thumbnail={ARImg}
      >
        Building AR game in Unity to enhance learning experience for children with cerebral palsy.
        In collaboration with PACE Centre.
      </WorkGridItem>
    </Section>
    <Section delay={0.3}>
      <WorkGridItem
        id="portfolio-website"
        title="React Portfolio Website"
        thumbnail={WebImg}
      >
        This website you are browsing through right now! A personal portfolio project to showcase my works and experience.
      </WorkGridItem>
    </Section>
  </SimpleGrid>
</Container>

  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
