import { Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import LegoImg from '../public/images/works/legothumbnail.jpg'

const Works = () => (
    <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={40} mt={10}>
                Projects
            </Heading>

            <Section delay={0.2}>
                <Divider my={6} />
                <Heading as="h3" fontSize={20} mb={4}>
                    Internship Projects
                </Heading>
            </Section>

            <SimpleGrid columns={[1, 1, 1]} gap={6}>
                <Section delay={0.3}>
                    <WorkGridItem id="lego" title="Lego motion detection and classification" thumbnail={LegoImg}>
                        Machine Learning CNN model built on RaspberryPi during my internship at Nullspace Robotics, Singapore
                    </WorkGridItem>
                </Section>
            </SimpleGrid>

            <Section delay={0.2}>
                <Divider my={6} />
                <Heading as="h3" fontSize={20} mb={4}>
                    University Projects
                </Heading>
            </Section>
        </Container>
    </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
