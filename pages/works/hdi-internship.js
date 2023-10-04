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
        Mobicare is a POC project developed by me and 4 fellow interns at Health Data Insight. It is an iOS mobile app that implements indoor positioning system, 
        designed to enhance hospital efficiency and user experience within the hospital.

        Aiming to address the common challenges of misplaced equipment and lost individuals, 
        the system offers precise indoor navigation services and asset tracking capabilities. 
        The implementation of indoor positioning and space visualization sets the foundation for 
        further digital innovations of space-aware applications within hospital settings  


        <br />
        <br />
        Official write up will be published on the HDI website soon!
        <br />
        <br />
      </P>
      
      <Flex>
        <Meta>Link</Meta>
        <Spacer />
        <Link
          target="_blank"
          href="https://healthdatainsight.org.uk/">
          Writeup
        </Link>
        <ExternalLinkIcon></ExternalLinkIcon>
      </Flex>
      <Flex pt={5}>
        <Meta>Platform</Meta>
        <Spacer />
        <Image src="/icons/apple.png" alt="nodejs" boxSize="48px" borderRadius="full" />
      </Flex>
      <Flex pt={5}>
        <Meta>Stack</Meta>
        <Spacer />
        <Stack direction="row" spacing={2}>
            <Image src="/icons/swift.png" alt="Swift" boxSize="48px" borderRadius="full" />
            <Image src="/icons/azure.jpg" alt="Azure" boxSize="48px" borderRadius="full" />
            <Image src="/icons/node-js.png" alt="nodejs" boxSize="48px" borderRadius="full" />

          </Stack>
      </Flex>
      <br />
    </Container>
  </Layout>
)

export default Project
