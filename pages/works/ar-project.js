import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraphs'
import Layout from '../../components/layouts/article'
export { getServerSideProps } from '../../components/chakra'

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
        <br />
        <br />
      </P>
      <br />
      <List>
        <ListItem>
          <Meta>Link</Meta>
          <Link
            target="_blank"
            href="https://github.com/racketmaestro/Augmented-Reality-Project"
          >
            Github Repository
          </Link>{' '}
          <ExternalLinkIcon></ExternalLinkIcon>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <Link>C# | Unity </Link>
        </ListItem>
      </List>
      <br />
      {/* <WorkImage src="/images/works/ar-project.png" /> */}
    </Container>
  </Layout>
)

export default Project
