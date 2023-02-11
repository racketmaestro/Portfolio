import { Container, Badge, Link, Spacer, Flex, Stack} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraphs'
import Layout from '../../components/layouts/article'
export { getServerSideProps } from '../../components/chakra'
import { Avatar } from '@material-ui/core'
import { SlideFade } from '@chakra-ui/react'

const Project = () => (
  <Layout>
    <Container>
      <Title>
        Augmented Reality <Badge>2022</Badge>
      </Title>
      <WorkImage src="/images/works/ar-project-thumbnail.jpg" alt="ar" />
      <P>
        Work in progress! This project is expected to be completed in June 2023
        <br />
        <br />
        As the Lead Developer of a 10-member team in my second-year design engineering project, 
        I had the privilege of working in collaboration with a charity that supports children with neurodisabilities. Our goal was to develop an
        Augmented Reality Game that would empower inclusive learning and enhance the motor and visual skills of these children.
        <br />
        <br />
        To achieve this, I learnt how to use Unity Engine and Vuforia, an industry-leading augmented reality SDK, 
        to create an interactive and immersive game experience. 
        I wrote efficient C# scripts to program the game and streamline its development process, 
        ultimately resulting in significant time savings. 
        As the Lead Developer, I coordinated and supervised
        various aspects of the game development, such as 3D modelling, sound effects, and UI/UX. 
        This helped ensure seamless integration of all team members' work, resulting in a cohesive and polished product.
    

      </P>
      <br />

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
        <Avatar src="/icons/android-icon.png" title="Android" />
      </Flex>
      <Flex pt={5}>
        <Meta>Stack</Meta>
        <Spacer />
        <Stack direction="row" spacing={2}>
          <Avatar src="/icons/c-sharp-icon.png" title="C#" />
          <Avatar src="/icons/unity-icon-2.png" title="Unity" />
        </Stack>
      </Flex>
      <br />
    </Container>
  </Layout>
)

export default Project
