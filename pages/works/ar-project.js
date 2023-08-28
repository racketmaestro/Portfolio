import { Container, Badge, Link, Spacer, Flex, Stack, Image} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraphs'
import Layout from '../../components/layouts/article'
export { getServerSideProps } from '../../components/chakra'
import { SlideFade } from '@chakra-ui/react'

const Project = () => (
  <Layout>
    <Container>
      <Title>
        Augmented Reality <Badge>2022</Badge>
      </Title>
      <WorkImage src="/images/works/ar-thumbnail.png" alt="ar" />
      <P>
        <br />
        <br />
        As the Lead Developer of a 10-member team in my second-year design engineering project, 
        I had the privilege of working in collaboration with a charity that supports children with neurodisabilities. 
        Specifically, we aimed to create an interactive and inclusive storytelling game that not only provides an educational 
        experience but also facilitates the motor and cognitive skills development of children with cerebral palsy.
        <br />
        <br />
        To achieve this, I learnt how to use Unity Engine and Vuforia, an industry-leading augmented reality SDK, 
        to create an interactive and immersive Augmented Reality game experience. 
        I wrote efficient C# scripts to program the game and streamline its development process, 
        ultimately resulting in significant time savings. 
        As the Lead Developer, I coordinated and supervised
        various aspects of the game development, such as 3D modelling, sound effects, and UI/UX. 
        This helped ensure seamless integration of all team members' work, resulting in a cohesive and polished product.
        <br />
        <br />
        The game involved placing image targets around the classroom, and the student will have a
         tablet mounted to a wheelchair. During the game, the dialogue will prompt the student to search for the correct image target.
          By directing the camera towards the 
        correct target, 3D model of different animals and habitats are projected onto the image target,
         immersing children in a captivating world of animals as they complete unique activities. 
         <br />
         <br />
         Overall, it was a rewarding experience that underscored the importance of creating inclusive 
         and accessible educational tools for all children.


      </P>
      <br />
      <WorkImage src="/images/works/ar-image-3.jpg" alt="ar" />
      <br />
      <WorkImage src="/images/works/ar-image2.jpg" alt="ar" />
      <Flex>
        <Meta>Link</Meta>
        <Spacer />
        <Link
          target="_blank"
          href="https://github.com/racketmaestro/DAPP-Animal-Game">
          Github Repository
        </Link>
        <ExternalLinkIcon></ExternalLinkIcon>
      </Flex>
      <Flex pt={5}>
        <Meta>Platform</Meta>
        <Spacer />
        <Image src="/icons/android-icon.png" title="Android" alt="C#" boxSize="48px" borderRadius="full" />
      </Flex>
      <Flex pt={5}>
        <Meta>Stack</Meta>
        <Spacer />
        <Stack direction="row" spacing={2}>
          <Image src="/icons/c-sharp-icon.png" alt="C#" boxSize="48px" borderRadius="full" />
          <Image src="/icons/unity-icon-2.png" alt="Unity" boxSize="48px" borderRadius="full" />
        </Stack>
      </Flex>
      <br />
    </Container>
  </Layout>
)

export default Project
