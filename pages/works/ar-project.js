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
        Work in progress!
        <br />
        <br />
        Building an animal themed AR game, together with a team of 9 other students,
        that empowers inclusive learning among children with learning/physical disabilities.
        <br />
        <br />
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
