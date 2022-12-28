import {
  Container,
  Badge,
  Link,
  Spacer,
  Flex,
  List,
  ListItem,
  ListIcon
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraphs'
import Layout from '../../components/layouts/article'
export { getServerSideProps } from '../../components/chakra'
import { Avatar } from '@material-ui/core'
import { Stack } from '@chakra-ui/react'
import {SiAccenture} from "react-icons/si"

const Project = () => (
  <Layout>
    <Container>
      <Title>
        Portfolio Website <Badge>2022</Badge>
      </Title>
      <WorkImage src="/images/works/portfolio-website.jpg" alt="lego" />
      <P>
        <br />
        <br />
        Work in progress!
        <br />
        <br />
        Built with: 
        <br /><br />
        <List spacing={2}>
          <ListItem>
            <ListIcon as = {SiAccenture} color="green.500" />
            NextJS
          </ListItem>
          <ListItem>
            <ListIcon as = {SiAccenture} color="green.500" />
            Chakra UI
          </ListItem>
          <ListItem>
            <ListIcon as = {SiAccenture} color="green.500" />
            Material UI
          </ListItem>
          <ListItem>
            <ListIcon as = {SiAccenture} color="green.500" />
            ThreeJS
          </ListItem>          
        </List>
      </P>
      <br />
      <Flex>
        <Meta>Source Code</Meta>
        <Spacer />
        <Link target="_blank" href="https://github.com/racketmaestro/Portfolio">
          Github Repository
        </Link>
        <ExternalLinkIcon></ExternalLinkIcon>
      </Flex>
      <Flex pt={5}>
        <Meta>Deployment Platform</Meta>
        <Spacer />
        <Avatar src="/icons/vercel-icon.png" title="Vercel" />
      </Flex>
      <Flex pt={5}>
        <Meta>Stack</Meta>
        <Spacer />
        <Stack direction="row" spacing={2}>
          <Avatar src="/icons/threejs-icon.png" title="Threejs" />
          <Avatar src="/icons/react-icon-2.png" title="React" />
          <Avatar src="/icons/chakra-ui-icon.png" title="ChakraUI" />
          <Avatar src="/icons/linux-icon.png" title="Linux" />
          <Avatar src="/icons/javascript-icon.png" title="JavaScript" />
        </Stack>
      </Flex>
      <br />
    </Container>
  </Layout>
)

export default Project
