import { Container, Badge, Link, Spacer, Flex, Stack, Image} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraphs'
import Layout from '../../components/layouts/article'
export { getServerSideProps } from '../../components/chakra'

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
      </Flex>
      <Flex pt={5}>
        <Meta>Stack</Meta>
        <Spacer />
        <Stack direction="row" spacing={2}>
        {/* <Image src="/icons/python-icon-2.png" alt="Python" boxSize="48px" borderRadius="full" />
        <Image src="/icons/python-icon-2.png" alt="Python" boxSize="48px" borderRadius="full" /> */}
          
        </Stack>
      </Flex>
      <br />
    </Container>
  </Layout>
)

export default Project
