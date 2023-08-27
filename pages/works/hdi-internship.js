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
        Internship <Badge>2023</Badge>
      </Title>

      <P>
        <br />
        <br />
        Ending in Sep 2023

      </P>
      
      <Flex>
        <Meta>Link</Meta>
        <Spacer />
        <Link
          target="_blank"
          href="">
          Writeup
        </Link>
        <ExternalLinkIcon></ExternalLinkIcon>
      </Flex>
      <Flex pt={5}>
        <Meta>Platform</Meta>
        <Spacer />
        {/* <Avatar src="/icons/android-icon.png" title="Android" /> */}
      </Flex>
      <Flex pt={5}>
        <Meta>Stack</Meta>
        <Spacer />
        <Stack direction="row" spacing={2}>
          <Avatar src="/icons/azure.jpg" title="Azure" />
          <Avatar src="/icons/cosmosdb.png" title="Unity" />
        </Stack>
      </Flex>
      <br />
    </Container>
  </Layout>
)

export default Project
