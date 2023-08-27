import { Container, Badge, Link, Spacer, Flex } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraphs'
import Layout from '../../components/layouts/article'
export { getServerSideProps } from '../../components/chakra'
import { Avatar } from '@material-ui/core'
import { Stack } from '@chakra-ui/react'

const Project = () => (
  <Layout>
    <Container>
      <Title>
        Coming soon <Badge>2023</Badge>
      </Title>
      {/* <WorkImage src="/images/works/legothumbnail.jpg" alt="lego" /> */}
      <P>

      </P>
      <br />
        <Flex>
          <Meta>Link</Meta>
          <Spacer />
          <Link
            target="_blank"
            href=""
          >
            Github Repository
          </Link>
          <ExternalLinkIcon></ExternalLinkIcon>
        </Flex>
        {/* <Flex pt={5}>
          <Meta>Platform</Meta>
          <Spacer />
          <Avatar src="/icons/raspberrypi-icon.png" title= 'RaspberryPi' />
        </Flex> */}
        <Flex pt={5}>
          <Meta>Stack</Meta>
          <Spacer />
          <Stack direction="row" spacing={2}>
            <Avatar src="/icons/python-icon-2.png" title="Python" />
          </Stack>
        </Flex>
      <br />
    </Container>
  </Layout>
)

export default Project
